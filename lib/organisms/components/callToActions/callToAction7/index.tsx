import React from 'react';
import Link from 'next/link';
import { Image, Text, Heading, Container } from '../../../../atoms';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { facebookSquare } from 'react-icons-kit/fa/facebookSquare';
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  DonationProgressbar,
  BarArea,
  CurrentStatus,
  ShareArea,
  DonateButton,
  ShareList,
  Item,
} from "./style";
import heartImage from "./heart.svg";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FundraiserSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FundraiserSection = ({ model, isAR, data }: FundraiserSectionProps) => {
  let fundraiserItems;
  if (model.children && model.children.length > 0) {
    fundraiserItems = model.children.map((fundraiserData) => {
      const fundraiserMap = convertDataModelToDataObject(
        fundraiserData
      ) as Record<string, string>;
      return fundraiserMap;
    });
  }
  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <SectionHeader>
          <Heading content={data.title} />
          <Text content={data.subtitle} />
        </SectionHeader>
        {fundraiserItems.map((item, index) => (
          <ContentArea key={'FundraiserSection' + index}>
            <ImageWrapper>
              <Image src={item.image} alt="Charity" />
            </ImageWrapper>
            <TextWrapper>
              <TextAndLink>
                <Heading as="h4" content={item.subject} />
                <Link href="#1" className="text_btn">
                  SEE ALL<i className="flaticon-next" />

                </Link>
              </TextAndLink>
              <Heading as="h3" content={item.title} />
              <Text content={item.subTitle} />
              <DonationProgressbar>
                <BarArea>
                  <CurrentStatus>
                    <strong>{item.fundraiserAchieved}</strong> of{' '}
                    {item.fundraiserGoal}
                  </CurrentStatus>
                  <Text content={item.LastDonationLabel} />
                </BarArea>
                <Heading
                  as="h5"
                  content={
                    item.RaisedByLabel +
                    ' ' +
                    item.RaisedByCount +
                    ' ' +
                    item.RaisedByPeriod
                  }
                />
              </DonationProgressbar>
              <ShareArea>
                <DonateButton href="#donate" offset={81}>
                  DONATE NOW{' '}
                  <Image src={heartImage.src} alt="Charity Landing" />
                </DonateButton>
                <ShareList>
                  <Item>Share on</Item>
                  <Item>
                    <Link
                      href={item.social_media_url}
                      target="_blank"
                      className="twitter"
                      aria-label="social share link">

                      <Icon icon={twitter} />

                    </Link>
                  </Item>
                  <Item>
                    <Link
                      href={item.social_media_2_url}
                      target="_blank"
                      className="facebook"
                      aria-label="social share link">

                      <Icon icon={facebookSquare} />

                    </Link>
                  </Item>
                </ShareList>
              </ShareArea>
            </TextWrapper>
          </ContentArea>
        ))}
      </Container>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(FundraiserSection);
