import { useEffect, useState } from 'react';
import { Box, Text, Container } from '../../../../../../lib/atoms';
import SectionWrapper, {
  Heading,
  ContactForm,
  SubmitButton,
  Loader,
} from './style';
import withModelToDataObjProp from '../../../../utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';
import React from 'react';
import useFormQuery from '../../../../utils/useFormQuery';
import FormInput from './FormInput';

interface FormSectionProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const FormSection = ({ row, col, model, isAR, data }: FormSectionProps) => {
  const [formFieldsState, setFormFieldsState] = useState({});
  const [failureMessage, setFailureMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    submitted: false,
    isFormValid: false,
    isSuccess: false,
  });
  const { loading, formData, error } = useFormQuery(data.formID);

  useEffect(() => {
    if (formData && formData.formFields) {
      const initialState = formData.formFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
      }, {});
      setFormFieldsState(initialState);
    }
  }, [formData]);

  useEffect(() => {
    const isFormValid = Object.entries(formFieldsState).every(
      ([name, value]: [string, string]) => {
        const field = formData.formFields.find((f) => f.name === name);
        return !field.required || (field.required && value?.trim() !== '');
      }
    );
    setState((prevState) => ({ ...prevState, isFormValid }));
  }, [formFieldsState, formData]);

  const handleFormData = (value, name) => {
    setFormFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [name]: value,
    }));
    setState({
      ...state,
      submitted: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!state.isFormValid || isLoading || state.isSuccess) {
      return;
    }
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const payload = new FormData();
      Object.keys(formFieldsState).forEach((key) => {
        payload.append(key, formFieldsState[key]);
      });

      fetch(data.formActionUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
        },
        body: payload,
      })
        .then((res) => {
          if (res.ok) {
            setState({
              submitted: true,
              isFormValid: true,
              isSuccess: true,
            });
          } else {
            return Promise.reject('Form submission failed');
          }
        })
        .catch((error) => {
          console.log('Failure Submit: ', error);
          setFailureMessage(data.failureMessage);
          setState({ submitted: true, isFormValid: false, isSuccess: false });
        });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(`Error fetching form data`, error);
    return null;
  }

  if (!formData) {
    console.log(`Form with ID {data.formID} does not exist`);
    return null;
  }

  const form = (
    <>
      {formData.formFields &&
        Array.isArray(formData.formFields) &&
        formData.formFields
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
          ))}
      <SubmitButton
        type="submit"
        isLoading={isLoading}
        disabled={!state.isFormValid || state.isSuccess || isLoading}
      >
        {isLoading ? isLoading && <Loader /> : formData.submitButtonLabel}
      </SubmitButton>
    </>
  );

  return (
    <SectionWrapper id={model.name} background={data.backgroundImage}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            <ContactForm onSubmit={(e) => handleSubmit(e)} isAR={isAR}>
              {state.submitted ? (
                <>
                  {failureMessage ? (
                    <>
                      {form}
                      <Text className="failure" content={failureMessage} />
                    </>
                  ) : (
                    <>
                      {form}
                      <Text className="success" content={data.successMessage} />
                    </>
                  )}
                </>
              ) : (
                form
              )}
            </ContactForm>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// FormSection default style
FormSection.defaultProps = {
  // FormSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // FormSection col default style
  col: {
    width: ['100%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default withModelToDataObjProp(FormSection);
