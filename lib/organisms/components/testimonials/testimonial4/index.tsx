import React from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { Box, Text, Heading, Image, Container } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import {
  TestimonialWrapper,
  TestimonialItem,
  TestimonialHead,
  TestimonialThumb,
  PrevButton,
  NextButton,
} from "./style";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, { convertDataModelToDataObject } from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { TestimonialDataType } from "../../../types/testimonialTypes";

interface TestimonialSectionProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secTitle: object;
  secDescription: object;
  reviewStyle: object;
  nameStyle: object;
  designationStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: TestimonialDataType;
}
const TestimonialSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  reviewStyle,
  nameStyle,
  designationStyle,
  model,
  isAR,
  data,
}: TestimonialSectionProps) => {
  //Carousel Options
  const carouselOptions = {
    type: data.subdata && data.subdata.length > 5 ? "carousel" : "slider",
    autoplay: data.subdata && data.subdata.length > 5 ? 6000 : false,
    perView: 3,
    gap: 28,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.description} />
        </Box>
        <TestimonialWrapper>
          <GlideCarousel
            carouselSelector={`${model.name}-testimonial-carousel`}
            options={carouselOptions}
            prevButton={
              <PrevButton>
                <span />
              </PrevButton>
            }
            nextButton={
              <NextButton>
                <span />
              </NextButton>
            }
          >
            <>
              {data.subdata &&
                data.subdata.map((testimonialMap, index) => {
                  return (
                    // @ts-ignore
                    <GlideSlide key={`${model.name}-testimonial-item-${index}`}>
                      <TestimonialItem>
                        <TestimonialHead>
                          <Link href={testimonialMap.twitterProfile || "#"}>
                            <a aria-label="twitter">
                              {testimonialMap.tweetImage ? (
                                <img src={testimonialMap.tweetImage} alt="Icon" />
                              ) : (
                                <Icon icon={twitter} size={24} />
                              )}
                            </a>
                          </Link>
                          {testimonialMap.avatarUrl ? (
                            <TestimonialThumb>
                              <Image
                                src={testimonialMap.avatarUrl}
                                alt={`${testimonialMap.name}-${index + 1}`}
                              />
                            </TestimonialThumb>
                          ) : null}
                        </TestimonialHead>
                        <Text {...reviewStyle} content={testimonialMap.description} />
                        <Heading as="h3" content={testimonialMap.name} {...nameStyle} />
                        <Text
                          as="span"
                          content={testimonialMap.designation}
                          {...designationStyle}
                        />
                        <Link href={testimonialMap.organizationURL || "#"}>
                          <a className="reviewer_org">{testimonialMap.organization}</a>
                        </Link>
                      </TestimonialItem>
                    </GlideSlide>
                  );
                })}
            </>
          </GlideCarousel>
        </TestimonialWrapper>
      </Container>
    </Box>
  );
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: "50px",
    pb: "70px",
  },
  secTitleWrapper: {
    mb: ["90px", "90px", "50px", "50px", "50px"],
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    width: "530px",
    maxWidth: "100%",
    mb: "0",
  },
  reviewStyle: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "30px",
  },
  nameStyle: {
    fontSize: "16px",
    color: "#302b4e",
    fontWeight: "600",
    mb: "7px",
  },
  designationStyle: {
    fontSize: "14px",
    color: "#43414e",
    mb: "0",
  },
};

export default withModelToDataObjProp(TestimonialSection);
