import { ArrayEditor } from '../../arrayeditor';
import { AuthenticationEditor } from '../../authentication';
import { CodeEditor } from '../../code';
import { Combobox } from '../../combobox';
import { CopyInputControl } from '../../copyinputcontrol';
import { DictionaryEditor } from '../../dictionary';
import { DropdownEditor } from '../../dropdown';
import type { ValueSegment } from '../../editor';
import type { CallbackHandler, CastHandler, ChangeHandler, GetTokenPickerHandler } from '../../editor/base';
import { EditorLanguage } from '../../editor/monaco';
import { StringEditor } from '../../editor/string';
import { FloatingActionMenu } from '../../floatingactionmenu';
import { HTMLEditor } from '../../html';
import type { PickerCallbackHandlers } from '../../picker/filepickereditor';
import { FilePickerEditor } from '../../picker/filepickereditor';
import { QueryBuilderEditor } from '../../querybuilder';
import { HybridQueryBuilderEditor } from '../../querybuilder/HybridQueryBuilder';
import { SimpleQueryBuilder } from '../../querybuilder/SimpleQueryBuilder';
import { ScheduleEditor } from '../../recurrence';
import { SchemaEditor } from '../../schemaeditor';
import { TableEditor } from '../../table';
import type { TokenGroup } from '../../tokenpicker/models/token';
import { useId } from '../../useId';
import type { SettingProps } from './settingtoggle';
import { Label } from '@fluentui/react';

export interface SettingTokenFieldProps extends SettingProps {
  id?: string;
  value: ValueSegment[];
  isLoading?: boolean;
  errorDetails?: { message: string };
  editor?: string;
  editorOptions?: any;
  editorViewModel?: any;
  defaultValue?: string;
  placeholder?: string;
  label: string;
  readOnly?: boolean;
  tokenEditor: true;
  required?: boolean;
  showTokens?: boolean;
  tokenGroup?: TokenGroup[];
  expressionGroup?: TokenGroup[];
  onValueChange?: ChangeHandler;
  onComboboxMenuOpen?: CallbackHandler;
  onCastParameter: CastHandler;
  pickerCallbacks?: PickerCallbackHandlers;
  getTokenPicker: GetTokenPickerHandler;
  validationErrors?: string[];
  hideValidationErrors?: ChangeHandler;
}

export const SettingTokenField = ({ ...props }: SettingTokenFieldProps) => {
  const labelId = useId('msla-editor-label');
  const renderLabel = props.editor?.toLowerCase() !== 'floatingactionmenu';
  return (
    <>
      {renderLabel && (
        <div className="msla-input-parameter-label">
          <Label id={labelId} className="msla-label" required={props.required}>
            {props.label}
          </Label>
        </div>
      )}
      <TokenField {...props} labelId={labelId} />
    </>
  );
};

