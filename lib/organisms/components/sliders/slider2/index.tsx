import React, { Fragment, useState } from "react";
import Fade from "react-reveal/Fade";
import { Box, Heading, Image, Container, Button } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import ProductModal from "../../productsLists/productsList1";
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  CarouselWrapper,
} from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { Modal, openModal, closeModal } from "@redq/reuse-modal";

// Default close button for modal
const CloseModalButton = () => null;
<Button
  className="foodModalCloseBtn"
  variant="fab"
  onClick={() => closeModal()}
  icon={<i className="flaticon-plus-symbol" />}
/>;
const handleProductModal = (imagePath) => {
  openModal({
    config: {
      className: "product-modal",
      disableDragging: true,
      width: "50%",
      height: "100%",
      animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
      animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
      transition: {
        mass: 1,
        tension: 180,
        friction: 26,
      },
    },
    component: ProductModal,
    componentProps: {
      imagePath,
    },
    closeComponent: CloseModalButton,
    closeOnClickOutside: true,
  });
};

const glideOptions = {
  type: "slider",
  startAt: 0,
  bound: true,
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

interface BlogSliderSectionProps {
  sectionHeader: object;
  sectionTitle: object;
  button: object;
  blogTitle: object;
  blogMeta: object;
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
  model,
  isAR,
  data,
}: BlogSliderSectionProps) => {
  return (
    <>
      <SectionWrapper id={model.name}>
        <Container>
          <Box {...sectionHeader}>
            <Heading content={data.sectionTitle} {...sectionTitle} />
          </Box>
          <Fade bottom delay={30}>
            <CarouselWrapper>
              {model.children && (
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
                      model.children
                        .filter((m) => m.online)
                        .map((blogSection, index) => {
                          const blogSectionMap: Record<string, string> =
                            blogSection.data.reduce(function (map, obj) {
                              map[obj.Key] = obj.Value;
                              return map;
                            }, {});
                          return (
                            //@ts-ignore
                            <GlideSlide key={`project_key${blogSectionMap.id}`}>
                              <TeamCard className="team_card">
                                <ImageWrapper
                                  className="image_wrapper"
                                  onClick={() => {
                                    handleProductModal(
                                      blogSectionMap.thumbnail_url
                                    );
                                  }}
                                >
                                  <Image
                                    src={blogSectionMap.thumbnail_url}
                                    alt={blogSectionMap.title}
                                  />
                                </ImageWrapper>
                              </TeamCard>
                            </GlideSlide>
                          );
                        })}
                  </Fragment>
                </GlideCarousel>
              )}
            </CarouselWrapper>
          </Fade>
        </Container>
      </SectionWrapper>
    </>
  );
};

// BlogSection default style
BlogSliderSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"],
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["35px", "45px", "55px", "65px"],
    fontWeight: "400",
    //color: '#0f2137',
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // Blog post title default style
  blogTitle: {
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: "1.5",
    mb: "10px",
    letterSpacing: "-0.020em",
  },
  // Blog post description default style
  blogMeta: {
    fontSize: "16px",
    lineHeight: "1",
    color: "rgba(255, 255, 255, 0.5)",
    mb: 0,
  },
};

export default withModelToDataObjProp(BlogSliderSection);
