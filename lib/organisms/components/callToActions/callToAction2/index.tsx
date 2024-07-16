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
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface ControllSectionProps {
  row: object;
  col: object;
  title: object;
  description: object;
  button?: object;
  btnStyle?: object;
  sectionWrapper?: object;
  textArea?: object;
  textAreaRow?: object;
  imageArea?:object;
  imageAreaRow?:object;
  imageWrapper?:object;
  imageWrapperOne?:object;
  imageWrapperTwo?:object;
  sectionSubTitle?:object;
  model: GraphContent;
  data: Record<string, string>;
}

const ControllSection = ({
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
}:ControllSectionProps) => {
  return (
    <Box {...sectionWrapper} id={model.name}>
      <Container fullWidth noGutter className="control-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea}>
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <Image src={data.ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
            <Card {...imageWrapper} {...imageWrapperTwo}>
              <Fade bottom>
                <Image src={data.ImageTwo} alt="Info Image Two" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text {...sectionSubTitle} content={data.sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} content={data.title} />}
              description={<Text content={data.description} {...description} />}
              button={
                <Link href="#">

                  <Button title={data.button} {...button} {...btnStyle} />

                </Link>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};


ControllSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['40px', '80px'],
    pb: ['40px', '80px'],
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
    width: ['100%', '100%', '50%', '50%', '50%'],
  },
  imageArea: {
    width: ['0px', '0px', '53%', '50%', '50%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    pointerEvents: 'none',
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
    ml: ['0px', '0px', '-200px', '-250px', '-400px'],
    pointerEvents: 'none',
  },
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
    textAlign: ['center', 'left'],
  },
  title: {
    fontSize: ['24px', '26px', '30px', '36px', '48px'],
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
    lineHeight: '1.75',
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

export default withModelToDataObjProp(ControllSection);