const TokenField = ({
  editor,
  editorOptions,
  editorViewModel,
  placeholder,
  readOnly,
  value,
  isLoading,
  errorDetails,
  showTokens,
  label,
  labelId,
  pickerCallbacks,
  onValueChange,
  onComboboxMenuOpen,
  hideValidationErrors,
  onCastParameter,
  getTokenPicker,
}: SettingTokenFieldProps & { labelId: string }) => {
  const dropdownOptions = editorOptions?.options?.value ?? editorOptions?.options ?? [];

  switch (editor?.toLowerCase()) {
    case 'copyable':
      return <CopyInputControl placeholder={placeholder} text={value[0].value} />;

    case 'dropdown':
      return (
        <DropdownEditor
          label={label}
          readonly={readOnly}
          initialValue={value}
          options={dropdownOptions.map((option: any, index: number) => ({ key: index.toString(), ...option }))}
          multiSelect={!!editorOptions?.multiSelect}
          serialization={editorOptions?.serialization}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-dropdowneditor-${label}`}
        />
      );

    case 'code':
      return (
        <CodeEditor
          labelId={labelId}
          initialValue={value}
          getTokenPicker={getTokenPicker}
          language={EditorLanguage.javascript}
          onChange={onValueChange}
          readonly={readOnly}
          placeholder={placeholder}
          data-automation-id={`msla-setting-token-editor-codeeditor-${label}`}
        />
      );

    case 'combobox':
      return (
        <Combobox
          labelId={labelId}
          label={label}
          placeholder={placeholder}
          readonly={readOnly}
          initialValue={value}
          options={dropdownOptions.map((option: any, index: number) => ({ key: index.toString(), ...option }))}
          useOption={true}
          isLoading={isLoading}
          errorDetails={errorDetails}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
          onMenuOpen={onComboboxMenuOpen}
          data-automation-id={`msla-setting-token-editor-combobox-${label}`}
        />
      );

    case 'schema':
      return (
        <SchemaEditor
          label={label}
          readonly={readOnly}
          initialValue={value}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-schemaeditor-${label}`}
        />
      );

    case 'dictionary':
      return (
        <DictionaryEditor
          labelId={labelId}
          placeholder={placeholder}
          readonly={readOnly}
          initialValue={value}
          initialItems={editorViewModel.items}
          valueType={editorOptions?.valueType}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-dictionaryeditor-${label}`}
        />
      );

    case 'table':
      return (
        <TableEditor
          labelId={labelId}
          readonly={readOnly}
          initialValue={value}
          initialItems={editorViewModel.items}
          columnMode={editorViewModel.columnMode}
          columns={editorOptions?.columns?.count}
          titles={editorOptions?.columns?.titles}
          keys={editorOptions?.columns?.keys}
          types={editorOptions?.columns?.types}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-tableditor-${label}`}
        />
      );

    case 'array':
      return (
        <ArrayEditor
          labelId={labelId}
          arrayType={editorViewModel.arrayType}
          labelProps={{ text: label ? `${label} Item` : 'Array Item' }}
          placeholder={placeholder}
          readonly={readOnly}
          initialValue={editorViewModel.uncastedValue}
          getTokenPicker={getTokenPicker}
          itemSchema={editorViewModel.itemSchema}
          castParameter={onCastParameter}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-arrayeditor-${label}`}
        />
      );

    case 'authentication':
      return (
        <AuthenticationEditor
          labelId={labelId}
          initialValue={value}
          options={editorOptions}
          type={editorViewModel.type}
          authenticationValue={editorViewModel.authenticationValue}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
          BasePlugins={{ tokens: showTokens }}
          data-automation-id={`msla-setting-token-editor-authenticationeditor-${label}`}
        />
      );

    case 'condition':
      return editorViewModel.isOldFormat ? (
        <SimpleQueryBuilder
          readonly={readOnly}
          itemValue={editorViewModel.itemValue ?? value}
          isRowFormat={editorViewModel.isRowFormat}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-simplequerybuildereditor-${label}`}
        />
      ) : editorViewModel.isHybridEditor ? (
        <HybridQueryBuilderEditor
          readonly={readOnly}
          groupProps={JSON.parse(JSON.stringify(editorViewModel.items))}
          onChange={onValueChange}
          getTokenPicker={getTokenPicker}
          data-automation-id={`msla-setting-token-editor-hybridquerybuildereditor-${label}`}
        />
      ) : (
        <QueryBuilderEditor
          readonly={readOnly}
          groupProps={JSON.parse(JSON.stringify(editorViewModel.items))}
          onChange={onValueChange}
          getTokenPicker={getTokenPicker}
          data-automation-id={`msla-setting-token-editor-querybuildereditor-${label}`}
        />
      );

    case 'recurrence':
      return (
        <ScheduleEditor
          readOnly={readOnly}
          type={editorOptions?.recurrenceType}
          showPreview={editorOptions?.showPreview}
          initialValue={value}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-scheduleeditor-${label}`}
        />
      );

    case 'filepicker':
      return (
        <FilePickerEditor
          className="msla-setting-token-editor-container"
          placeholder={placeholder}
          BasePlugins={{ tokens: showTokens, clearEditor: true }}
          readonly={readOnly}
          initialValue={value}
          displayValue={editorViewModel.displayValue}
          type={editorOptions.pickerType}
          items={editorOptions.items}
          fileFilters={editorOptions.fileFilters}
          pickerCallbacks={pickerCallbacks as PickerCallbackHandlers}
          isLoading={isLoading}
          errorDetails={errorDetails}
          editorBlur={onValueChange}
          getTokenPicker={getTokenPicker}
          onChange={hideValidationErrors}
          data-automation-id={`msla-setting-token-editor-filepickereditor-${label}`}
        />
      );
    case 'html':
      return (
        <HTMLEditor
          initialValue={value}
          placeholder={placeholder}
          BasePlugins={{ tokens: showTokens }}
          readonly={readOnly}
          getTokenPicker={getTokenPicker}
          onChange={onValueChange}
        />
      );
    case 'floatingactionmenu': {
      return (
        <FloatingActionMenu
          supportedTypes={editorOptions?.supportedTypes}
          useStaticInputs={editorOptions?.useStaticInputs}
          initialValue={value}
          onChange={onValueChange}
          data-automation-id={`msla-setting-token-editor-floatingactionmenu-${label}`}
        />
      );
    }

    default:
      return (
        <StringEditor
          labelId={labelId}
          className="msla-setting-token-editor-container"
          placeholder={placeholder}
          BasePlugins={{ tokens: showTokens }}
          readonly={readOnly}
          initialValue={value}
          editorBlur={onValueChange}
          getTokenPicker={getTokenPicker}
          onChange={hideValidationErrors}
          data-automation-id={`msla-setting-token-editor-stringeditor-${label}`}
        />
      );
  }
};
