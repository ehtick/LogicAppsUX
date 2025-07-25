import type { Connector } from './connector';

export interface UploadChunkMetadata {
  chunkTransferSupported?: boolean;
  acceptUploadSize?: boolean;
  minimumSize?: number;
  maximumSize?: number;
}

export interface DownloadChunkMetadata {
  acceptDownloadSize?: boolean;
  minimumSize?: number;
  maximumSize?: number;
}

export interface OperationInfo {
  connectorId: string;
  operationId: string;
}

export interface SecureDataOptions {
  outputsMode?: OutputSecureDataMode;
}

export const OutputSecureDataMode = {
  Disabled: 'disabled',
  LinkedToInputs: 'linkedtoinputs',
};
export type OutputSecureDataMode = (typeof OutputSecureDataMode)[keyof typeof OutputSecureDataMode];

export const SettingScope = {
  Trigger: 'trigger',
  Action: 'action',
};
export type SettingScope = (typeof SettingScope)[keyof typeof SettingScope];

export const ExecutionOrder = {
  Parallel: 'parallel',
  Sequential: 'sequential',
};
export type ExecutionOrder = (typeof ExecutionOrder)[keyof typeof ExecutionOrder];

export const OperationOptions = {
  Asynchronous: 'Asynchronous',
  DisableAsyncPattern: 'DisableAsyncPattern',
  DisableAutomaticDecompression: 'DisableAutomaticDecompression',
  EnableSchemaValidation: 'EnableSchemaValidation',
  SuppressWorkflowHeaders: 'SuppressWorkflowHeaders',
  SuppressWorkflowHeadersOnResponse: 'SuppressWorkflowHeadersOnResponse',
  FailWhenLimitsReached: 'FailWhenLimitsReached',
};
export type OperationOptions = (typeof OperationOptions)[keyof typeof OperationOptions];

export const CustomSwaggerServiceNames = {
  Function: 'function',
  ApiManagement: 'apimanagement',
};
export type CustomSwaggerServiceNames = (typeof CustomSwaggerServiceNames)[keyof typeof CustomSwaggerServiceNames];

export interface CustomSwaggerServiceDetails {
  name: CustomSwaggerServiceNames;
  operationId: string;
  parameters: Record<
    string,
    {
      parameterReference: string;
    }
  >;
}

export const ConnectionType = {
  Function: 'function',
  ServiceProvider: 'serviceprovider',
  ApiManagement: 'apimanagement',
  ApiConnection: 'apiconnection',
  Agent: 'agent',
};
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

export const ConnectionReferenceKeyFormat = {
  ApiManagement: 'apimanagement',
  Function: 'function',
  OpenApi: 'openapi',
  OpenApiConnection: 'openapiconnection', // TODO: This can change when backend fixes a value, right now this is not used by any manifest.
  ServiceProvider: 'serviceprovider',
  HybridTrigger: 'hybridtrigger',
  AgentConnection: 'agentconnection',
};
export type ConnectionReferenceKeyFormat = (typeof ConnectionReferenceKeyFormat)[keyof typeof ConnectionReferenceKeyFormat];

export interface ActionSetting {
  allowedOperations?: OperationInfo[];
  executionOrder?: ExecutionOrder;
  allowedSettings?: string[];
  isOptional: boolean;
}

export type SplitOn = string | any[] | undefined;

export interface OperationManifestSetting<T> {
  scopes?: SettingScope[]; // NOTE: If the scopes set to undefined, then the options apply to all scopes.
  options?: T;
}

// TODO: Combine chunking and download chunking.
export interface OperationManifestSettings {
  chunking?: OperationManifestSetting<UploadChunkMetadata>;
  concurrency?: OperationManifestSetting<void>;
  invokerConnection?: OperationManifestSetting<void>;
  correlation?: OperationManifestSetting<void>;
  downloadChunking?: OperationManifestSetting<DownloadChunkMetadata>;
  operationOptions?: OperationManifestSetting<OperationOptions[]>;
  paging?: OperationManifestSetting<void>;
  requestOptions?: OperationManifestSetting<void>;
  retryPolicy?: OperationManifestSetting<void>;
  secureData?: OperationManifestSetting<SecureDataOptions>;
  timeout?: OperationManifestSetting<void>;
  trackedProperties?: OperationManifestSetting<void>;
  count?: OperationManifestSetting<void>;
}

export interface Badge {
  name: string;
  description: string;
}

export interface RepetitionInfo {
  self?: {
    parametersToExclude?: string[];
  };
  loopParameter?: string;
}

export interface BuiltInOutput {
  name: string;
  title: string;
  type: string;
  required: boolean;
}

export const RecurrenceType = {
  None: 'none',
  Basic: 'basic',
  Advanced: 'advanced',
};
export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export interface RecurrenceSetting {
  type: RecurrenceType;
  useLegacyParameterGroup?: boolean;
}

export interface ConnectionMetadata {
  required: boolean;
  type?: ConnectionType;
  connectionCreationClient?: string;
}

export interface ConnectionReferenceKeyFormatMapping {
  referenceKeyFormat: ConnectionReferenceKeyFormat;
}

export interface Documentation {
  url: string;
}

