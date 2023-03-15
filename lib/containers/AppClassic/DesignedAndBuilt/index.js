import { Button, Text, Heading, Image } from '../../../atoms';
import { Container } from '../../../molecules';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';
import { designAndBuilt } from '../../../data/AppClassic';

const DesignedAndBuilt = () => {
  const { image, title, description } = designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
