import type {
  DiscoveryOperation,
  SomeKindOfAzureOperationDiscovery,
  DiscoveryOpArray,
  Connector,
  ArmResource,
  DiscoveryWorkflow,
  DiscoveryWorkflowTrigger,
  BuiltInOperation,
} from '../../../utils/src';
import { ArgumentException, equals, getResourceNameFromId, normalizeConnectorIds } from '../../../utils/src';
import { AzureConnectorMock } from '../__test__/__mocks__/azureConnectorResponse';
import { azureOperationsResponse } from '../__test__/__mocks__/azureOperationResponse';
import type { ContinuationTokenResponse } from '../common/azure';
import type { IHttpClient, QueryParameters } from '../httpClient';
import { LoggerService } from '../logger';
import { Status } from '../logging/logEntry';
import type { ISearchService } from '../search';
import * as ClientOperationsData from './operations';

export type AzureOperationsFetchResponse = ContinuationTokenResponse<DiscoveryOperation<SomeKindOfAzureOperationDiscovery>[]>;

export interface BaseSearchServiceOptions {
  apiHubServiceDetails: {
    apiVersion: string;
    subscriptionId: string;
    location: string;
    openApiVersion?: string;
  };
  httpClient: IHttpClient;
  isDev?: boolean;
  locale?: string;
  unsupportedConnectorIds?: string[];
}

const ISE_RESOURCE_ID = 'properties/integrationServiceEnvironmentResourceId';

export abstract class BaseSearchService implements ISearchService {
  _isDev = false; // TODO: Find a better way to do this, can't use process.env.NODE_ENV here
  _isHybridLogicApp = false;
  _unsupportedConnectorIds: string[] = [];

  constructor(public readonly options: BaseSearchServiceOptions) {
    const { apiHubServiceDetails, isDev, unsupportedConnectorIds } = options;
    if (!apiHubServiceDetails) {
      throw new ArgumentException('apiHubServiceDetails required for workflow app');
    }
    this._isDev = isDev || false;
    this._unsupportedConnectorIds = normalizeConnectorIds(
      unsupportedConnectorIds ?? [],
      apiHubServiceDetails.subscriptionId,
      apiHubServiceDetails.location,
      true
    );
  }

  public abstract getAllOperations(): Promise<DiscoveryOpArray>;

  // Paginated Preload

  public abstract getCustomConnectorsByNextlink(prevNextlink?: string): Promise<{ nextlink?: string; value: Connector[] }>;
  public abstract getBuiltInConnectors(): Promise<Connector[]>;

  public abstract getCustomOperationsByPage(page: number): Promise<DiscoveryOpArray>;
  public abstract getBuiltInOperations(): Promise<DiscoveryOpArray>;

  async getAzureResourceByPage(
    uri: string,
    queryParams?: any,
    pageNumber = 0,
    pageSize = 5000
  ): Promise<{ value: any[]; hasMore: boolean }> {
    if (this._isDev) {
      return { value: [], hasMore: false };
    }

    const { httpClient, locale } = this.options;

    const queryParameters: QueryParameters = {
      $top: pageSize.toString(),
      $skiptoken: (pageNumber * pageSize).toString(),
      ...queryParams,
    };

    const headers = locale ? { 'Accept-Language': locale } : undefined;

    try {
      const { nextLink, value = [] } = await httpClient.get<ContinuationTokenResponse<any[]>>({ uri, queryParameters, headers });
      return { value, hasMore: !!nextLink };
    } catch (_error) {
      return { value: [], hasMore: false };
    }
  }

  async getAzureResourceRecursive(uri: string, queryParams: any): Promise<any[]> {
    const { httpClient, locale } = this.options;

    const headers = locale ? { 'Accept-Language': locale } : undefined;

    const requestPage = async (uri: string, value: any[], queryParameters?: any): Promise<any> => {
      try {
        const { nextLink, value: newValue } = await httpClient.get<ContinuationTokenResponse<any[]>>({ uri, queryParameters, headers });
        value.push(...newValue);
        if (nextLink) {
          return await requestPage(nextLink, value);
        }
        return value;
      } catch (_error) {
        return value;
      }
    };

    return requestPage(uri, [], queryParams);
  }

