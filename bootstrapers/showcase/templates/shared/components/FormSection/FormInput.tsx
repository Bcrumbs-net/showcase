import React from 'react';
import { RequiredFields } from './style';
import { Input, Select, Radio, CheckBox } from '../../../../../../lib/atoms';
import HtmlContent from '../../../../../../lib/atoms/components/html_content';
import PhoneNumber from '../../../../../../lib/atoms/components/phone-number-input';
import { getCountryDataList } from 'countries-list';

interface FormFieldType {
  id: string;
  name: string;
  title: string;
  type:
  | 'Phone Number'
  | 'String'
  | 'Date'
  | 'Number'
  | 'Password'
  | 'String - Multiple Lines'
  | 'Predefined List'
  | 'Predefined List - Checkboxes'
  | 'Predefined List - Radio Buttons';
  invisible?: boolean;
  required?: boolean;
  choices?: string[];
}

interface FormInputProps {
  field: FormFieldType;
  formFieldsState: Record<string, string | number | string[]>;
  handleFormData: (value: string | number | string[], name: string) => void;
  state: {
    isSuccess?: boolean;
    submitted?: boolean;
  };
  isAR: boolean;
  preContent?: {
    content: string;
    fieldName: string;
  };
}

const renderField = (
  field,
  formFieldsState,
  handleFormData,
  isSuccess,
  preContent,
  isAR
) => {
  const commonProps = {
    value: formFieldsState[field.name],
    onChange: (value) => handleFormData(value, field.name),
    disabled: isSuccess,
  };

  const nodeContent =
    preContent && preContent.content ? (
      <HtmlContent htmlContent={preContent?.content} height={`${preContent?.height}px`} />
    ) : null;

  const countriesData = getCountryDataList();
  const countryOptions = [
    { label: `Select ${field.name}`, value: '', isDisabled: true },
    ...countriesData.map((country) => ({
      label: country.name,
      value: country.iso2,
    })),
  ];

  switch (field.type) {
    case 'String':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Input inputType="text" {...commonProps} />
          </div>
        </>
      );
    case 'Phone Number':
      return (
        <>
          {nodeContent}
          <div key={field.id} style={{ direction: 'ltr' }}>
            <PhoneNumber
              {...commonProps}
            />
          </div>
        </>
      );
    case 'Date':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Input inputType="date" {...commonProps} />
          </div>
        </>
      );
    case 'Number':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Input inputType="number" {...commonProps} />
          </div>
        </>
      );
    case 'Password':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Input
              inputType="password"
              {...commonProps}
              passwordShowHide={false}
            />
          </div>
        </>
      );
    case 'String - Multiple Lines':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Input inputType="textarea" {...commonProps} />
          </div>
        </>
      );
    case 'Predefined List':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Select
              className="select_wrapper"
              value={{
                label: formFieldsState[field.name],
                value: formFieldsState[field.name],
              }}
              onChange={(selectedOption) =>
                handleFormData(selectedOption?.value, field.name)
              }
              options={[
                { label: `Select ${field.name}`, value: '', isDisabled: true },
                ...field.choices.map((choice) => ({
                  label: choice,
                  value: choice,
                })),
              ]}
              isDisabled={isSuccess}
            />
          </div>
        </>
      );
    case 'Predefined List - Checkboxes':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            {field.choices.map((choice) => (
              <CheckBox
                className="checkbox_group"
                key={choice}
                id={choice}
                htmlFor={choice}
                value={choice}
                labelText={choice}
                isChecked={formFieldsState[field.name]?.includes(choice)}
                onChange={(isChecked) => {
                  handleFormData(
                    isChecked
                      ? [...formFieldsState[field.name], choice]
                      : formFieldsState[field.name].filter(
                        (item) => item !== choice
                      ),
                    field.name
                  );
                }}
                disabled={isSuccess}
              />
            ))}
          </div>
        </>
      );
    case 'Predefined List - Radio Buttons':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            {field.choices.map((choice) => (
              <Radio
                className="radio_group"
                key={choice}
                id={choice}
                labelText={choice}
                value={choice}
                isChecked={formFieldsState[field.name] === choice}
                onChange={() => handleFormData(choice, field.name)}
                disabled={isSuccess}
              />
            ))}
          </div>
        </>
      );
    case 'Boolean':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <CheckBox
              className="checkbox_group"
              isChecked={formFieldsState[field.name]}
              onChange={(isChecked) => handleFormData(isChecked, field.name)}
              id={field.id}
              labelText={field.name}
              disabled={isSuccess}
            />
          </div>
        </>
      );
    case 'Country':
      return (
        <>
          {nodeContent}
          <div key={field.id}>
            <Select
              className="select_wrapper"
              value={{
                label: formFieldsState[field.name],
                value: formFieldsState[field.name],
              }}
              onChange={(selectedOption) =>
                handleFormData(selectedOption?.label, field.name)
              }
              options={countryOptions}
              isDisabled={isSuccess}
            />
          </div>
        </>
      );
    default:
      return null;
  }
};

const FormInput: React.FC<FormInputProps> = ({
  field,
  formFieldsState,
  handleFormData,
  state,
  preContent,
  isAR,
}) => {
  if (field.required) {
    return (
      <RequiredFields key={field.id} isAR={isAR}>
        <div>
          <label className="required-label">{field.title}</label>
          {renderField(
            field,
            formFieldsState,
            handleFormData,
            state.isSuccess,
            preContent,
            isAR
          )}
        </div>
      </RequiredFields>
    );
  }

  return (
    <div key={field.id}>
      <label className="label">{field.title}</label>
      {renderField(
        field,
        formFieldsState,
        handleFormData,
        state.isSuccess,
        preContent,
        isAR
      )}
    </div>
  );
};

export default FormInput;
