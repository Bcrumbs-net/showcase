import React from 'react';
import { RequiredFields } from './style';
import { Input, Select, Radio, CheckBox } from '../../../../../../lib/atoms';

interface FormFieldType {
  id: string;
  name: string;
  title: string;
  type:
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
    isSuccess: boolean;
    isFormValid: boolean;
    submitted: boolean;
  };
  isAR: boolean;
}

const renderField = (field, formFieldsState, handleFormData, isSuccess, isAR) => {
  const commonProps = {
    value: formFieldsState[field.name],
    onChange: (value) => handleFormData(value, field.name),
    disabled: isSuccess,
  };
  switch (field.type) {
    case 'String':
      return (
        <div key={field.id}>
          <Input inputType="text" {...commonProps} />
        </div>
      );
    case 'Date':
      return (
        <div key={field.id}>
          <Input
            inputType="date" {...commonProps} />
        </div>
      );
    case 'Number':
      return (
        <div key={field.id}>
          <Input inputType="number" {...commonProps} />
        </div>
      );
    case 'Password':
      return (
        <div key={field.id}>
          <Input
            inputType="password"
            {...commonProps}
            passwordShowHide={false}
          />
        </div>
      );
    case 'String - Multiple Lines':
      return (
        <div key={field.id}>
          <Input inputType="textarea" {...commonProps} />
        </div>
      );
    case 'Predefined List':
      return (
        <div key={field.id}>
          <Select
            className='select_wrapper'
            value={{
              label: formFieldsState[field.name],
              value: formFieldsState[field.name],
            }}
            onChange={(selectedOption) =>
              handleFormData(selectedOption.value, field.name)
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
      );
    case 'Predefined List - Checkboxes':
      return (
        <div key={field.id}>
          {field.choices.map((choice) => (
            <CheckBox
              className='checkbox_group'
              key={choice}
              id={choice}
              htmlFor={choice}
              value={choice}
              labelText={choice}
              labelPosition={isAR ? 'left' : 'right'}
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
      );
    case 'Predefined List - Radio Buttons':
      return (
        <div key={field.id}>
          {field.choices.map((choice) => (
            <Radio
              className='radio_group'
              key={choice}
              id={choice}
              labelText={choice}
              value={choice}
              labelPosition={isAR ? 'left' : 'right'}
              isChecked={formFieldsState[field.name] === choice}
              onChange={() => handleFormData(choice, field.name)}
              disabled={isSuccess}
            />
          ))}
        </div>
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
  isAR
}) => {
  if (field.required) {
    return (
      <RequiredFields key={field.id} isAR={isAR}>
        <div>
          <label className="required-label">{field.title}</label>
          {renderField(field, formFieldsState, handleFormData, state.isSuccess, isAR)}
        </div>
      </RequiredFields>
    );
  }

  return (
    <div key={field.id}>
      <label className="label">{field.title}</label>
      {renderField(field, formFieldsState, handleFormData, state.isSuccess, isAR)}
    </div>
  );
};

export default FormInput;
