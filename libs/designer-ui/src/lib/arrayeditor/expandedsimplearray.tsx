import type { ComboboxItem, SimpleArrayItem, TokenPickerButtonEditorProps, ValueSegment } from '..';
import { Combobox, StringEditor } from '..';
import type { BasePlugins, ChangeState, GetTokenPickerHandler, loadParameterValueFromStringHandler } from '../editor/base';
import { notEqual } from '../editor/base/utils/helper';
import { Label, RequiredMarkerSide } from '../label';
import type { LabelProps } from '../label';
import type { IContextualMenuProps, IIconProps, IIconStyles } from '@fluentui/react';
import { IconButton, TooltipHost, DefaultButton } from '@fluentui/react';
import { guid } from '@microsoft/logic-apps-shared';
import { useIntl } from 'react-intl';
import { getComoboxEnumOptions } from './util/util';

const addItemButtonIconProps: IIconProps = {
  iconName: 'Add',
};

const ContextMenuKeys = {
  DELETE: 'delete',
};

const menuButtonIconProps: IIconProps = {
  iconName: 'More',
};
const menuButtonStyles: IIconStyles = {
  root: {
    height: '20px',
  },
};
export interface ExpandedSimpleArrayProps {
  labelProps: LabelProps;
  items: SimpleArrayItem[];
  canDeleteLastItem: boolean;
  placeholder?: string;
  valueType?: string;
  itemEnum?: string[];
  readonly?: boolean;
  tokenPickerButtonProps?: TokenPickerButtonEditorProps;
  setItems: (newItems: SimpleArrayItem[]) => void;
  options?: ComboboxItem[];
  getTokenPicker?: GetTokenPickerHandler;
  tokenMapping?: Record<string, ValueSegment>;
  loadParameterValueFromString?: loadParameterValueFromStringHandler;
  isDynamic?: boolean;
  isRequired?: boolean;
  basePlugins?: BasePlugins;
}

export const ExpandedSimpleArray = ({
  labelProps,
  items,
  canDeleteLastItem,
  placeholder,
  valueType,
  itemEnum,
  setItems,
  readonly,
  options,
  isDynamic,
  isRequired,
  ...props
}: ExpandedSimpleArrayProps): JSX.Element => {
  const intl = useIntl();

  const addItemButtonLabel = intl.formatMessage({
    defaultMessage: 'Add new item',
    id: 'JWl/LD',
    description: 'Label to add item to array editor',
  });

  const deleteItem = (index: number): void => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleArrayElementSaved = (prevVal: ValueSegment[], newState: ChangeState, index: number) => {
    if (notEqual(prevVal, newState.value)) {
      const newItems = JSON.parse(JSON.stringify(items));
      newItems[index].value = newState.value;
      setItems(newItems);
    }
  };

  const comboboxOptions = getComoboxEnumOptions(options, itemEnum);

  return (
    <div className="msla-array-container msla-array-item-container">
      {items.map((item, index) => {
        return (
          <div key={item.key + index} className="msla-array-item">
            <div className="msla-array-item-header">
              {renderLabel(index, labelProps.text, isRequired)}
              <div className="msla-array-item-commands">
                <ItemMenuButton
                  disabled={!!readonly}
                  itemKey={index}
                  visible={canDeleteLastItem || items.length > 1}
                  onDeleteItem={(index) => deleteItem(index)}
                />
              </div>
            </div>
            {isDynamic || (comboboxOptions ?? [])?.length > 0 ? (
              <Combobox
                {...props}
                valueType={valueType}
                options={comboboxOptions ?? []}
                initialValue={item.value ?? []}
                placeholder={placeholder}
                onChange={(newState) => handleArrayElementSaved(item.value ?? [], newState, index)}
              />
            ) : (
              <StringEditor
                {...props}
                className="msla-array-editor-container-expanded"
                valueType={valueType}
                initialValue={item.value ?? []}
                editorBlur={(newState) => handleArrayElementSaved(item.value ?? [], newState, index)}
                placeholder={placeholder}
              />
            )}
          </div>
        );
      })}
      <div className="msla-array-toolbar">
        <DefaultButton
          disabled={readonly}
          className="msla-array-add-item-button"
          iconProps={addItemButtonIconProps}
          text={addItemButtonLabel}
          onClick={() => setItems([...items, { value: [], key: guid() }])}
        />
      </div>
    </div>
  );
};

const renderLabel = (index: number, labelName?: string, isRequired?: boolean): JSX.Element => {
  return (
    <div className="msla-array-editor-label">
      <Label text={`${labelName} - ${index + 1}`} isRequiredField={isRequired ?? false} requiredMarkerSide={RequiredMarkerSide.LEFT} />
    </div>
  );
};

interface ItemMenuButtonProps {
  disabled: boolean;
  itemKey: number;
  visible: boolean;
  onDeleteItem(itemKey: number): void;
}

export const ItemMenuButton = ({ disabled, itemKey, visible, onDeleteItem }: ItemMenuButtonProps): JSX.Element | null => {
  const intl = useIntl();
  if (!visible) {
    return null;
  }
  const deleteButton = intl.formatMessage({
    defaultMessage: 'Delete',
    id: 'JErLDT',
    description: 'Delete label',
  });

  const menuButton = intl.formatMessage({
    defaultMessage: 'Menu',
    id: 'z3VuE+',
    description: 'Menu label',
  });

  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: ContextMenuKeys.DELETE,
        name: deleteButton,
        icon: 'Delete',
      },
    ],
    onItemClick(_, menuItem) {
      if (menuItem && menuItem.key === ContextMenuKeys.DELETE) {
        onDeleteItem(itemKey);
      }
    },
  };

  return (
    <TooltipHost content={menuButton}>
      <IconButton
        ariaLabel={menuButton}
        className="msla-array-item-contextbutton"
        disabled={disabled}
        iconProps={menuButtonIconProps}
        styles={menuButtonStyles}
        menuProps={menuProps}
      />
    </TooltipHost>
  );
};
