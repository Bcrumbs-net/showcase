import { Fragment } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
import PropTypes from 'prop-types';

import Fade from 'react-reveal/Fade';
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  ImageLink,
  TextWrapper,
  CarouselWrapper,
} from './style';
import { Container, Box, Heading, Button , Image} from '../../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../../molecules';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
interface BlogSliderSectionProps {
  sectionHeader: object;
  sectionTitle: object;
  button: string;
  blogTitle: string;
  blogMeta: string;
  btnStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const BlogSliderSection = ({
  sectionHeader,
  sectionTitle,
  button,
  blogTitle,
  blogMeta,
  btnStyle,
  model,
  isAR,
  data
}: BlogSliderSectionProps) => {
  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 50,
    autoplay: 3000,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30,
      },
      767: {
        perView: 2,
        gap: 30,
      },
      480: {
        perView: 1,
      },
    },
  };
  return (
    <SectionWrapper id={model.name}>
      <Container width={1360}>
        <Box {...sectionHeader}>
          <Heading content={data.sectionTitle} {...sectionTitle} />
        </Box>
        <Fade bottom delay={30}>
          <CarouselWrapper>
            <GlideCarousel
              carouselSelector={`${model.name}-carousel`}
              className="blog_carousel"
              options={glideOptions}
              nextButton={
                <Button
                  icon={<i className="flaticon-next" />}
                  aria-label="Next"
                  variant="fab"
                />
              }
              prevButton={
                <Button
                  icon={<i className="flaticon-left-arrow" />}
                  aria-label="Prev"
                  variant="fab"
                />
              }
            >
              <Fragment>
                {model.children &&
                  model.children.map((blogSection, index) => {
                    const blogSectionMap: Record<string, string> = blogSection.data.reduce(function (
                      map,
                      obj
                    ) {
                      map[obj.Key] = obj.Value;
                      return map;
                    },
                    {});
                    return (
                       // @ts-ignore TypeScript is complaining
                      <GlideSlide key={`project_key${blogSectionMap.id}`}>
                        <TeamCard
                          className="team_card"
                          style={{
                            direction: isAR ? 'rtl' : 'ltr',
                            textAlign: 'center',
                          }}
                        >
                          <ImageWrapper className="image_wrapper">
                            <a
                              href={blogSectionMap.postLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Image
                                src={blogSectionMap.thumbnail_url}
                                alt={blogSectionMap.title}
                              />
                            </a>
                          </ImageWrapper>
                          {blogSectionMap.title ? (
                            <ImageLink
                              href={blogSectionMap.postLink}
                              target="_blank"
                            >
                              {blogSectionMap.title}
                            </ImageLink>
                          ) : null}
                          {blogSectionMap.btnText ? (
                            <Button
                              title={blogSectionMap.btnText}
                              {...btnStyle}
                              onClick={() => {
                                window.location.replace(blogSectionMap.postLink);
                              }}
                            />
                          ) : null}
                        </TeamCard>
                      </GlideSlide>
                    );
                  })}
              </Fragment>
            </GlideCarousel>
          </CarouselWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

// BlogSection style props

// BlogSection default style
BlogSliderSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    //color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    mb: '10px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    mt: '20px',
  },
};

export default withModelToDataObjProp(BlogSliderSection);
