import React from "react";
import Link from "next/link";
import Icon from "react-icons-kit";
import Fade from "react-reveal/Fade";
// import { openModal, closeModal } from '@redq/reuse-modal';
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  Button,
} from "../../../../atoms";
import TiltShape from "./tiltShape";
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper,
} from "./style";
import { ic_play_circle_filled } from "react-icons-kit/md/ic_play_circle_filled";
import { play } from "react-icons-kit/entypo/play";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { BannerDataType } from "../../../types/bannerTypes";

// close button for modal
const CloseModalButton = () =>
  null;
// <Button
//   className="modalCloseBtn"
//   variant="fab"
//   onClick={() => closeModal()}
//   icon={<i className="flaticon-plus-symbol" />}
// />
interface BannerSectionProps {
  row: object;
  contentWrapper: object;
  discountAmount: object;
  discountText: object;
  title: object;
  description: object;
  imageWrapper: object;
  buttonWrapper: object;
  button: object;
  fillButton: object;
  model: GraphContent;
  isAR: boolean;
  data: BannerDataType;
}
const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
  model,
  data,
  isAR,
}: BannerSectionProps) => {
  // modal handler
  const ModalContent = () => (
    <VideoWrapper>
      <iframe
        width="560"
        height="315"
        src={data.videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={false}
      />
    </VideoWrapper>
  );
  const handleVideoModal = () => {
    // openModal({
    //   config: {
    //     className: 'video-modal',
    //     disableDragging: true,
    //     default: {
    //       width: '100%',
    //       height: '100%',
    //     },
    //   },
    //   component: ModalContent,
    //   componentProps: {},
    //   closeComponent: CloseModalButton,
    //   closeOnClickOutside: true,
    // });
  };
  return (
    <BannerWrapper id={model.name}>
      <TiltShape className={"banner-shape"} />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content={data.subTitle} />
                <Text {...discountText} content="" />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading {...title} content={data.title} />
            <Text {...description} content={data.description} />
            <Box {...buttonWrapper}>
              <Link href="#">

                <Button
                  {...fillButton}
                  title={data.ctaLabel}
                  onClick={() => {
                    if(data.ctaUrl) window.location.href = data.ctaUrl;
                  }}
                />

              </Link>
              <Link href="#">

                <Button
                  {...button}
                  title={data.secCtaLabel}
                  icon={<Icon icon={ic_play_circle_filled} size={30} />}
                  iconPosition="left"
                  onClick={() => {
                    if(data.secCtaBtnUrl) window.location.href = data.secCtaBtnUrl;
                  }}
                />

              </Link>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <Image src={data.image} alt="banner image" />
                <PlayButton
                  // @ts-ignore
                  tabIndex="1000" onClick={handleVideoModal}>
                  <Icon icon={play} size={40} />
                </PlayButton>
              </VideoModal>
            </Fade>
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
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: ["100%", "100%", "80%", "55%", "50%"],
    mb: "40px",
  },
  title: {
    fontSize: ["24px", "32px", "40px", "42px", "50px"],
    fontWeight: "700",
    color: "#fff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.2",
    textAlign: "center",
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#fff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center",
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "700",
    color: "#fff",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#fff",
    mb: 0,
    as: "span",
  },
  fillButton: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    colors: "secondaryWithBg",
    minWidth: ["auto", "150px"],
    height: ["40px", "46px"],
    minHeight: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "35px",
  },
  button: {
    type: "button",
    fontSize: ["13px", "14px"],
    fontWeight: "600",
    borderRadius: "4px",
    p: ["0px 15px", "8px 22px"],
    color: "#fff",
    colors: "secondary",
    height: ["40px", "46px"],
    minHeight: "auto",
  },
};

export default withModelToDataObjProp(BannerSection);
