import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import { Text, Heading, Image } from '../../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../../molecules';
import LeftBar from './leftBar';

import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { BannerDataType } from '../../../types/bannerTypes';

interface BannerSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: BannerDataType;
}
const BannerSection = ({ model, isAR, data }: BannerSectionProps) => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };
  return (
    <BannerWrapper id={model.name}>
      <LeftBar
        // @ts-ignore
        text={data.Scrolldown_Button_Text}
        // @ts-ignore
        offset={data.Scrolldown_Button_Offset}
        // @ts-ignore
        sectionId={data.Scrolldown_Button_SectionId}
      />
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>{data.title}</strong> {data.subTitle}
            <Icon icon={chevronRight} />
          </HighlightedText>
          <Heading content={data.heading} />
          <Heading as="h4" content={data.secHeading} />
          <Text content={data.description} />
          <Link href={data.ctaUrl} className="learn__more-btn">

            <span className="hyphen" />
            <span className="btn_text">{data.ctaLabel}</span>

          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <>
              {data.subdata.map((slideData, index) => {
                return (
                  // @ts-ignore
                  <GlideSlide key={slideData.id}>
                    <Image src={slideData.thumbUrl} alt="Charity Landing" />
                  </GlideSlide>
                );
              })}
            </>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default withModelToDataObjProp(BannerSection);
