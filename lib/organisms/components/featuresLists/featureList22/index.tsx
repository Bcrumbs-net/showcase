import React from 'react';
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
import InfoSectionWrapper from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface InfoSectionProps {
  row: object;
  col: object;
  title: object;
  description: object;
  button: object;
  textArea: object;
  imageArea: object;
  imageAreaRow: object;
  imageWrapper: object;
  imageWrapperOne: object;
  imageWrapperTwo: object;
  fadeStyle: object;
  textAreaRow: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow,
  fadeStyle,
  model,
  data,
  isAR
}: InfoSectionProps) => {
  return (
    <InfoSectionWrapper>
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea} className="image_area">
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade {...fadeStyle} className="fadeStyle" left>
                <Image src={data.image} alt="Info Image One" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image src={data.image2} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content={data.title}
            />
            <Text
              {...description}
              content={data.description}
            />
            <Box>
              <Link href="#">

                <Button {...button} title="HOW IT WORKS55" />

              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </InfoSectionWrapper>
  );
};

InfoSection.defaultProps = {
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
    width: ['100%', '100%', '50%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
    margin: "50px",
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px'],
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    marginBottom: '-3px',
    marginLeft: '100px',
    borderRadius: '20px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    zIndex: "1000",
  },
  fadeStyle: {
    animationFillMode: 'both',
    animationDuration: '1000ms',
    animationDelay: '0ms',
    animationIterationCount: 1,
    opacity: 1,
    animationName: 'react-reveal-803164563166763-2',
  },
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
  },
};

export default withModelToDataObjProp(InfoSection);
