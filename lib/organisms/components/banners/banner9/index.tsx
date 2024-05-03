import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import { BannerWrapper, DiscountWrapper, DiscountLabel } from './style';
import BannerImage from './banner-image.png';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import TiltShape from './tiltShape';
import { GraphContent } from '@bcrumbs.net/bc-api';
import { BannerDataType } from '../../../types/bannerTypes';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

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
  isAR,
  data
}: BannerSectionProps) => {
  return (
    <BannerWrapper id={model.name}>
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content={data.discount} />
                <Text
                  {...discountText}
                  content={data.discountLabel}
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content={data.title}
            />
            <Text
              {...description}
              content={data.description}
            />
            <Box {...buttonWrapper}>
              <Link href={data.ctaUrl}>
                <a>
                  <Button {...fillButton} title={data.ctaLabel} />
                </a>
              </Link>
              <Link href={data.secCtaBtnUrl}>
                <a>
                  <Button
                    {...button}
                    title={data.secCtaLabel}
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                  />
                </a>
              </Link>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <Image src={BannerImage.src} alt="banner image" />
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
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
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

export default withModelToDataObjProp(BannerSection);
