import { useEffect, useState } from 'react';
import {
  Box,
  Textarea,
  Text,
  Input,
  Container,
  Select,
  Radio,
  CheckBox,
} from '../../../../../../lib/atoms';
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  ContactForm,
  SubmitButton,
  RequiredFields,
  SuccessMessage,
  FailureMessage
} from './style';
import { Icon } from 'react-icons-kit';
import { mapMarker } from 'react-icons-kit/fa/mapMarker';
import { phone } from 'react-icons-kit/fa/phone';
import { facebook } from 'react-icons-kit/fa/facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitter } from 'react-icons-kit/fa/twitter';
import { youtube } from 'react-icons-kit/fa/youtube';
import { envelope } from 'react-icons-kit/fa/envelope';
import withModelToDataObjProp from '../../../../utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';
import React from 'react';
import useFormQuery from '../../../../utils/useFormQuery';

interface FormSectionProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const FormSection = ({ row, col, model, data }: FormSectionProps) => {
  const [formFieldsState, setFormFieldsState] = useState({});
  const [failureMessage, setFailureMessage] = useState('');
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
  const handleSubmit = (e) => {
    e.preventDefault();

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
        if (res.ok) return setState({ submitted: true, isFormValid: true, isSuccess: true });

        else return '';
      })
      .catch((error) => {
        console.log('Failure Submit: ', error);
        setFailureMessage(data.failureMessage);
        setState({ submitted: true, isFormValid: false, isSuccess: false });
      });
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

  const renderField = (field, formFieldsState, handleFormData, isSuccess) => {
    const commonProps = {
      value: formFieldsState[field.name],
      onChange: (value) => handleFormData(value, field.name),
      disabled: isSuccess,
    };
    switch (field.type) {
      case 'String':
        return (
          <div key={field.id}>
            <Input inputType='text' {...commonProps} />
          </div>
        );
      case 'Date':
        return (
          <div key={field.id}>
            <Input inputType="date" {...commonProps} />
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
            <Input inputType="password" {...commonProps} passwordShowHide={false} />
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
              value={{ label: formFieldsState[field.name], value: formFieldsState[field.name] }}
              onChange={(selectedOption) => handleFormData(selectedOption.value, field.name)}
              options={[
                { label: `Select ${field.name}`, value: '', isDisabled: true },
                ...field.choices.map((choice) => ({ label: choice, value: choice })),
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
                      : formFieldsState[field.name].filter((item) => item !== choice),
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
                key={choice}
                id={choice}
                labelText={choice}
                value={choice}
                labelPosition='right'
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
  const form = (
    <ContactForm onSubmit={(e) => handleSubmit(e)}>
      {formData.formFields &&
        Array.isArray(formData.formFields) &&
        formData.formFields.filter((field) => !field.invisible && !field.required)
          .map((field) => (
            <div key={field.id}>
              <label>{field.name}</label>
              {renderField(field, formFieldsState, handleFormData, state.isSuccess)}
            </div>
          ))}
      {formData.formFields &&
        Array.isArray(formData.formFields) &&
        formData.formFields.filter((field) => !field.invisible && field.required)
          .map((field) => (
            <RequiredFields key={field.id} >
              <div>
                <label className='required-label'>{field.name}</label>
                {renderField(field, formFieldsState, handleFormData, state.isSuccess)}
              </div>
            </RequiredFields>
          ))}
      <SubmitButton type="submit" disabled={!state.isFormValid || state.isSuccess}>
        {formData.submitButtonLabel}
      </SubmitButton>
    </ContactForm>
  );
  return (
    <SectionWrapper id={model.name} background={data.backgroundImage}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            {state.submitted ? (
              <>
                {failureMessage ? (
                  <>
                    {form}
                    <FailureMessage>
                      < Text content={failureMessage} />
                    </FailureMessage>
                  </>
                ) : (
                  <>
                    {form}
                    < SuccessMessage >
                      <Text content={data.successMessage} />
                    </SuccessMessage>
                  </>
                )}
              </>
            ) : (
              form
            )}
          </Box>
        </Box>
      </Container>
    </SectionWrapper >
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