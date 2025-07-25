import type { DictionaryEditorItemProps, DictionaryEditorProps } from '../dictionary';
import { DictionaryEditor, DictionaryType } from '../dictionary';
import type { ChangeState } from '../editor/base';
import { createEmptyLiteralValueSegment } from '../editor/base/utils/helper';
import type { IDropdownOption, IDropdownStyles } from '@fluentui/react';
import { Dropdown } from '@fluentui/react';
import { getIntl } from '@microsoft/logic-apps-shared';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { useTableStyles } from './styles';

export interface TableEditorProps extends DictionaryEditorProps {
  columnMode: ColumnMode;
  labelId: string;
  columns?: number;
  titles?: string[];
  keys?: string[];
  types?: string[];
}

const dropdownStyles: Partial<IDropdownStyles> = {
  root: {
    minHeight: '30px',
    fontSize: '14px',
  },
  dropdown: {
    minHeight: '30px',
  },
  title: {
    height: '30px',
    fontSize: '14px',
    lineHeight: '30px',
  },
  caretDownWrapper: {
    paddingTop: '4px',
  },
};

export const ColumnMode = {
  Automatic: 'Automatic',
  Custom: 'Custom',
} as const;
export type ColumnMode = (typeof ColumnMode)[keyof typeof ColumnMode];

export const TableEditor: React.FC<TableEditorProps> = ({
  className,
  initialItems,
  initialValue,
  columnMode,
  titles,
  types,
  readonly,
  labelId,
  placeholder,
  tokenPickerButtonProps,
  dataAutomationId,
  onChange,
  getTokenPicker,
  tokenMapping,
  loadParameterValueFromString,
  basePlugins,
}): JSX.Element => {
  const intl = getIntl();
  const classes = useTableStyles();
  const columnOptions = [
    {
      key: ColumnMode.Automatic,
      text: intl.formatMessage({
        defaultMessage: 'Automatic',
        id: 'Az0QvG',
        description: 'Option text for table column type in table editor',
      }),
    },
    {
      key: ColumnMode.Custom,
      text: intl.formatMessage({
        defaultMessage: 'Custom',
        id: 'Tiqnir',
        description: 'Option text for table column type in table editor',
      }),
    },
  ];
  const [selectedKey, setSelectedKey] = useState<ColumnMode>(columnMode);
  const [items] = useState<DictionaryEditorItemProps[]>(initialItems ?? []);
  const onOptionChange = (_event: FormEvent<HTMLDivElement>, option?: IDropdownOption): void => {
    if (option) {
      setSelectedKey(option.key as ColumnMode);
      onChange?.({ value: [createEmptyLiteralValueSegment()], viewModel: { items, columnMode: option.key } });
    }
  };

  const onItemsChange = (newState: ChangeState) =>
    onChange?.({
      value: newState.value,
      viewModel: { items: newState.viewModel.items, columnMode: ColumnMode.Custom },
    });
  return (
    <div className={className}>
      <Dropdown styles={dropdownStyles} disabled={readonly} options={columnOptions} selectedKey={selectedKey} onChange={onOptionChange} />
      {selectedKey === ColumnMode.Custom ? (
        <div className={classes.editorContainer} data-automation-id={dataAutomationId}>
          <DictionaryEditor
            labelId={labelId}
            keyTitle={titles?.[0]}
            valueTitle={titles?.[1]}
            keyType={types?.[0]}
            valueType={types?.[1]}
            dictionaryType={DictionaryType.TABLE}
            placeholder={placeholder}
            readonly={readonly}
            initialValue={initialValue}
            initialItems={items}
            tokenPickerButtonProps={tokenPickerButtonProps}
            getTokenPicker={getTokenPicker}
            tokenMapping={tokenMapping}
            loadParameterValueFromString={loadParameterValueFromString}
            onChange={onItemsChange}
            basePlugins={basePlugins}
          />
        </div>
      ) : null}
    </div>
  );
};
