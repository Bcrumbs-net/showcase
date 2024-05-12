import React from "react";
import { Button, Image, Container } from "../../../../atoms";
import BannerSectionWrapper, { ImageWrapper } from "./style";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import { convertDataModelToDataObject } from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FullScreenBannerSectionProps {
  btnWrapperStyle: object;
  btnStyle: object;
  model: any;
  isAR: boolean;
}
const FullScreenBannerSection = ({
  btnWrapperStyle,
  btnStyle,
  model,
}: FullScreenBannerSectionProps) => {
  // Glide js options
  const glideOptions = {
    type: "slider",
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };
  return (
    <BannerSectionWrapper id={model.name}>
      <Container>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
          carouselSelector={`${model.name}-banner-slider`}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              aria-label="Next"
              variant="textButton"
              {...btnStyle}
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              aria-label="Prev"
              variant="textButton"
              {...btnStyle}
            />
          }
        >
          <>
            {model.children &&
              model.children
                .filter((m) => m.online)
                .map((testimonial, index) => {
                  const sliderMap = convertDataModelToDataObject(testimonial) as Record<string, string>;
                  return (
                    //@ts-ignore
                    <GlideSlide key={index}>
                      <ImageWrapper>
                        <a href={sliderMap.url}>
                          <Image src={sliderMap.image} alt="Slide Image" />
                        </a>
                      </ImageWrapper>
                    </GlideSlide>
                  );
                })}
          </>
        </GlideCarousel>
      </Container>
    </BannerSectionWrapper>
  );
};



// VideoSection default style
FullScreenBannerSection.defaultProps = {
  // glide slider nav controls style
  btnWrapperStyle: {
    position: "absolute",
    bottom: "-40px",
  },
  // next / prev btn style
  btnStyle: {
    minWidth: "auto",
    minHeight: "auto",
    mr: "40px",
    fontSize: "36px",
    color: "#343d484d",
  },
};

export default FullScreenBannerSection;
