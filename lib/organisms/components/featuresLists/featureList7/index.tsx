import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Textarea, Text, Input, Container } from '../../../../atoms';
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  ContactForm,
  SubmitButton,
} from './style';
import { paymentPolicy, currencyOptions } from '../../../../data/Charity';
import heartImage from '../../../assets/image/charity/heart-alt.svg';
import { Icon } from 'react-icons-kit';
import { mapMarker } from 'react-icons-kit/fa/mapMarker';
import { phone } from 'react-icons-kit/fa/phone';
import { facebook } from 'react-icons-kit/fa/facebook';
import { instagram } from 'react-icons-kit/fa/instagram';
import { twitter } from 'react-icons-kit/fa/twitter';
import { youtube } from 'react-icons-kit/fa/youtube';
import { envelope } from 'react-icons-kit/fa/envelope';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface ContactSectionProps{
  row:object; 
  col:object; 
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ContactSection = ({
   row, 
   col, 
   model,
   data 
  }:ContactSectionProps) => {
  const initialValues = {
    Contact_us_Name: '',
    Contact_us_Email: '',
    Contact_us_Phone: '',
    Contact_us_Message: '',
  };
  let branchItems = [];
  if (model.children && model.children.length > 0) {
    branchItems = model.children.map((branchData, index) => {
      let branchMap = branchData.data.reduce(function (map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return branchMap;
    });
  }
  const [state, setState] = useState({
    ...initialValues,
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
    <SectionWrapper id={model.name} background={data.backgroundImage}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <Heading>{data.title}</Heading>
            <ContactForm onSubmit={(e) => handleContact(e)}>
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
              />
              <SubmitButton type="submit">{data.submitButton} </SubmitButton>
              {state.submitted ? (
                <Text content={data.formSubmitMessage}></Text>
              ) : null}
            </ContactForm>
          </Box>
          <Box className="col middleMargin" {...col}>
            <ContentArea>
              <Box className="single-contact">
                <Box className="contact-icon">
                  <Icon icon={mapMarker} size={30} />
                </Box>
                <Box className="contact-content">
                  <h3>{data.locationLabel}</h3>
                  <p>{data.location}</p>
                  <p>{data.location2}</p>
                </Box>
              </Box>
              <Box className="single-contact">
                <Box className="contact-icon">
                  <Icon icon={phone} size={30} />
                </Box>
                <Box className="contact-content">
                  <h3>{data.phoneLabel}</h3>
                  <p>{data.phone}</p>
                  <p>{data.phone2}</p>
                  <p>{data.email}</p>
                  <p>
                    {data.fbUrl ? (
                      <a
                        className="social"
                        href={data.fbUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon icon={facebook} size={20} />
                      </a>
                    ) : null}
                    {data.instagram ? (
                      <a
                        className="social"
                        href={data.instagram}
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <Icon icon={instagram} size={20} />
                      </a>
                    ) : null}
                    {data.twitterUrl ? (
                      <a
                        className="social"
                        href={data.twitterUrl}
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <Icon icon={twitter} size={20} />
                      </a>
                    ) : null}
                    {data.youtubeURL ? (
                      <a
                        className="social"
                        href={data.youtubeURL}
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <Icon icon={youtube} size={20} />
                      </a>
                    ) : null}
                    {data.instagramURL ? (
                      <a
                        className="social"
                        href={data.instagramURL}
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <Icon icon={instagram} size={20} />
                      </a>
                    ) : null}
                  </p>
                </Box>
              </Box>
              {/*<Box className="single-contact">
                <Box className="contact-icon">
                  <Icon icon={envelope} size={30} />
                </Box>
                <Box className="contact-content">
                  <h3>{data.emailLabel}</h3>
                  <p>{data.email}</p>
                </Box>
  </Box>*/}
            </ContentArea>
          </Box>
          <Box className="col" {...col}>
            <Heading>{data.title2}</Heading>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={data.mapUrl}
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// ContactSection style props
ContactSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textStyle: PropTypes.object,
};

// ContactSection default style
ContactSection.defaultProps = {
  // ContactSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // ContactSection col default style
  col: {
    width: ['100%', '50%', '50%', '33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
    height: ['558px', '558px', '558px'],
  },
};

export default withModelToDataObjProp(ContactSection) ;
