import React from 'react';
import FormInput from './FormInput';
import { Text } from '../../../../../../lib/atoms';
import { Button, ContactForm, Loader } from './style';

interface stateProps {
  submitted?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  currentStep?: number;
}
interface DynamicFormProps {
  formData: any;
  data: Record<string, string>;
  handlePrevStep: () => void;
  failureMessage: string;
  handleNextStep: () => void;
  formFieldsState: Record<string, string | number | string[]>;
  handleFormData: (value: string | number | string[], name: string) => void;
  handleSubmit: (event: any) => Promise<void>;
  state: stateProps;
  isAR: boolean;
  isFormValid: boolean;
};

const DynamicForm = ({
  formData,
  data,
  handlePrevStep,
  failureMessage,
  handleNextStep,
  formFieldsState,
  handleFormData,
  handleSubmit,
  state,
  isAR,
  isFormValid,
}: DynamicFormProps) => {
  const isSingleStep = formData.type === 'Single Form';
  const renderFormFields = (fields) => {
    if (!fields) {
      console.log(`Form fields are undefined`);
      return null;
    }
    return fields
      .filter((field) => !field.invisible)
      .sort((f1, f2) => f1.priority - f2.priority)
      .map((field, index) => {
        const node = Array.isArray(data.subdata) && data.subdata.find(nodeField => nodeField.fieldName === field.name);
        return node ? (
          <FormInput
            key={`FormInput_${index}`}
            field={field}
            formFieldsState={formFieldsState}
            handleFormData={handleFormData}
            state={state}
            node={node}
            isAR={isAR}
          />
        ) : (
          <FormInput
            key={`FormInput_${index}`}
            field={field}
            formFieldsState={formFieldsState}
            handleFormData={handleFormData}
            state={state}
            isAR={isAR}
          />
        );
      });
  };

  return (
    <ContactForm onSubmit={(e) => handleSubmit(e)} isAR={isAR}>
      {renderFormFields(
        isSingleStep
          ? formData.formFields
          : formData.subForms[state.currentStep].formFields
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {!isSingleStep && state.currentStep > 0 && (
          <Button type="button" isAR={isAR} onClick={handlePrevStep}>
            {data.backButtonLabel}
          </Button>
        )}
        {!isSingleStep && state.currentStep < formData.subForms.length - 1 && (
          <Button type="submit" isAR={isAR} disabled={!isFormValid} onClick={handleNextStep}>
            {data.nextButtonLabel}
          </Button>
        )}
        {(isSingleStep || state.currentStep === formData.subForms.length - 1) && (
          <Button type="submit" isAR={isAR} disabled={!isFormValid || state.isSuccess}>
            {state.isLoading ? <Loader /> : data.submitButtonLabel}
          </Button>
        )}
      </div>
      {state.submitted && failureMessage && (
        <Text className="failure" content={failureMessage} />
      )}
      {state.submitted && !failureMessage && (
        <Text className="success" content={data.successMessage} />
      )}
    </ContactForm>
  );
};

export default DynamicForm;

