import Link from "next/link";
import {
  Text,
  Heading,
  Box,
  Input,
  Button,
  Container,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import ContactFromWrapper, { SectionMainWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface ContactSectionProps {
  sectionWrapper: object;
  row: object;
  contactForm: object;
  secTitleWrapper: object;
  button: object;
  note: object;
  title: object;
  description: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  button,
  note,
  title,
  description,
  model,
  isAR,
  data,
}: ContactSectionProps) => {
  return (
    <SectionMainWrapper>
      <Box {...sectionWrapper}>
        <Container className="containerClass">
          <Box {...secTitleWrapper}>
            <FeatureBlock
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.header} {...description} />}
            />
          </Box>
          <Box {...row}>
            <Box {...contactForm}>
              <ContactFromWrapper>
                <Input
                  inputType="email"
                  placeholder="Enter Your Email address"
                  iconPosition="right"
                  isMaterial={false}
                  className="email_input"
                  aria-label="email"
                />
                <Button {...button} title={data.button_label} />
              </ContactFromWrapper>
              <Box className="contactdes">
                <Text as="span" {...note} content={data.promotion_text} />
                <Link href="#">
                  <a className="">{data.promotion_label} </a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </SectionMainWrapper>
  );
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: "contact_section",
    as: "section",
    pt: ["8px", "80px", "80px", "80px"],
    pb: ["0", "80px", "80px", "80px", "80px"],
  },
  secTitleWrapper: {
    mb: ["40px", "40px", "40px"],
    p: ["0 15px", 0, 0, 0, 0],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: `${2}`,
    letterSpacing: "0.15em",
    fontWeight: `${6}`,
    color: "primary",
    mb: `${3}`,
  },
  secHeading: {
    textAlign: "center",
    fontSize: [`${6}`, `${8}`],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: "center",
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: "button",
    fontSize: `${2}`,
    fontWeight: "600",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
    height: `${4}`,
  },
  note: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"],
  },
  colornote: {
    fontSize: "16px",
    fontWeight: "500",
    color: "rgb(106, 82, 253)",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"],
  },
  title: {
    content: "Get The Latest PayBear Updates",
    fontSize: ["20px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    textAlign: ["center", "center"],
  },

  description: {
    content: "And be the first to know when our crowdsale launches!.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"],
  },
};

export default withModelToDataObjProp(ContactSection);
