import { GraphContent } from '@bcrumbs.net/bc-api';
import { Container, Box, Heading, Input, Button } from '../../../../atoms';
import NewsletterSectionWrapper, { NewsletterForm } from './style';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface NewsletterSectionProps {
  sectionHeader?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  btnStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const NewsletterSection = ({
  sectionHeader,
  sectionTitle,
  btnStyle,
  model,
  data
}: NewsletterSectionProps) => {
  return (
    <NewsletterSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.sectionTitle} {...sectionTitle} />
        </Box>
        <Box>
          <NewsletterForm>
            <Input
              inputType="email"
              isMaterial={false}
              placeholder="Email Address"
              aria-label="email"
            />
            <Button type="button" title="SEND MESSAGE" {...btnStyle} />
          </NewsletterForm>
        </Box>
      </Container>
    </NewsletterSectionWrapper>
  );
};

// NewsletterSection default style
NewsletterSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // button default style
  btnStyle: {
    minWidth: '152px',
    minHeight: '45px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default withModelToDataObjProp(NewsletterSection);
