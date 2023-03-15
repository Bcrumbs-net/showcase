import { Fragment } from 'react';
import { Image, Text, Heading, Container } from '../../../atoms';
import { FeatureBlock, GlideCarousel, GlideSlide } from '../../../molecules';
import SectionWrapper, { CarouseWrapper, TextWrapper } from './appSlider.style';

const AppSlider = () => {
  const glideOptions = {
    type: 'carousel',
    gap: 0,
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };
  return (
    <SectionWrapper>
      <Container>
        <CarouseWrapper>
          <GlideCarousel
            bullets={true}
            controls={false}
            numberOfBullets={3}
            options={glideOptions}
            carouselSelector="appFeatureSlider"
          >
            <Fragment>
              {/*carousel.map(item => (
                <GlideSlide key={`feature-side--key${item.id}`}>
                  <Image src={item.image} alt={item.title} />
                </GlideSlide>
              ))*/}
            </Fragment>
          </GlideCarousel>
        </CarouseWrapper>
        <TextWrapper>
          <Heading content={'title'} />
          <Text content={'description'} />
          {/*features.map(item => (
            <FeatureBlock
              key={`app-feature--key${item.id}`}
              iconPosition="left"
              icon={<i className={item.icon}></i>}
              title={<Heading as="h3" content={item.title} />}
              description={<Text content={item.description} />}
            />
          ))*/}
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AppSlider;
