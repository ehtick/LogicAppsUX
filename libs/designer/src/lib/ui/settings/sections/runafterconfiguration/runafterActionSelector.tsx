import type { AppDispatch, RootState } from '../../../../core';
import { addOperationRunAfter, removeOperationRunAfter } from '../../../../core/actions/bjsworkflow/runafter';
import { useOperationVisuals } from '../../../../core/state/operation/operationSelector';
import { useOperationPanelSelectedNodeId } from '../../../../core/state/panel/panelSelectors';
import { useNodeDisplayName, useRootTriggerId } from '../../../../core/state/workflow/workflowSelectors';
import { useIsA2AWorkflow } from '../../../../core/state/designerView/designerViewSelectors';
import { Button, Input, Menu, MenuButton, MenuItemCheckbox, MenuList, MenuPopover, MenuTrigger, Text } from '@fluentui/react-components';
import { Add20Filled, Add20Regular, DismissRegular, Search24Regular, bundleIcon } from '@fluentui/react-icons';
import { LogEntryLevel, LoggerService, getRecordEntry, type LogicAppsV2 } from '@microsoft/logic-apps-shared';
import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

const AddIcon = bundleIcon(Add20Filled, Add20Regular);
const getSuccessorNodes = (state: RootState, nodeId: string) => {
  const wfs = state.workflow;
  let successors: string[] = [];
  let nodes = [nodeId];
  const processedNodes: string[] = [];

  while (nodes.length) {
    const node = nodes.shift();
    if (!node || processedNodes.includes(node)) {
      continue;
    }
    processedNodes.push(node);
    const newNodes = Object.entries(wfs.operations)
      // eslint-disable-next-line no-loop-func
      .filter(([, op]: [string, LogicAppsV2.ActionDefinition]) => !!getRecordEntry(op.runAfter, node))
      .map(([key]) => key);
    successors = [...successors, ...newNodes];
    nodes = [...nodes, ...newNodes];
  }
  return [...new Set(successors)];
};

const ActionMenuItem = ({ id, readOnly }: { id: string; readOnly: boolean }) => {
  const iconUri = useOperationVisuals(id)?.iconUri;
  const actionName = useNodeDisplayName(id);
  return (
    <MenuItemCheckbox
      name="actions"
      value={id}
      icon={<img style={{ height: '24px', width: '24px' }} src={iconUri} alt="" />}
      tabIndex={1}
      disabled={readOnly}
    >
      <Text style={{ overflow: 'hidden' }}>{actionName}</Text>
    </MenuItemCheckbox>
  );
};

export const RunAfterActionSelector = ({ readOnly }: { readOnly: boolean }) => {
  const intl = useIntl();
  const [searchText, setSearchText] = useState<string>('');
  const currentNodeId = useOperationPanelSelectedNodeId();
  const currentNodeRunAfter = useSelector((state: RootState) => getRecordEntry(state.workflow.operations, currentNodeId));
  const rootTriggerId = useRootTriggerId();
  const isA2AWorkflow = useIsA2AWorkflow();

  const actions = useSelector((state: RootState) => {
    if (!currentNodeRunAfter) {
      return [];
    }
    const subNodes = getSuccessorNodes(state, currentNodeId);
    return (Object.entries(state.workflow.operations) as [string, LogicAppsV2.ActionDefinition][])
      .filter(
        ([key]) =>
          getRecordEntry(state.workflow.nodesMetadata, currentNodeId)?.graphId ===
          getRecordEntry(state.workflow.nodesMetadata, key)?.graphId
      )
      .filter(([key]) => !subNodes.includes(key) && key !== currentNodeId)
      .map(([key, value]) => ({ ...value, id: key }));
  });
  const RUN_AFTER_CONFIGURATION_FILTER_ACTIONS = intl.formatMessage({
    defaultMessage: 'Filter actions',
    id: 'U2juKb',
    description: 'Filter Actions',
  });
  const RUN_AFTER_CONFIGURATION_SELECT_ACTIONS_TITLE = intl.formatMessage({
    defaultMessage: 'Select actions',
    id: '3a3eHg',
    description: 'Select Actions',
  });

  const selectedValues = useSelector((state: RootState) => {
    const actions = Object.keys((getRecordEntry(state.workflow.operations, currentNodeId) as LogicAppsV2.ActionDefinition)?.runAfter ?? {});

    // If running after the trigger, add the trigger id as dummy data
    if (actions.length === 0 && !isA2AWorkflow) {
      actions.push(rootTriggerId);
    }

    return { actions };
  });

  const dispatch = useDispatch<AppDispatch>();

  const searchResults = useMemo(() => {
    if (!searchText) {
      return [];
    }
    const options = {
      keys: ['id'],
      useExtendedSearch: true,
    };
    const fuse = new Fuse(actions, options);
    return fuse.search(searchText).map(({ item }) => item);
  }, [actions, searchText]);

  return (
    <Menu
      hasIcons
      hasCheckmarks
      checkedValues={selectedValues}
      onOpenChange={(_e, data) => {
        setSearchText('');
        LoggerService().log({
          area: `RunAfterActionSelector:onOpenChange:${data.open}`,
          level: LogEntryLevel.Verbose,
          message: `Run after action selector ${data.open ? 'opened' : 'closed'}.`,
        });
      }}
      onCheckedValueChange={(_e, data) => {
        if (data.checkedItems.length === 0) {
          return;
        }
        const newItems = data.checkedItems.filter((x) => !selectedValues.actions.includes(x));
        const removedItems = selectedValues.actions.filter((x) => !data.checkedItems.includes(x));
        removedItems.forEach((item) => {
          dispatch(
            removeOperationRunAfter({
              parentOperationId: item,
              childOperationId: currentNodeId,
            })
          );
        });
        newItems.forEach((item) => {
          dispatch(
            addOperationRunAfter({
              parentOperationId: item,
              childOperationId: currentNodeId,
            })
          );
        });
        LoggerService().log({
          area: 'RunAfterActionSelector:onCheckedValueChange',
          level: LogEntryLevel.Verbose,
          message: `Run after action selector set to ${data.checkedItems.length} items.`,
        });
      }}
    >
      <MenuTrigger>
        <MenuButton icon={<AddIcon />} appearance="subtle" style={{ padding: '8px', marginTop: '-8px' }}>
          {RUN_AFTER_CONFIGURATION_SELECT_ACTIONS_TITLE}
        </MenuButton>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          <Input
            className="msla-run-after-action-search-input"
            contentBefore={<Search24Regular />}
            contentAfter={
              <Button
                icon={<DismissRegular />}
                appearance="transparent"
                onClick={() => {
                  setSearchText('');
                }}
              />
            }
            autoFocus={true}
            placeholder={RUN_AFTER_CONFIGURATION_FILTER_ACTIONS}
            value={searchText}
            onChange={(_, data) => {
              setSearchText(data.value);
            }}
          />

          <div className="msla-action-selection-menu-list">
            {(searchResults.length > 0 ? searchResults : actions).map((obj) => {
              return <ActionMenuItem id={obj.id} key={obj.id} readOnly={readOnly} />;
            })}
          </div>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
