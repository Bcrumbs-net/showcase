import React, { useEffect, useState, useMemo } from 'react';
import { Box, Container } from '../../../../../../lib/atoms';
import SectionWrapper, { Heading } from './style';
import withModelToDataObjProp from '../../../../utils/withModelToDataObjProp';
import useFormQuery from '../../../../utils/useFormQuery';
import DynamicForm from './DynamicForm';
import { GraphContent } from '@bcrumbs.net/bc-api';

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
  const [state, setState] = useState({
    submitted: false,
    isSuccess: false,
    isLoading: false,
    currentStep: 0,
  });
  const { loading, formData, error } = useFormQuery(data.formID);
  const isFormValid = useMemo(() => {
    if (!formData || !formData.subForms) {
      return false;
    }

    const stepFields = formData.subForms[state.currentStep].formFields;
    return stepFields
      .filter((field) => field?.required)
      .every((field) => {
        const fieldValue = formFieldsState[field.name];

        if (!fieldValue) {
          return false;
        }

        return typeof fieldValue === 'string'
          ? fieldValue.trim() !== ''
          : fieldValue !== '';
      });
  }, [formData, formFieldsState, state.currentStep]);

  useEffect(() => {
    if (formData) {
      if (formData.formFields && formData.subForms.length === 0) {
        const initialState = formData.formFields.reduce((acc, field) => {
          acc[field.name] = '';
          return acc;
        }, {});
        setFormFieldsState(initialState);
      } else if (
        formData.subForms &&
        formData.subForms.length > 0 &&
        formData.subForms[0].formFields
      ) {
        const initialState = formData.subForms[0].formFields.reduce(
          (acc, field) => {
            acc[field.name] = '';
            return acc;
          },
          {}
        );
        setFormFieldsState(initialState);
      }
    }
  }, [formData]);

  const handleFormData = (value, name) => {
    setFormFieldsState((prevFieldsState) => ({
      ...prevFieldsState,
      [name]: value,
    }));
    setState((prevState) => ({ ...prevState, submitted: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid || state.isLoading || state.isSuccess) {
      return;
    }

    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const payload = new FormData();
      Object.keys(formFieldsState).forEach((key) => {
        payload.append(key, formFieldsState[key]);
      });
      payload.append('AjaxCall', 'true');
      const response = await fetch(data.formActionUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          Ajax: 'true',
        },
        body: payload,
      });
      if (response.ok) {
        setState((prevState) => ({
          ...prevState,
          submitted: true,
          isSuccess: true,
        }));
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFailureMessage(data.failureMessage);
      setState((prevState) => ({
        ...prevState,
        submitted: true,
        isSuccess: false,
      }));
    } finally {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const handleNextStep = () => {
    setState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep + 1,
    }));
  };

  const handlePrevStep = () => {
    setState((prevState) => ({
      ...prevState,
      currentStep: prevState.currentStep - 1,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(`Error fetching form data`, error);
    return null;
  }

  return (
    <SectionWrapper id={model.name} background={data.backgroundImage}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            <DynamicForm
              data={data}
              formData={formData}
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              formFieldsState={formFieldsState}
              handleFormData={handleFormData}
              handleSubmit={handleSubmit}
              state={state}
              failureMessage={failureMessage}
              isAR={isAR}
              isFormValid={isFormValid}
            />
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