  async getAllAzureOperations(): Promise<DiscoveryOpArray> {
    const traceId = LoggerService().startTrace({
      name: 'Get All Azure Operations',
      action: 'getAllAzureOperations',
      source: 'connection.ts',
    });

    const {
      apiHubServiceDetails: { location, subscriptionId },
    } = this.options;
    if (this._isDev) {
      return Promise.resolve(azureOperationsResponse);
    }

    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/apiOperations`;
    const queryParameters: QueryParameters = {
      $filter: "type eq 'Microsoft.Web/locations/managedApis/apiOperations' and properties/integrationServiceEnvironmentResourceId eq null",
    };

    // const operations = await this.batchAzureResourceRequests(uri, queryParameters);
    const operations = await this.getAzureResourceRecursive(uri, queryParameters);

    LoggerService().endTrace(traceId, { status: Status.Success });
    return this.removeUnsupportedOperations(operations);
  }

  async getOperationsByConnector(connectorId: string, actionType?: 'triggers' | 'actions'): Promise<DiscoveryOpArray> {
    const {
      apiHubServiceDetails: { location, subscriptionId, apiVersion },
    } = this.options;

    const connectorName = getResourceNameFromId(connectorId);
    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/managedApis/${connectorName}/apiOperations`;

    let filter: string | undefined;

    if (actionType === 'triggers') {
      filter = 'properties/trigger ne null';
    } else if (actionType === 'actions') {
      filter = 'properties/trigger eq null';
    }

    const queryParameters: QueryParameters = {
      'api-version': apiVersion,
      ...(filter ? { $filter: filter } : {}),
    };

    const { value } = await this.getAzureResourceByPage(uri, queryParameters);
    return this.removeUnsupportedOperations(value);
  }

  async getAzureOperationsByPage(page: number): Promise<DiscoveryOpArray> {
    const {
      apiHubServiceDetails: { location, subscriptionId, apiVersion },
    } = this.options;
    if (this._isDev) {
      if (page === 0) {
        return Promise.resolve(azureOperationsResponse);
      }
      return Promise.resolve([]);
    }

    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/apiOperations`;
    const queryParameters: QueryParameters = {
      $filter: "type eq 'Microsoft.Web/locations/managedApis/apiOperations' and properties/integrationServiceEnvironmentResourceId eq null",
      'api-version': apiVersion,
    };

    // const values = await this.pagedBatchAzureResourceRequests(page, uri, queryParameters);
    const { value } = await this.getAzureResourceByPage(uri, queryParameters, page);
    return this.removeUnsupportedOperations(value);
  }

  abstract getAllConnectors(): Promise<Connector[]>;

  async getAllAzureConnectors(): Promise<Connector[]> {
    if (this._isDev) {
      const connectors = AzureConnectorMock.value as Connector[];
      const formattedConnectors = this.moveGeneralInformation(connectors);
      return Promise.resolve(formattedConnectors);
    }

    const {
      apiHubServiceDetails: { location, subscriptionId },
    } = this.options;
    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/managedApis`;
    // const responseArray = await this.batchAzureResourceRequests(uri);
    const responseArray = await this.getAzureResourceRecursive(uri, undefined);
    const supportedResponseArray = this.removeUnsupportedConnectors(responseArray);
    return this.moveGeneralInformation(supportedResponseArray);
  }

