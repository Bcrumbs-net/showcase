import { Box, Container } from "../../../../atoms";
import ImageGallery from "react-image-gallery";
import withModelToDataObjProp, { convertDataModelToDataObject } from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";
import SliderDes from "./description";
import { TestimonialDataType } from "../../../types/testimonialTypes";

interface TestimonialSectionProps {
  sectionWrapper: object;
  title: object;
  row: object;
  sectionSubTitle: object;
  model: GraphContent;
  data: TestimonialDataType;
}

const TestimonialSection = ({
  sectionWrapper,
  row,
  sectionSubTitle,
  model,
  data,
}: TestimonialSectionProps) => {
  let testimonialLst;
  if (data.subdata && data.subdata.length > 0) {
    testimonialLst = data.subdata.flatMap((testimonialData) => {
      return {
        thumbnail: testimonialData.thumbnail,
        thumbnailAlt: testimonialData.thumbnailAlt,
        description: (
          <SliderDes
            data={{
              description: testimonialData.description,
              designation: testimonialData.designation,
              name: testimonialData.name,
            }}
          />
        ),
      }
    });
  }

  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id={model.name}
    >
      <Container>
        <Box className="testimonialDesWrapper">
          <ImageGallery
            items={testimonialLst}
            originalClass="Testimonial-img"
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Box>
      </Container>
    </Box>
  );
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    pt: "0px",
    pb: ["20px", "80px", "0px", "80px", "80px"],
  },

  sectionSubTitle: {
    content: "CLIENT TESTIMONIAL",
    as: "span",
    display: "block",
    textAlign: ["center", "left"],
    fontSize: "14px",
    letterSpacing: "0.11em",
    fontWeight: "700",
    color: "#1a73e8",
    textTransform: "uppercase",
    mb: "10px",
  },
};

export default withModelToDataObjProp(TestimonialSection);
