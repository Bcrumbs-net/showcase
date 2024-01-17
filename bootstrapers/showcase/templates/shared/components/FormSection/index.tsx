import { useEffect, useState } from 'react';
import {
  Box,
  Textarea,
  Text,
  Input,
  Container,
  Select,
} from '../../../../../../lib/atoms';
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  ContactForm,
  SubmitButton,
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

  const [state, setState] = useState({
    submitted: false,
  });

  const { loading, formData, error } = useFormQuery(data.formID);
  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value,
      submitted: false,
    });
  };

  const handleContact = (e) => {
    e.preventDefault();
    const payload = new URLSearchParams();
    Object.keys(state).forEach((key) => {
      payload.append(key, state[key]);
    });
    fetch(data.formActionUrl, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      body: payload,
    }).then((res) => {
      if (res.ok) return setState({ submitted: true });
      else return '';
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

  const renderField = (field) => {
    switch (field.type) {
      case 'Date':
        return (
          <div key={field.id}>
            <Input
              type="date"
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            />
          </div>
        );
      case 'Number':
        return (
          <div key={field.id}>
            <Input
              type="number"
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            />
          </div>
        );
      case 'Password':
        return (
          <div key={field.id}>
            <Input
              type="password"
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            />
          </div>
        );
      case 'String':
        return (
          <div key={field.id}>
            <Input
              type="text"
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            />
          </div>
        );
      case 'Multiple Lines':
        return (
          <div key={field.id}>
            <Textarea
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            />
          </div>
        );
      case 'Predefined List':
        return (
          <div key={field.id}>
            <Select
              value={state[field.name]}
              onChange={(e) => handleFormData(e.target?.value, field.name)}
            >
              <option value="" disabled>
                Select {field.title}
              </option>
              {field.choices.map((choice) => (
                <option key={choice} value={choice}>
                  {choice}
                </option>
              ))}
            </Select>
          </div>
        );
      case 'Checkboxes':
        return (
          <div key={field.id}>
            {field.choices.map((choice) => (
              <label key={choice}>
                <Input
                  type="checkbox"
                  value={choice}
                  checked={state[field.name].includes(choice)}
                  onChange={(e) =>
                    handleFormData(
                      e.target.checked
                        ? [...state[field.name], choice]
                        : state[field.name].filter((item) => item !== choice),
                      field.name
                    )
                  }
                />
                {choice}
              </label>
            ))}
          </div>
        );
      case 'Radio Buttons':
        return (
          <div key={field.id}>
            {field.choices.map((choice) => (
              <label key={choice}>
                <Input
                  type="radio"
                  value={choice}
                  checked={state[field.name] === choice}
                  onChange={() => handleFormData(choice, field.name)}
                />
                {choice}
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <SectionWrapper id={model.name} background={data.backgroundImage}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            <ContactForm onSubmit={(e) => handleContact(e)}>
              {formData.formFields &&
                Array.isArray(formData.formFields) &&
                formData.formFields.filter((field) => !field.invisible)
                  .map((field) => (
                    <div key={field.id}>
                      <label>{field.title}</label>
                      {renderField(field)}
                    </div>
                  ))}
              <SubmitButton type="submit">{formData.submitButtonLabel}</SubmitButton>
              {state.submitted &&
                //@ts-ignore
                <Text content={formData.submitRedirectUrl}></Text>}
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
