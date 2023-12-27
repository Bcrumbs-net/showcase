import React, { Fragment } from "react";
import styled from "styled-components";
import BannerWrapper, { DiscountLabel, BannerObject } from "./style";
import {
  Button,
  Container,
  Box,
  Heading,
  Text,
  Image,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import ParticlesComponent from "./particles";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface BannerSectionProps {
  row: object;
  col: object;
  title?: object;
  btnStyle?: object;
  description?: object;
  discountText?: object;
  discountAmount?: object;
  outlineBtnStyle?: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
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
      {data.pri_button_label && data.pri_button_url ? (
        <Button
          title={data.pri_button_label}
          {...btnStyle}
          onClick={() => {
            window.location.href = data.pri_button_url;
          }}
        />
      ) : null}
      {data.sec_button_label && data.sec_button_url ? (
        <Button
          className="outlined"
          title={data.sec_button_label}
          variant="outlined"
          onClick={() => {
            window.location.href = data.sec_button_url;
          }}
          {...outlineBtnStyle}
        />
      ) : null}
    </>
  );

  let CustomBannerWrapper;
  if (data.backgroundColor) {
    CustomBannerWrapper = styled(BannerWrapper)`
      background-color: ${data.backgroundColor};
    `;
  } else {
    CustomBannerWrapper = BannerWrapper;
  }

  return (
    <CustomBannerWrapper id={model.name}>
      <ParticlesComponent />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content={data.discount_label} {...discountAmount} />
              <Text content={data.discount_second_text} {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.description} {...description} />}
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <Image src={data.back_image} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <Image src={data.front_image} alt="BannerObject2" />
          </div>
        </div>
      </BannerObject>
    </CustomBannerWrapper>
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
    width: [1, "70%", "50%", "45%"],
  },
  title: {
    fontSize: ["22px", "34px", "30px", "55px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.5",
  },
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "0",
  },
  btnStyle: {
    minWidth: ["120px", "120px", "120px", "156px"],
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "primaryWithBg",
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#5167db",
    ml: "18px",
  },
  discountAmount: {
    fontSize: "14px",
    color: "#eb4d4b",
    mb: 0,
    as: "span",
    mr: "0.4em",
    fontWeight: 700,
  },
  discountText: {
    fontSize: ["13px", "14px"],
    color: "#0f2137",
    mb: 0,
    as: "span",
    fontWeight: 500,
  },
};

export default withModelToDataObjProp(BannerSection);
