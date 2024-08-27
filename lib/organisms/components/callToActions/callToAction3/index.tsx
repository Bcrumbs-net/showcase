import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import {
  Box,
  Text,
  Heading,
  Card,
  Image,
  Button,
  Container
} from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import styled from 'styled-components';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

const PaymentCircleShape = styled.div`
  width: 700px;
  height: 700px;
  background: #ffc845;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 47%;
  z-index: -1;
  transform: translateY(-50%);
  pointer-events: none;
  @media (max-width: 1440px) {
    width: 550px;
    height: 550px;
  }
  @media (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }
  @media (max-width: 991px) {
    width: 350px;
    height: 350px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

interface PaymentSectionProps {
  row?: object;
  col?: object;
  title?: object;
  description?: object;
  sectionWrapper?: object;
  button?: object;
  btnStyle: object;
  imageArea?: object;
  textAreaRow?: object;
  textArea?: object;
  imageAreaRow?: object;
  imageWrapper?: object;
  imageWrapperOne?: object;
  imageWrapperTwo?: object;
  sectionSubTitle:object;
  model: GraphContent;
  data: Record<string, string>;
}
const PaymentSection = ({
  sectionWrapper,
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  textAreaRow,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  sectionSubTitle,
  btnStyle,
  model,
  data,
}:PaymentSectionProps) => {
  return (
    <Box {...sectionWrapper} id={model.name}>
      <PaymentCircleShape />

      <Container fullWidth noGutter className="control-sec-container payment">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={data.ImageOne} alt={data.imageOneAlt} />
              </Fade>
            </Card>
            <Card
              {...imageWrapper}
              {...imageWrapperTwo}
              //@ts-ignore
              className="cardExtraImage"
            >
              <Fade right>
                <Image src={data.ImageTwo} alt={data.imageTwoAlt} />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text content={data.sectionSubTitle} {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading content={data.title} {...title} className="title"/>}
              description={<Text content={data.description} {...description} className="description" />}
              button={
                <Link href={data.href}>

                  <Button
                    title={data.button_label}
                    {...button}
                    {...btnStyle}
                  />

                </Link>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

PaymentSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '40px', '40px', '80px', '80px'],
    pb: ['80px', '80px', '80px', '180px', '280px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: [1, 1, '45%', '45%', '45%'],
    zIndex: '1',
  },
  imageArea: {
    width: [0, 0, '52%', '45%', '45%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-start',
    mt: ['0px', '0px', '40px', '50px', '90px'],
    ml: ['-250px', '-250px', '-180px', '-220px', '-420px'],
    pointerEvents: 'none',
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: ['center', 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '60px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '420px', '420px'],
    textAlign: ['center', 'left'],
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    textAlign: ['center', 'left'],
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default withModelToDataObjProp(PaymentSection);
