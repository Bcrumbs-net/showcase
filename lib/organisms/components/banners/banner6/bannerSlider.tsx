import React from "react";
import { Image, Heading, Text, Box, Container } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import{ TestimonialSecWrapper,  ImageWrapper, TestimonialItem } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface BannerSliderSectionProps {
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  reviewStyle: object;
  TestimonialMeta: object;
  nameStyle: object;
  designationStyle: object;
  arrowStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const BannerSliderSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
  arrowStyle,
  model,
  isAR,
  data,
}: BannerSliderSectionProps) => {
  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 3000,
    perView: 1,
    animationDuration: 600,
  };
  return (
    <TestimonialSecWrapper id={model.name}>
      <Container>
        <div style={{ width: "440px" }}>
          <GlideCarousel
            options={carouselOptions}
            bullets={true}
            numberOfBullets={4}
            controls={false}
          >
            <>
              {model.children?.map((testimonial, index) => {
                const testimonialMap: Record<string, string> =
                  testimonial.data.reduce(function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});
                return (
                  // @ts-ignore
                  <GlideSlide key={`testimonial-slide-${index}`}>
                    <TestimonialItem className="testimonial_item">
                      <Text content={testimonialMap.review} {...reviewStyle} />
                      <Box {...TestimonialMeta}>
                        <ImageWrapper>
                          <Image
                            src={testimonialMap.avatar}
                            alt={`reviewer-image-${index}`}
                          />
                        </ImageWrapper>
                        <Box>
                          <Heading
                            content={testimonialMap.name}
                            {...nameStyle}
                          />
                          <Text
                            content={testimonialMap.designation}
                            {...designationStyle}
                          />
                        </Box>
                      </Box>
                    </TestimonialItem>
                  </GlideSlide>
                );
              })}
            </>
          </GlideCarousel>
        </div>
      </Container>
    </TestimonialSecWrapper>
  );
};

BannerSliderSection.defaultProps = {
  secTitleWrapper: {
    mb: ["40px", "40px", "50px", "75px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#eb4d4b",
    mb: "10px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  reviewStyle: {
    fontSize: ["16px", "16px", "16px", "16px", "16px"],
    fontWeight: "400",
    color: "rgb(82, 95, 127)",
    lineHeight: "1.74",
    mb: ["30px", "30px", "30px", "30px", "40px"],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: "center",
  },
  nameStyle: {
    as: "h3",
    fontSize: ["16px", "17px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "rgb(50, 50, 93)",
    mb: "5px",
    fontFamily: "Poppins",
  },
  designationStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "rgb(82, 95, 127)",
    mb: "0",
    fontFamily: "Poppins",
  },
};

export default withModelToDataObjProp(BannerSliderSection);
