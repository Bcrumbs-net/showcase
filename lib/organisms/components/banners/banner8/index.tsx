import React, { Fragment } from "react";
import Link from "next/link";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { Text, Heading, Image } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import LeftBar from "./leftBar";
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface BannerSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const BannerSection = ({ model, isAR, data }: BannerSectionProps) => {
  const glideOptions = {
    type: "carousel",
    perView: 1,
    gap: 0,
  };
  let slides = [];
  if (model.children && model.children.length > 0) {
    slides = model.children.map((bannerSlides, index) => {
      const sliderMap = convertDataModelToDataObject(bannerSlides);
      return sliderMap;
    });
  }

  return (
    <BannerWrapper id={model.name}>
      <LeftBar
        text={data.Scrolldown_Button_Text}
        offset={data.Scrolldown_Button_Offset}
        sectionId={data.Scrolldown_Button_SectionId}
      />
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>{data.News_Title}</strong> {data.News_Text}
            <Icon icon={chevronRight} />
          </HighlightedText>
          <Heading content={data.Heading_1} />
          <Heading as="h4" content={data.Heading_2} />
          <Text content={data.Text} />
          <Link href={data.Button_Url}>
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">{data.Button_Text}</span>
            </a>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {slides.map((slide) => (
                <GlideSlide key={slide.id}>
                  <Image src={slide.thumb_url} alt="Charity Landing" />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default withModelToDataObjProp(BannerSection);
