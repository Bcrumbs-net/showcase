import {
  Box,
  Container,
  Text,
  Heading,
  Button,
  Image,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { Icon } from "react-icons-kit";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import BannerBG from "./white_bg1.svg";
import BannerWrapper, { BgImageWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { BannerDataType } from "../../../types/bannerTypes";

interface BannerSectionProps {
  row: object;
  col: object;
  title: object;
  btnStyle: object;
  description: object;
  discountText: object;
  discountAmount: object;
  outlineBtnStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: BannerDataType;
}
const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
  model,
  isAR,
  data,
}: BannerSectionProps) => {
  const ButtonGroup = () => (
    <>
      <Button title={data.ctaLabel} {...btnStyle} />
      <Button
        title={data.secCtaLabel}
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      />
    </>
  );
  const ShareButtonGroup = () => (
    <>
      <Button
        title={data.twitterLabel}
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={socialTwitter} />}
        {...outlineBtnStyle}
        className="btnWithoutColor"
      />
      <Button
        title={data.fbLabel}
        variant="textButton"
        iconPosition="left"
        icon={<Icon icon={facebook2} />}
        {...outlineBtnStyle}
        className="btnWithoutColor"
      />
    </>
  );
  return (
    <BannerWrapper
      id={model.name}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <BgImageWrapper>
        <Image src={BannerBG.src} alt="banner background" />
      </BgImageWrapper>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.description} {...description} />}
              button={<ButtonGroup />}
            />
            <FeatureBlock button={<ShareButtonGroup />} />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "100%", "100%", "60%", "65%"],
  },
  title: {
    fontSize: ["26px", "34px", "42px", "42px", "47px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31",
  },
  description: {
    fontSize: ["14px", "16px", "18px", "18px", "20px"],
    color: "#fff",
    lineHeight: "30px",
    mb: "0",
    maxWidth: "550px",
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "15px",
    fontWeight: "700",
    borderRadius: "6px",
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    p: "5px 10px",
  },
};

export default withModelToDataObjProp(BannerSection);
