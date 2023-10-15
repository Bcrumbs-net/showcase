import { Fragment } from "react";
import { Text, Container } from "../../../../atoms";
import { Heading } from "../../../../atoms";
import { Button } from "../../../../atoms";
import { Image } from "../../../../atoms";
import { GlideCarousel, GlideSlide } from "../../../../molecules";
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
  RoundWrapper,
  ClientName,
} from "./style";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface TestimonialSectionProps {
  sectionHeader: object;
  sectionTitle: object;
  sectionSubTitle: object;
  row: object;
  col: object;
  btnWrapperStyle: object;
  commentStyle: object;
  nameStyle: object;
  btnStyle: object;
  designationStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TestimonialSection = ({
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
  model,
  isAR,
  data,
}: TestimonialSectionProps) => {
  // Glide js options
  const glideOptions = {
    type: "carousel",
    autoplay: 4000,
    perView: 1,
  };

  return (
    <TestimonialSectionWrapper id={model.name}>
      <Container>
        <Text content={data.title} {...sectionSubTitle} />
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              variant="textButton"
              aria-label="next"
              {...btnStyle}
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              variant="textButton"
              aria-label="prev"
              {...btnStyle}
            />
          }
        >
          <Fragment>
            {model.children &&
              model.children.map((item, index) => {
                let testimonialMap = item.data.reduce(function (map, obj) {
                  map[obj.Key] = obj.Value;
                  return map;
                }, {});
                return (
                  //@ts-ignore
                  <GlideSlide key={index}>
                    <Fragment>
                      <TextWrapper>
                        <i className="flaticon-quotes" />
                        <Text
                          content={testimonialMap.comment}
                          {...commentStyle}
                        />
                        <ClientName>
                          <Heading
                            content={testimonialMap.name}
                            {...nameStyle}
                          />
                          <Heading
                            content={testimonialMap.designation}
                            {...designationStyle}
                          />
                        </ClientName>
                      </TextWrapper>
                      <ImageWrapper>
                        <RoundWrapper>
                          <Image
                            src={testimonialMap.avatar_url}
                            alt="Client Image"
                          />
                        </RoundWrapper>
                        <Button
                          variant="fab"
                          icon={<i className={testimonialMap.social_icon} />}
                          aria-label="social"
                        />
                      </ImageWrapper>
                    </Fragment>
                  </GlideSlide>
                );
              })}
          </Fragment>
        </GlideCarousel>
      </Container>
    </TestimonialSectionWrapper>
  );
};

// TestimonialSection default style
TestimonialSection.defaultProps = {
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#5268db",
    mb: "20px",
    ml: "auto",
    mr: "auto",
    pl: "12px",
    maxWidth: "954px",
  },
  // client comment style
  commentStyle: {
    color: "#0f2137",
    fontWeight: "400",
    fontSize: ["22px", "22px", "22px", "30px"],
    lineHeight: "1.72",
    mb: "47px",
  },
  // client name style
  nameStyle: {
    as: "h3",
    color: "#343d48",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "30px",
    mb: 0,
  },
  // client designation style
  designationStyle: {
    as: "h5",
    color: "rgba(52, 61, 72, 0.8)",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "30px",
    mb: 0,
    ml: ["0", "10px"],
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: "absolute",
    bottom: "62px",
    left: "12px",
  },
  // next / prev btn style
  btnStyle: {
    minWidth: "auto",
    minHeight: "auto",
    mr: "13px",
    fontSize: "16px",
    color: "#343d484d",
  },
};

export default withModelToDataObjProp(TestimonialSection);
