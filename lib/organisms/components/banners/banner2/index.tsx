import Link from "next/link";
import ParticlesComponent from "../banner2/particles";
// import { email } from 'react-icons-kit/ionicons/email';
import { Icon } from "react-icons-kit";
import { ic_arrow_forward } from "react-icons-kit/md/ic_arrow_forward";
import {
  DiscountWrapper,
  DiscountLabel,
  ButtonWrapper,
  EmailInputWrapper,
  BannerSquareShape,
  BannerCircleShape,
} from "./style";
import {
  Box,
  Container,
  Heading,
  Input,
  Button,
  Text,
  Image,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";
import { BannerDataType } from "../../../types/bannerTypes";

interface DomainSectionProps {
  row: object;
  s;
  col: object;
  title?: object;
  btnStyle?: object;
  description?: object;
  contentStyle?: object;
  button?: object;
  image?: object;
  imageArea?: object;
  btnStyleTwo?: object;
  discountText?: object;
  discountAmount?: object;
  SectionWrapper?: object;
  model: GraphContent;
  data: BannerDataType;
}
const DomainSection = ({
  SectionWrapper,
  row,
  col,
  title,
  description,
  button,
  image,
  imageArea,
  btnStyle,
  btnStyleTwo,
  discountAmount,
  discountText,
  model,
  data,
}: DomainSectionProps) => {
  return (
    <Box {...SectionWrapper}>
       {data.floatingParticles == true ? (
          <ParticlesComponent />
        ) : (
          null
        )}
      <BannerSquareShape />
      <BannerCircleShape />
      <Container>
        <Box {...row}>
          <Box {...col}>
            <Box>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text
                    {...discountAmount}
                    content={data.discount}
                    //@ts-ignore
                    className="discountAmount"
                  />
                  <Text {...discountText} content={data.discountLabel} />
                </DiscountLabel>
              </DiscountWrapper>
            </Box>
            <FeatureBlock
              title={
                <Heading
                  {...title}
                  content={data.title}
                  //@ts-ignore
                  className="title"
                />
              }
              description={
                <Text
                  {...description}
                  content={data.subTitle}
                  //@ts-ignore
                  className="description"
                />
              }
            />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
            </EmailInputWrapper>
            <ButtonWrapper>
              <Link href="#services">

                <Button {...button} {...btnStyle} />

              </Link>
              <Link href="#">

                <Button
                  {...button}
                  {...btnStyleTwo}
                  icon={<Icon icon={ic_arrow_forward} />}
                  className="withoutBg"
                />

              </Link>
            </ButtonWrapper>
          </Box>
          <Box {...col} {...imageArea}>
            <Image src={data.image} alt="Domain Image" {...image} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DomainSection.defaultProps = {
  SectionWrapper: {
    as: "section",
    pt: "120px",
    pb: "80px",
    overflow: "hidden",
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  imageAreaRow: {
    flexDirection: "row-reverse",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "50%", "44%", "44%"],
    mt: "-80px",
  },
  imageArea: {
    width: ["0%", "0%", "43%", "35%", "40%"],
    ml: "auto",
  },
  title: {
    content: "Essential Mobile  App Landing for  Workspaces",
    fontSize: ["60px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.01px",
    mb: "20px",
  },
  description: {
    content:
      "A mobile app landing page is important and  essential for right amount of information about your product. Start increasing your user base upon the launch of your product.",
    fontSize: "16px",
    color: "#343d48",
    lineHeight: "33px",
    mb: "10px",
  },
  button: {
    title: "EXPLORE MORE",
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    borderRadius: "4px",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
  },
  image: {
    ml: "auto",
    mt: "70px",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  btnStyleTwo: {
    title: "WATCH DEMOS",
    type: "button",
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    ml: "15px",
    bg: "#fff",
    color: "rgb(26, 115, 232)",
  },
  textArea: {
    width: ["100%", "100%", "50%", "55%", "55%"],
  },
  discountAmount: {
    content: "update",
    fontSize: "14px",
    fontWeight: "600",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
    bg: "rgb(26, 115, 232)",
  },
  discountText: {
    content: "Version 2.5.0 has just released .",
    fontSize: "13px",
    fontWeight: "400",
    color: "#0f2137",
    mb: 0,
    as: "span",
    ml: "10px",
  },
};
export default withModelToDataObjProp(DomainSection);
