import React from 'react';
import FormInput from './FormInput';
import { Text } from '../../../../../../lib/atoms';
import { ContactForm, SubmitButton, Loader } from './style';

const DynamicForm = ({ formData, data, handlePrevStep, failureMessage, handleNextStep, formFieldsState, handleFormData, handleSubmit, state, isAR }) => {
    const isSingleStep = !formData.subForms || formData.subForms.length === 0;

    const renderFormFields = (fields) => {
        if (!fields) {
            console.log(`Form fields are undefined`);
            return null;
        }
        return fields
            .filter((field) => !field.invisible)
            .sort((f1, f2) => (f1.priority > f2.priority ? 1 : -1))
            .map((field, index) => (
                <FormInput
                    key={`FormInput_${index}`}
                    field={field}
                    formFieldsState={formFieldsState}
                    handleFormData={handleFormData}
                    state={state}
                    isAR={isAR}
                />
            ));
    };

    return (
        <ContactForm onSubmit={(e) => handleSubmit(e)} isAR={isAR}>
            {state.submitted ? (
                <>
                    {failureMessage ? (
                        <>
                            {renderFormFields(isSingleStep ? formData.formFields : formData.subForms[state.currentStep].formFields)}
                            <Text className="failure" content={failureMessage} />
                        </>
                    ) : (
                        <>
                            {renderFormFields(isSingleStep ? formData.formFields : formData.subForms[state.currentStep].formFields)}
                            <Text className="success" content={data.successMessage} />
                        </>
                    )}
                </>
            ) : (
                renderFormFields(isSingleStep ? formData.formFields : formData.subForms[state.currentStep].formFields)
            )}

            {!isSingleStep && state.currentStep > 0 && (
                <button onClick={handlePrevStep}>{data.backButtonLabel}</button>
            )}
            {!isSingleStep && state.currentStep < formData.subForms.length - 1 && (
                <SubmitButton type="button" onClick={handleNextStep}>
                    {data.nextButtonLabel}
                </SubmitButton>
            )}
            {(isSingleStep || state.currentStep === formData.subForms.length - 1) && (
                <SubmitButton
                    type="submit"
                    disabled={!state.isFormValid || state.isSuccess}
                >
                    {state.isLoading ? <Loader /> : data.submitButtonLabel}
                </SubmitButton>
            )}
        </ContactForm>
    );
};

export default DynamicForm;
