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
  handleNextStep: (event: any) => void;
  formFieldsState: Record<string, string | number | string[]>;
  handleFormData: (value: string | number | string[], name: string) => void;
  handleSubmit: (event: any) => Promise<void>;
  state: stateProps;
  isAR: boolean;
  isFormValid: boolean;
}

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
        const preContent =
          Array.isArray(data.subdata) &&
          (data.subdata.find(
            (nodeField) => nodeField.fieldName === field.name
          ) as {
            content: string;
            fieldName: string;
          });

        return (
          <FormInput
            key={`FormInput_${index}`}
            field={field}
            formFieldsState={formFieldsState}
            handleFormData={handleFormData}
            state={state}
            preContent={preContent}
            isAR={isAR}
          />
        );
      });
  };

  return (
    <ContactForm isAR={isAR}>
      {renderFormFields(
        isSingleStep
          ? formData.formFields
          : formData.subForms[state.currentStep].formFields
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          direction: isAR ? 'rtl' : 'ltr',
        }}
      >
        {!isSingleStep && state.currentStep > 0 && (
          <Button type="button" isAR={isAR} onClick={handlePrevStep}>
            {data.backButtonLabel}
          </Button>
        )}
        {!isSingleStep && state.currentStep < formData.subForms.length - 1 && (
          <Button
            type="submit"
            isAR={isAR}
            disabled={!isFormValid}
            onClick={handleNextStep}
          >
            {data.nextButtonLabel}
          </Button>
        )}
        {(isSingleStep ||
          state.currentStep === formData.subForms.length - 1) && (
          <Button
            type="submit"
            isAR={isAR}
            disabled={!isFormValid || state.isSuccess}
            onClick={handleSubmit}
          >
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
