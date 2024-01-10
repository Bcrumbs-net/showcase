import { useState } from 'react';
import {
  Box,
  Textarea,
  Text,
  Input,
  Container,
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

interface FormSectionProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const FormSection = ({ row, col, model, data }: FormSectionProps) => {
  const initialValues = {};

  const [state, setState] = useState({
    submitted: false,
  });

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
      if (res.ok) return setState({ ...initialValues, submitted: true });
      else return '';
    });
  };

  return (
    <SectionWrapper
      id={model.name}
      // @ts-ignore
      background={data.backgroundImage}
    >
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            <ContactForm onSubmit={(e) => handleContact(e)}>
              {/* Example of fields (Which should be rendered dynamically)
              <Input
                type="text"
                placeholder="NAME *"
                value={state.Contact_us_Name}
                onChange={(e) =>
                  handleFormData(e.target.value, 'Contact_us_Name')
                }
              />
              <Input
                type="text"
                placeholder="EMAIL *"
                value={state.Contact_us_Email}
                onChange={(e) =>
                  handleFormData(e.target.value, 'Contact_us_Email')
                }
              />
              <Input
                type="text"
                placeholder="PHONE"
                value={state.Contact_us_Phone}
                onChange={(e) =>
                  handleFormData(e.target.value, 'Contact_us_Phone')
                }
              />
              <Textarea
                placeholder="MESSAGE ..."
                value={state.Contact_us_Message}
                onChange={(e) =>
                  handleFormData(e.target.value, 'Contact_us_Message')
                }
              /> */}
              <SubmitButton type="submit">{data.submitButton}</SubmitButton>
              {state.submitted ? (
                <Text content={data.formSubmitMessage}></Text>
              ) : null}
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
