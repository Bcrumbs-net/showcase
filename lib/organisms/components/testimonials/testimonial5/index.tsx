import React from "react";
import { Box, Text, Heading, Image, Container } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import {
  TestimonialSlideWrapper,
  TestimonialItem,
  TestimonialMeta,
  AuthorInfo,
  AuthorImage,
} from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, { convertDataModelToDataObject } from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface TestimonialSectionProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  reviewTitle: object;
  review: object;
  name: object;
  designation: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  reviewTitle,
  review,
  name,
  designation,
  model,
  isAR,
  data,
}: TestimonialSectionProps) => {
  const carouselOptions = {
    type: "carousel",
    autoplay: 6000,
    perView: 2,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 1,
      },
    },
  };
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.tilte} />
          <Heading {...secHeading} content={data.subtitle} />
        </Box>
        <TestimonialSlideWrapper>
          <GlideCarousel
            options={carouselOptions}
            carouselSelector="testimonial__slider"
            controls={false}
            bullets={true}
            numberOfBullets={model.children.length}
          >
            <>
              {model.children &&
                model.children.map((item, index) => {
                  const testimonialMap = convertDataModelToDataObject(item) as Record<string, string>;
                  return (
                    // @ts-ignore
                    <GlideSlide key={`testimonial-slide-${index}`}>
                      <TestimonialItem>
                        <Heading
                          as="h3"
                          content={testimonialMap.title}
                          {...reviewTitle}
                        />
                        <Text content={testimonialMap.review} {...review} />
                        <TestimonialMeta>
                          <AuthorInfo>
                            <AuthorImage>
                              <Image
                                src={testimonialMap.avatar}
                                alt={`reviewer-image-${index}`}
                              />
                            </AuthorImage>
                            <Box>
                              <Heading
                                as="h3"
                                content={testimonialMap.name}
                                {...name}
                              />
                              <Text
                                content={testimonialMap.designation}
                                {...designation}
                              />
                            </Box>
                          </AuthorInfo>
                        </TestimonialMeta>
                      </TestimonialItem>
                    </GlideSlide>
                  );
                })}
            </>
          </GlideCarousel>
        </TestimonialSlideWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "90px", "100px", "100px"],
    pb: ["60px", "80px", "90px", "100px", "100px"],
  },
  secTitleWrapper: {
    mb: ["40px", "60px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#2eb582",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "500px",
    maxWidth: "100%",
  },
  reviewTitle: {
    fontSize: ["15px", "16px"],
    fontWeight: "500",
    color: "#343d48",
    lineHeight: "1.5",
    mb: "13px",
  },
  review: {
    fontSize: ["16px", "19px"],
    fontWeight: "300",
    color: "#343d48",
    lineHeight: "1.7",
    mb: 0,
  },
  name: {
    fontSize: ["14px", "16px"],
    fontWeight: "500",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "8px",
  },
  designation: {
    fontSize: ["12px", "14px"],
    color: "#6f7a87",
    mb: 0,
  },
};

export default withModelToDataObjProp(TestimonialSection);
