import constants from '../constants';
import { StaticResult } from './StaticResult';
import { deserializePropertyValues, parseStaticResultSchema, serializePropertyValues } from './util';
import type { IButtonStyles } from '@fluentui/react';
import { css, DefaultButton, PrimaryButton, Toggle } from '@fluentui/react';
import type { OpenApiSchema, OpenAPIV2 } from '@microsoft/logic-apps-shared';
import { useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

const actionButtonStyles: IButtonStyles = {
  root: {
    width: '100px',
    minWidth: '60px',
    margin: '0px 20px',
    fontSize: '16px',
  },
};

export const StaticResultOption = {
  ENABLED: 'Enabled',
  DISABLED: 'Disabled',
} as const;
export type StaticResultOption = (typeof StaticResultOption)[keyof typeof StaticResultOption];

export type StaticResultChangeHandler = (newState: OpenAPIV2.SchemaObject | null, staticResultOption: StaticResultOption) => void;

export interface StaticResultContainerProps {
  enabled?: boolean;
  staticResultSchema: OpenAPIV2.SchemaObject;
  properties: OpenAPIV2.SchemaObject;
  savePropertiesCallback: StaticResultChangeHandler;
  cancelPropertiesCallback?: () => void;
}

export type StaticResultRootSchemaType = OpenAPIV2.SchemaObject & {
  properties: {
    status: OpenApiSchema;
    code: OpenApiSchema;
    error: OpenApiSchema;
    outputs?: OpenApiSchema;
  };
};

export const StaticResultContainer = ({
  enabled = false,
  staticResultSchema,
  properties,
  cancelPropertiesCallback,
  savePropertiesCallback,
}: StaticResultContainerProps): JSX.Element => {
  const intl = useIntl();
  const initialPropertyValues = useMemo(() => deserializePropertyValues(properties, staticResultSchema), [properties, staticResultSchema]);

  const [showStaticResults, setShowStaticResults] = useState<boolean>(enabled);
  const [propertyValues, setPropertyValues] = useState<OpenAPIV2.SchemaObject>(initialPropertyValues);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync local state with enabled prop
  useEffect(() => {
    setShowStaticResults(enabled);
  }, [enabled]);

  // static result validation that trigger whenever the properties change
  useEffect(() => {
    const serializedValue = serializePropertyValues(propertyValues, staticResultSchema);
    if (serializedValue['status'] === constants.STATUS.SUCCEEDED && !serializedValue['outputs']) {
      setErrorMessage(
        intl.formatMessage({
          defaultMessage: 'Outputs are required when status is "Succeeded"',
          id: '6yFUar',
          description: 'Error message for when status is succeded and outputs are not provided',
        })
      );
    } else if (serializedValue['status'] === constants.STATUS.SUCCEEDED && serializedValue['error']) {
      setErrorMessage(
        intl.formatMessage({
          defaultMessage: 'Error should not be provided when status is "Succeeded"',
          id: 'svaqnp',
          description: 'Error message for when status is succeded and error is provided',
        })
      );
    } else if (serializedValue['status'] === constants.STATUS.FAILED && !(serializedValue['error'] && serializedValue['error']['code'])) {
      setErrorMessage(
        intl.formatMessage({
          defaultMessage: 'The error and its code are required when status is "Failed"',
          id: 'l8lP1X',
          description: 'Error message for when status is failed and error and error code are not provided',
        })
      );
    } else if (serializedValue['status'] === constants.STATUS.FAILED && serializedValue['outputs']) {
      setErrorMessage(
        intl.formatMessage({
          defaultMessage: 'Outputs should not be provided when status is "Failed"',
          id: 'SbCUKw',
          description: 'Error message for when status is failed and outputs are provided',
        })
      );
    } else {
      setErrorMessage('');
    }
  }, [intl, properties, propertyValues, staticResultSchema]);

  const toggleLabelOn = intl.formatMessage({
    defaultMessage: 'Disable static result',
    id: '7fZkLA',
    description: 'Label for toggle to disable static result',
  });

  const toggleLabelOff = intl.formatMessage({
    defaultMessage: 'Enable static result',
    id: 'chEskq',
    description: 'Label for toggle to enable static result',
  });

  const testingTitle = intl.formatMessage({
    defaultMessage: 'Testing',
    id: '++ZVe/',
    description: 'Title for testing section',
  });

  const saveButtonLabel = intl.formatMessage({
    defaultMessage: 'Save',
    id: 'uIurld',
    description: 'Label for save button',
  });

  const cancelButtonLabel = intl.formatMessage({
    defaultMessage: 'Cancel',
    id: 'KZOa5l',
    description: 'Label for cancel button',
  });

  const removeStaticResultLabel = intl.formatMessage({
    defaultMessage: 'Delete',
    id: 'F/13eU',
    description: 'Label for button to delete static result',
  });

  const removeStaticResultDescription = intl.formatMessage({
    defaultMessage: 'Delete the static result configuration',
    id: 'Wvnl/V',
    description: 'Label for button to delete static result',
  });

  const saveStaticResults = () => {
    savePropertiesCallback(
      serializePropertyValues(propertyValues, staticResultSchema),
      showStaticResults ? StaticResultOption.ENABLED : StaticResultOption.DISABLED
    );
  };

  const cancelStaticResults = () => {
    setPropertyValues(initialPropertyValues);
    cancelPropertiesCallback?.();
  };

  const getLabel = () => {
    return showStaticResults ? toggleLabelOn : toggleLabelOff;
  };

  const isLabelDisabled = (): boolean => {
    return (
      // disable label if no change
      // disable if there is an error
      (JSON.stringify(propertyValues) === JSON.stringify(initialPropertyValues) && showStaticResults === enabled) ||
      (!!errorMessage && showStaticResults)
    );
  };

  const {
    properties: propertiesSchema,
    additionalProperties: additionalPropertiesSchema,
    required,
  } = useMemo(() => {
    return parseStaticResultSchema(staticResultSchema);
  }, [staticResultSchema]);

  return (
    <div className="msla-panel-testing-container">
      <Toggle
        checked={showStaticResults}
        label={getLabel()}
        onChange={() => {
          setShowStaticResults(!showStaticResults);
        }}
      />
      {showStaticResults ? (
        <StaticResult
          isRoot={true}
          title={testingTitle}
          required={required}
          propertiesSchema={propertiesSchema}
          additionalPropertiesSchema={additionalPropertiesSchema}
          propertyValues={propertyValues}
          setPropertyValues={setPropertyValues}
        />
      ) : null}

      <div className="msla-static-results-validation">{errorMessage && showStaticResults ? errorMessage : null}</div>
      <div className="msla-static-result-actions">
        <PrimaryButton
          className={'msla-static-result-action-button'}
          text={saveButtonLabel}
          onClick={saveStaticResults}
          styles={actionButtonStyles}
          disabled={isLabelDisabled()}
        />
        <DefaultButton
          className={'msla-static-result-action-button'}
          text={cancelButtonLabel}
          onClick={cancelStaticResults}
          styles={actionButtonStyles}
        />
        {Object.keys(initialPropertyValues).length === 0 ? null : (
          <DefaultButton
            title={removeStaticResultDescription}
            className={css('msla-static-result-action-button', 'delete')}
            text={removeStaticResultLabel}
            styles={actionButtonStyles}
            onClick={() => {
              savePropertiesCallback(null, StaticResultOption.DISABLED);
            }}
          />
        )}
      </div>
    </div>
  );
};
