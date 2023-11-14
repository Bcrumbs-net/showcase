import { Box, Container } from "../../../../atoms";
import ImageGallery from "react-image-gallery";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";
import SliderDes from "./description";

interface TestimonialSectionProps {
  sectionWrapper: object;
  title: object;
  row: object;
  sectionSubTitle: object;
  model: GraphContent;
  data: Record<string, string>;
}

const TestimonialSection = ({
  sectionWrapper,
  row,
  sectionSubTitle,
  model,
  data,
}: TestimonialSectionProps) => {
  let testimonialLst = [];
  if (model.children && model.children.length > 0) {
    testimonialLst = model.children.map((testimonialData, index) => {
      const testimonialMap: Record<string, string> =
        testimonialData.data.reduce(function (map, obj) {
          map[obj.Key] = obj.Value;
          return map;
        }, {});

      return {
        thumbnail: `${testimonialMap.thumbnail}`,
        thumbnailAlt: testimonialMap.thumbnailAlt,
        description: (
          <SliderDes
            data={{
              description: testimonialMap.description,
              designation: testimonialMap.designation,
              name: testimonialMap.name,
              id: testimonialMap._id,
            }}
          />
        ),
      };
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