export interface SubGraphDetail {
  location?: string[];
  inputs?: SwaggerSchema;
  inputsLocation?: string[];
  isAdditive?: boolean;
}

export interface InputsDependency {
  outputLocation: string[];
  name: string;
  schema: 'UriTemplate' | 'Value' | 'ValueSchema';
}

type SwaggerSchema = any;
export interface LocationSwapMap {
  source: string[];
  target: string[];
}

export interface OperationManifest {
  properties: OperationManifestProperties;
}

export interface SupportedChannels {
  input: {
    type: string;
    kind?: string;
    default?: Record<string, string>;
  };
  output: {
    type: string;
    kind?: string;
    default?: SwaggerSchema;
  };
}

export interface OperationManifestProperties {
  iconUri: string;
  brandColor: string;
  description?: string;
  summary?: string;

  allowChildOperations?: boolean;
  childOperationsLocation?: string[];

  subGraphDetails?: Record<string, SubGraphDetail>;

  statusBadge?: Badge;
  environmentBadge?: Badge;

  outputTokens?: {
    selfReference?: boolean;
    disableTokens?: boolean;
    builtIns?: BuiltInOutput[];
  };

  repetition?: RepetitionInfo;

  recurrence?: RecurrenceSetting;

  inputs?: SwaggerSchema;
  inputsLocation?: string[]; // Note: If not specified, default value is [ 'inputs' ]
  inputsLocationSwapMap?: LocationSwapMap[];
  isInputsOptional?: boolean;

  outputs?: SwaggerSchema;
  outputsSchema?: {
    outputPaths: InputsDependency[];
  };

  customSwagger?: {
    location?: string[];
    service?: CustomSwaggerServiceDetails;
  };

  supportedChannels?: SupportedChannels[];

  /*
   * Note: Output resolution takes place as follows. If no payload outputs are present, then use outputs.
   * If payload outputs are present then walk the path defined by alternativeOutputs.keyPath to find the outputsKey. If the outputsKey is not defined, use outputs.
   * If outputsKey is defined and specifically present inside of alternativeOutputs.schemas, use the corresponding schema from alternativeOutputs.schemas.
   * Else, if outputsKey is defined but not specifically considered, use alternativeOutputs.defaultSchema.
   */
  alternativeOutputs?: {
    keyPath: string[];
    defaultSchema: SwaggerSchema;
    schemas: Record<string, SwaggerSchema>;
  };
  isOutputsOptional?: boolean;

  settings?: OperationManifestSettings;

  trigger?: string;
  triggerHint?: string;
  connector?: Connector;
  autoCast?: boolean;
  includeRootOutputs?: boolean;

  actions?: ActionSetting[];

  connection?: ConnectionMetadata;
  connectionReference?: ConnectionReferenceKeyFormatMapping;

  externalDocs?: Documentation;

  dynamicContent?: {
    payloadConfiguration?: string[];
  };
}

export type SubgraphType =
  | 'CONDITIONAL_TRUE'
  | 'CONDITIONAL_FALSE'
  | 'SWITCH_CASE'
  | 'AGENT_CONDITION'
  | 'SWITCH_DEFAULT'
  | 'SWITCH_ADD_CASE'
  | 'AGENT_ADD_CONDITON'
  | 'UNTIL_DO';
export const SUBGRAPH_TYPES: Record<string, SubgraphType> = {
  CONDITIONAL_TRUE: 'CONDITIONAL_TRUE',
  CONDITIONAL_FALSE: 'CONDITIONAL_FALSE',
  SWITCH_CASE: 'SWITCH_CASE',
  AGENT_CONDITION: 'AGENT_CONDITION',
  SWITCH_DEFAULT: 'SWITCH_DEFAULT',
  SWITCH_ADD_CASE: 'SWITCH_ADD_CASE',
  AGENT_ADD_CONDITON: 'AGENT_ADD_CONDITON',
  UNTIL_DO: 'UNTIL_DO',
};

export const RUN_AFTER_STATUS = {
  SUCCEEDED: 'SUCCEEDED',
  FAILED: 'FAILED',
  SKIPPED: 'SKIPPED',
  TIMEDOUT: 'TIMEDOUT',
  HANDOFF: 'HANDEDOFF',
};
export type RUN_AFTER_STATUS = (typeof RUN_AFTER_STATUS)[keyof typeof RUN_AFTER_STATUS];

export const RUN_AFTER_COLORS = {
  light: {
    [RUN_AFTER_STATUS.SUCCEEDED]: '#428000',
    [RUN_AFTER_STATUS.TIMEDOUT]: '#DB7500',
    [RUN_AFTER_STATUS.SKIPPED]: '#605E5C',
    [RUN_AFTER_STATUS.FAILED]: '#A4262C',
    ['EMPTY']: '#fff',
  },
  dark: {
    [RUN_AFTER_STATUS.SUCCEEDED]: '#92C353',
    [RUN_AFTER_STATUS.TIMEDOUT]: '#FCE100',
    [RUN_AFTER_STATUS.SKIPPED]: '#A19F9D',
    [RUN_AFTER_STATUS.FAILED]: '#F1707B',
    ['EMPTY']: '#323130',
  },
};
