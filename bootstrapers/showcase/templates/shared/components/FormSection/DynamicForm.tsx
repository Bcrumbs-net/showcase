import React from 'react';
import FormInput from './FormInput';
import { Text } from '../../../../../../lib/atoms';
import { Button, ContactForm, Loader } from './style';

const DynamicForm = ({ formData, data, handlePrevStep, failureMessage, handleNextStep, formFieldsState, handleFormData, handleSubmit, state, isAR }) => {
    const isSingleStep = formData.type === "Single Form";
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
            {renderFormFields(isSingleStep ? formData.formFields : formData.subForms[state.currentStep].formFields)}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {!isSingleStep && state.currentStep > 0 && (
                    <Button type="button" onClick={handlePrevStep}>
                        {data.backButtonLabel}
                    </Button>
                )}
                {!isSingleStep && state.currentStep < formData.subForms.length - 1 && (
                    <Button type="submit" onClick={handleNextStep}>
                        {data.nextButtonLabel}
                    </Button>
                )}
                {(isSingleStep || state.currentStep === formData.subForms.length - 1) && (
                    <Button
                        type="submit"
                        disabled={!state.isFormValid || state.isSuccess}
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
