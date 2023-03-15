import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
// import { openModal, closeModal } from '@redq/reuse-modal';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';
import TiltShape from '../TiltShape';
import {
  BannerWrapper,
  DiscountWrapper,
  DiscountLabel,
  VideoModal,
  PlayButton,
  VideoWrapper,
} from './banner.style';
//import BannerImage from '../../../assets/image/saasClassic/banner-image.jpg';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import { play } from 'react-icons-kit/entypo/play';

// close button for modal
const CloseModalButton = () => (null
  // <Button
  //   className="modalCloseBtn"
  //   variant="fab"
  //   onClick={() => closeModal()}
  //   icon={<i className="flaticon-plus-symbol" />}
  // />
);

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
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  // modal handler
  const ModalContent = () => (
    <VideoWrapper>
      <iframe
        width="560"
        height="315"
        src={data.video_url}
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
    <BannerWrapper id="banner_section">
      <TiltShape className="banner-shape" />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content={data.banner_subtitle} />
                <Text {...discountText} content="" />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading {...title} content={data['banner title']} />
            <Text {...description} content={data.banner_description} />
            <Box {...buttonWrapper}>
              <Link href="#">
                <a>
                  <Button
                    {...fillButton}
                    title={data.button_1_label}
                    onClick={() => {
                      window.location.href = data.button_1_url;
                    }}
                  />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Button
                    {...button}
                    title={data.video_button_label}
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                    onClick={() => {
                      window.location.href = data.video_button_url;
                    }}
                  />
                </a>
              </Link>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <VideoModal>
                <Image src={data.video_section_image} alt="banner image" />
                <PlayButton tabIndex="1000" onClick={handleVideoModal}>
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

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '400',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
