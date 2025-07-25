import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../core/state/mcp/store';
import { useCallback, useMemo } from 'react';
import { CheckmarkCircle20Filled, ConnectorFilled, Delete24Regular, Edit24Regular } from '@fluentui/react-icons';
import {
  Text,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  Button,
  TableBody,
  tokens,
  Spinner,
} from '@fluentui/react-components';
import { useIntl } from 'react-intl';
import { useConnectorSectionStyles } from '../wizard/styles';
import { McpPanelView, openConnectorPanelView } from '../../../core/state/mcp/panel/mcpPanelSlice';
import { selectConnectorId, selectOperations } from '../../../core/state/mcp/connector/connectorSlice';
import { ConnectorIconWithName } from '../../templates/connections/connector';
import { useConnectionById } from '../../../core/queries/connections';
import { getResourceNameFromId } from '@microsoft/logic-apps-shared';
import { deinitializeOperations } from '../../../core/actions/bjsworkflow/mcp';

const connectorTableCellStyles = {
  border: 'none',
};

export const ListConnectors = () => {
  const dispatch = useDispatch<AppDispatch>();
  const intl = useIntl();
  const { operationInfos, isInitializingOperations, connectionsMapping, connectionReferences } = useSelector((state: RootState) => ({
    operationInfos: state.operation.operationInfo,
    isInitializingOperations: state.operation.loadStatus.isInitializingOperations,
    connectionsMapping: state.connection.connectionsMapping,
    connectionReferences: state.connection.connectionReferences,
  }));

  const INTL_TEXT = {
    noConnectors: intl.formatMessage({
      id: 'xyhnsP',
      defaultMessage: 'No connectors added yet',
      description: 'Message displayed when no connectors are available',
    }),
    addFirstConnector: intl.formatMessage({
      id: 'i/0DrA',
      defaultMessage: 'Add your first connector to get started',
      description: 'Message prompting the user to add their first connector',
    }),
    connectorLabel: intl.formatMessage({
      defaultMessage: 'Name',
      id: 'T1q9LE',
      description: 'The label for the connector column',
    }),
    connectionLabel: intl.formatMessage({
      defaultMessage: 'Connection',
      id: 'cjWC0X',
      description: 'The label for the connection column',
    }),
    statusLabel: intl.formatMessage({
      defaultMessage: 'Status',
      id: 'ozFnEE',
      description: 'The label for the status column',
    }),
    tableAriaLabel: intl.formatMessage({
      defaultMessage: 'List of connectors with their connections',
      id: 'd9Ooue',
      description: 'The aria label for the connections table',
    }),
    editButtonLabel: intl.formatMessage({
      defaultMessage: 'Edit connector',
      id: 'RTfra/',
      description: 'Label for the edit connector button',
    }),
    deleteButtonLabel: intl.formatMessage({
      defaultMessage: 'Delete connector',
      id: '8e1bKU',
      description: 'Label for the delete connector button',
    }),
    connectedText: intl.formatMessage({
      defaultMessage: 'Connected',
      id: 'V7NT3q',
      description: 'Text indicating a connector is connected',
    }),
    disconnectedText: intl.formatMessage({
      defaultMessage: 'Disconnected',
      id: 'ssR+UG',
      description: 'Text indicating a connector is disconnected',
    }),
    noConnectionText: intl.formatMessage({
      defaultMessage: 'No Connection',
      id: '7kyZuO',
      description: 'Text indicating there is no connection for the connector',
    }),
    loadingConnectorsText: intl.formatMessage({
      defaultMessage: 'Loading connectors...',
      id: 'TWeskw',
      description: 'Loading message for connectors',
    }),
  };

  const styles = useConnectorSectionStyles();

  const items = useMemo(() => {
    const seen = new Set<string>();

    return Object.values(operationInfos).reduce<
      Array<{
        connectorId: string;
        connectionId: string;
        isConnected: boolean;
      }>
    >((acc, info) => {
      const connectorId = info?.connectorId;
      if (!connectorId || seen.has(connectorId)) {
        return acc;
      }

      seen.add(connectorId);

      const referenceKey = connectionsMapping[info.operationId];
      const reference = referenceKey ? connectionReferences[referenceKey] : null;

      const isConnected = !!reference;

      acc.push({
        connectorId,
        connectionId: reference?.connection?.id ?? '',
        isConnected,
      });

      return acc;
    }, []);
  }, [connectionReferences, connectionsMapping, operationInfos]);

  const columns = [
    { columnKey: 'connector', label: INTL_TEXT.connectorLabel },
    { columnKey: 'connection', label: INTL_TEXT.connectionLabel },
    { columnKey: 'status', label: INTL_TEXT.statusLabel },
    { columnKey: 'actions', label: '' }, // Empty label for actions column
  ];

  const handleEditConnector = useCallback(
    (connectorId: string) => {
      // Get all operations for this specific connector
      const connectorOperations = Object.entries(operationInfos)
        .filter(([_, info]) => info?.connectorId === connectorId)
        .map(([operationId, _]) => operationId);

      dispatch(selectConnectorId(connectorId));
      dispatch(selectOperations(connectorOperations)); // Pass the actual operations instead of empty array
      dispatch(
        openConnectorPanelView({
          panelView: McpPanelView.SelectOperation,
        })
      );
    },
    [dispatch, operationInfos] // Add operationInfos to dependencies
  );

  const handleDeleteConnector = useCallback(
    (connectorId: string) => {
      const operationIdsToDelete = Object.entries(operationInfos)
        .filter(([_, info]) => info?.connectorId === connectorId)
        .map(([operationId, _]) => operationId);

      if (operationIdsToDelete.length > 0) {
        dispatch(deinitializeOperations({ operationIds: operationIdsToDelete }));
      }
    },
    [operationInfos, dispatch]
  );

  if (isInitializingOperations) {
    return (
      <div className={styles.emptyState}>
        <Spinner size="medium" label={INTL_TEXT.loadingConnectorsText} />
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyStateIcon}>
          <ConnectorFilled />
        </div>
        <Text size={400} weight="semibold" style={{ marginBottom: '8px' }}>
          {INTL_TEXT.noConnectors}
        </Text>
        <Text size={200} style={{ opacity: 0.7, marginBottom: '24px' }}>
          {INTL_TEXT.addFirstConnector}
        </Text>
      </div>
    );
  }

  return (
    <Table className={styles.tableStyle} aria-label={INTL_TEXT.tableAriaLabel} size="small">
      <TableHeader>
        <TableRow style={connectorTableCellStyles}>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey} style={connectorTableCellStyles}>
              <Text weight="semibold">{column.label}</Text>
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody style={connectorTableCellStyles}>
        {items.map((item) => (
          <TableRow key={item.connectorId} style={connectorTableCellStyles}>
            <TableCell className={styles.iconTextCell} style={connectorTableCellStyles}>
              <ConnectorIconWithName
                classes={{
                  root: 'msla-template-create-connector',
                  icon: 'msla-template-create-connector-icon',
                  text: 'msla-template-create-connector-text',
                }}
                connectorId={item.connectorId}
                onNameClick={() => handleEditConnector(item.connectorId)}
              />
            </TableCell>
            <TableCell style={connectorTableCellStyles}>
              {item?.isConnected ? (
                <ConnectionDisplayName connectorId={item.connectorId} connectionId={item.connectionId} />
              ) : (
                INTL_TEXT.noConnectionText
              )}
            </TableCell>
            <TableCell className={styles.iconTextCell} style={connectorTableCellStyles}>
              {item?.isConnected ? <CheckmarkCircle20Filled className={styles.icon} color={tokens.colorPaletteGreenBackground3} /> : null}
              <Text>{item?.isConnected ? INTL_TEXT.connectedText : INTL_TEXT.disconnectedText}</Text>
            </TableCell>
            <TableCell className={styles.iconsCell} style={connectorTableCellStyles}>
              <Button
                className={styles.icon}
                appearance="subtle"
                size="small"
                icon={<Edit24Regular />}
                onClick={() => handleEditConnector(item.connectorId)}
                aria-label={INTL_TEXT.editButtonLabel}
              />
              <Button
                appearance="subtle"
                size="small"
                icon={<Delete24Regular />}
                onClick={() => handleDeleteConnector(item.connectorId)}
                aria-label={INTL_TEXT.deleteButtonLabel}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export const ConnectionDisplayName = ({
  connectorId,
  connectionId,
}: {
  connectorId: string;
  connectionId: string;
}) => {
  const connectionInfo = useConnectionById(connectionId, connectorId);

  return <Text>{connectionInfo?.result?.properties?.displayName ?? getResourceNameFromId(connectionId)}</Text>;
};