  async getAzureConnectorsByPage(page: number): Promise<Connector[]> {
    if (this._isDev) {
      if (page === 0) {
        const connectors = AzureConnectorMock.value as Connector[];
        const formattedConnectors = this.moveGeneralInformation(connectors);
        return Promise.resolve(formattedConnectors);
      }
      return Promise.resolve([]);
    }

    const {
      apiHubServiceDetails: { location, subscriptionId, apiVersion, openApiVersion },
    } = this.options;
    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/managedApis`;
    // const responseArray = await this.pagedBatchAzureResourceRequests(page, uri, undefined, 5);
    const { value } = await this.getAzureResourceByPage(uri, { 'api-version': openApiVersion ?? apiVersion }, page);
    const supportedValue = this.removeUnsupportedConnectors(value);
    return this.moveGeneralInformation(supportedValue);
  }

  async getAllCustomApiOperations(): Promise<DiscoveryOpArray> {
    try {
      const {
        apiHubServiceDetails: { apiVersion, subscriptionId, location },
      } = this.options;
      const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/apiOperations`;
      const queryParameters: QueryParameters = {
        'api-version': apiVersion,
        $filter: `type eq 'Microsoft.Web/customApis/apiOperations' and ${ISE_RESOURCE_ID} eq null`,
      };
      // const response = await this.batchAzureResourceRequests(uri, queryParameters);
      return this.getAzureResourceRecursive(uri, queryParameters);
    } catch (_error) {
      return [];
    }
  }

  async getAllCustomApiConnectors(): Promise<Connector[]> {
    try {
      const {
        apiHubServiceDetails: { apiVersion, subscriptionId, location },
      } = this.options;
      const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/customApis`;
      const queryParameters: QueryParameters = {
        'api-version': apiVersion,
        $filter: `${ISE_RESOURCE_ID} eq null`,
      };
      // const response = await this.batchAzureResourceRequests(uri, queryParameters);
      const response = await this.getAzureResourceRecursive(uri, queryParameters);
      const locationFilteredResponse = response.filter((connector: any) => equals(connector.location, location));
      return locationFilteredResponse;
    } catch (_error) {
      return [];
    }
  }

  private moveGeneralInformation(connectors: Connector[]): Connector[] {
    connectors.forEach((connector) => {
      if (connector.properties.generalInformation) {
        // eslint-disable-next-line no-param-reassign
        connector.properties.displayName = connector.properties.generalInformation.displayName ?? '';
        // eslint-disable-next-line no-param-reassign
        connector.properties.iconUri = connector.properties.generalInformation.iconUrl ?? '';
      }
    });
    return connectors;
  }

  private removeUnsupportedOperations(operations: DiscoveryOpArray): DiscoveryOpArray {
    return operations.filter((operation) => !this._unsupportedConnectorIds.includes(operation?.properties?.api?.id?.toLowerCase()));
  }

  private removeUnsupportedConnectors(connectors: Connector[]): Connector[] {
    return connectors.filter((connector) => !this._unsupportedConnectorIds.includes(connector?.id?.toLowerCase()));
  }

  private async getWorkflows($filter: string): Promise<any[]> {
    const {
      apiHubServiceDetails: { apiVersion, subscriptionId, location },
    } = this.options;
    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Logic/workflows`;
    const queryParameters: QueryParameters = {
      'api-version': apiVersion,
      ...($filter ? { $filter } : {}),
    };
    const response = await this.getAzureResourceRecursive(uri, queryParameters);
    return response.filter((workflow: any) => workflow.location === location);
  }

  public async getRequestWorkflows(): Promise<ArmResource<DiscoveryWorkflow>[]> {
    return this.getWorkflows(`contains(Trigger, 'Request') and (${ISE_RESOURCE_ID} eq null)`);
  }

  public async getBatchWorkflows(): Promise<ArmResource<DiscoveryWorkflow>[]> {
    return this.getWorkflows(`contains(Trigger, 'Batch') and (${ISE_RESOURCE_ID} eq null)`);
  }

  public async getWorkflowTriggers(workflowId: string): Promise<ArmResource<DiscoveryWorkflowTrigger>[]> {
    const {
      httpClient,
      apiHubServiceDetails: { apiVersion },
      locale,
    } = this.options;
    const uri = `${workflowId}/triggers`;
    const queryParameters: QueryParameters = { 'api-version': apiVersion };
    const headers = locale ? { 'Accept-Language': locale } : undefined;
    const response = await httpClient.get<any>({ uri, queryParameters, headers });
    return response?.value ?? [];
  }

  /// Active search ///
  ///   - This is called when making a search and we haven't finished preloading
  ///   - Won't be a fuzzy search but if we haven't finished preloading it will get the user some data to work with
  ///   - We're only searching Azure operations for now, built-in and custom both are quick to preload

  public async getActiveSearchOperations?(searchTerm: string, actionType?: string): Promise<DiscoveryOpArray> {
    const {
      apiHubServiceDetails: { location, subscriptionId, apiVersion },
    } = this.options;
    if (this._isDev) {
      return Promise.resolve([]);
    }

    const traceId = LoggerService().startTrace({
      name: 'Get Active Search Operations',
      action: 'getActiveSearchOperations',
      source: 'connection.ts',
    });

    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/apiOperations`;
    const filters = [
      "type eq 'Microsoft.Web/locations/managedApis/apiOperations'",
      'properties/integrationServiceEnvironmentResourceId eq null',
      ...(actionType === 'trigger' ? ['properties/trigger ne null'] : []),
      ...(actionType === 'action' ? ['properties/trigger eq null'] : []),
    ];
    const queryParameters: QueryParameters = {
      $filter: filters.join(' and '),
      $search: `"${searchTerm}"`,
      'api-version': apiVersion,
    };

    const operations = await this.getAzureResourceRecursive(uri, queryParameters);

    LoggerService().endTrace(traceId, { status: Status.Success });
    return this.removeUnsupportedOperations(operations);
  }

  /// Agent search ///
  ///   - This is called when fetching operations for a given connector
  public async getAgentConnectorOperation?(connectorId: string): Promise<DiscoveryOpArray> {
    const {
      apiHubServiceDetails: { location, subscriptionId, apiVersion },
    } = this.options;
    if (this._isDev) {
      const operations = (await this.getBuiltInOperations()).filter(
        (op) => op.properties.api.id === connectorId && op.properties.trigger === undefined
      );
      return Promise.resolve(operations);
    }

    const traceId = LoggerService().startTrace({
      name: 'Get Agent Connector Operations',
      action: 'getAgentConnectorOperations',
      source: 'connection.ts',
    });

    const uri = `/subscriptions/${subscriptionId}/providers/Microsoft.Web/locations/${location}/apiOperations`;
    const filters = [
      'properties/integrationServiceEnvironmentResourceId eq null', // Excludes integration service environment operations
      `(properties/api.id eq '${connectorId}' or properties/connector.id eq '${connectorId}')`, // Includes both API-based and connector-based operations
      'properties/trigger eq null', // Ensures we only get actions (operations that are NOT triggers)
    ];

    const queryParameters: QueryParameters = {
      $filter: filters.join(' and '),
      'api-version': apiVersion,
    };

    const operations = await this.getAzureResourceRecursive(uri, queryParameters);

    LoggerService().endTrace(traceId, { status: Status.Success });
    return this.removeUnsupportedOperations(operations);
  }
}

export function getClientBuiltInOperations(
  filterOperation?: (operation: DiscoveryOperation<BuiltInOperation>) => boolean
): DiscoveryOperation<BuiltInOperation>[] {
  const allOperations: DiscoveryOperation<BuiltInOperation>[] = [
    ClientOperationsData.requestOperation,
    ClientOperationsData.responseOperation,
    ClientOperationsData.parseJsonOperation,
    ClientOperationsData.csvTableOperation,
    ClientOperationsData.htmlTableOperation,
    ClientOperationsData.queryOperation,
    ClientOperationsData.selectOperation,
    ClientOperationsData.joinOperation,
    ClientOperationsData.scopeOperation,
    ClientOperationsData.terminateOperation,
    ClientOperationsData.ifOperation,
    ClientOperationsData.foreachOperation,
    ClientOperationsData.untilOperation,
    ClientOperationsData.switchOperation,
    ClientOperationsData.agentOperation,
    ClientOperationsData.handoffOperation,
    ClientOperationsData.recurrenceOperation,
    ClientOperationsData.delayOperation,
    ClientOperationsData.delayUntilOperation,
    ClientOperationsData.httpActionOperation,
    ClientOperationsData.httpTriggerOperation,
    ClientOperationsData.httpSwaggerActionOperation,
    ClientOperationsData.httpSwaggerTriggerOperation,
    ClientOperationsData.httpWebhookActionOperation,
    ClientOperationsData.httpWebhookTriggerOperation,
    ClientOperationsData.initializeVariableOperation,
    ClientOperationsData.setVariableOperation,
    ClientOperationsData.incrementVariableOperation,
    ClientOperationsData.decrementVariableOperation,
    ClientOperationsData.appendStringVariableOperation,
    ClientOperationsData.appendArrayVariableOperation,
    ClientOperationsData.convertTimezoneOperation,
    ClientOperationsData.addToTimeOperation,
    ClientOperationsData.subtractFromTimeOperation,
    ClientOperationsData.getFutureTimeOperation,
    ClientOperationsData.getPastTimeOperation,
    ClientOperationsData.currentTimeOperation,
  ];
  return filterOperation ? allOperations.filter(filterOperation) : allOperations;
}

export function getClientBuiltInConnectors(filterConnector?: (connector: Connector) => boolean): Connector[] {
  const allConnectors: any[] = [
    ClientOperationsData.requestGroup,
    ClientOperationsData.httpGroup,
    ClientOperationsData.variableGroup,
    ClientOperationsData.controlGroup,
    ClientOperationsData.agentGroup,
    ClientOperationsData.scheduleGroup,
    ClientOperationsData.dateTimeGroup,
  ];
  return filterConnector ? allConnectors.filter(filterConnector) : allConnectors;
}
