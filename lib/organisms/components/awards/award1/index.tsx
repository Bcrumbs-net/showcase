import React from "react";
import {
  AwardSectionWrapper,
  AwardItem,
  AwardeeWrapper,
  AwardeeLogo,
  AwardeeDetails,
  AwardImageWrapper,
  PrevButton,
  NextButton
} from "./style";
import {
  Image,
  Container,
  Text,
  Box,
  Heading,
} from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface AwardsSectionProps {
  secTitleWrapper: object;
  secTitle: object;
  secDescription: object;
  awardLogoStyle: object;
  awardNameStyle: object;
  awardDetailsStyle: object;
  awardeeLogoStyle: object;
  awardeeNameStyle: object;
  awardDateStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardLogoStyle,
  awardNameStyle,
  awardDetailsStyle,
  awardeeLogoStyle,
  awardeeNameStyle,
  awardDateStyle,
  model,
  isAR,
  data,
}: AwardsSectionProps) => {
  //Carousel Options
  const carouselOptions = {
    type: data.children && data.children.length > 5 ? "carousel" : "slider",
    autoplay: data.children && data.children.length > 5 ? 4000 : false,
    perView: 4,
    gap: 30,
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
    <AwardSectionWrapper id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subtitle} />
        </Box>

        <GlideCarousel
          carouselSelector={model.name + "-carousel"}
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
            {model.children &&
              model.children.map((awardObj, index) => {
                const award: Record<string, string> = awardObj.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <GlideSlide key={`${awardObj.name}-award-item-${index}`}>
                    <AwardItem>
                      <AwardImageWrapper>
                        {award.awardLogo ? (
                          <Image
                            src={award.awardLogo}
                            alt={`award-logo-${index}`}
                            {...awardLogoStyle}
                          />
                        ) : null}
                      </AwardImageWrapper>
                      <Heading content={award.awardName} {...awardNameStyle} />
                      <Text
                        content={award.awardDetails}
                        {...awardDetailsStyle}
                      />
                      <AwardeeWrapper>
                        {award.awardeeLogo ? (
                          <AwardeeLogo>
                            <Image
                              src={award.awardeeLogo}
                              alt={`awardee-logo-${index}`}
                              {...awardeeLogoStyle}
                            />
                          </AwardeeLogo>
                        ) : null}
                        <AwardeeDetails>
                          <Heading
                            content={award.awardeeName}
                            {...awardeeNameStyle}
                          />
                          <Text content={award.date} {...awardDateStyle} />
                        </AwardeeDetails>
                      </AwardeeWrapper>
                    </AwardItem>
                  </GlideSlide>
                );
              })}
          </>
        </GlideCarousel>
      </Container>
    </AwardSectionWrapper>
  );
};


AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: "90px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  awardLogoStyle: {
    ml: "auto",
    mr: "auto",
    mb: "25px",
  },
  awardNameStyle: {
    fontSize: ["16px", "16px", "18px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.35",
    textAlign: "center",
    mb: "17px",
  },
  awardDetailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    mb: "0",
  },
  awardeeNameStyle: {
    fontSize: "16px",
    color: "#9391a5",
    lineHeight: "1.35",
    fontWeight: "600",
    mb: "4px",
  },
  awardDateStyle: {
    fontSize: "12px",
    color: "#9391a5",
    lineHeight: "1.35",
    mb: "0",
  },
};

export default withModelToDataObjProp(AwardsSection);
