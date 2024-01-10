import { ReactElement } from 'react';
import navbarsResolver from './navbars';
import bannersResolver from './banners';
import horizontalSlidersResolver from './horizontalSliders';
import callToActionResolver from './callToActions';
import clientsResolver from './clients';
import contactResolver from './contact';
import footerResolver from './footer';
import tabsImageTextSlidersResolver from './tabsImageTextSliders';
import processResolver from './process';
import skillsResolver from './skills';
import testimonialsResolver from './testimonials';
import faqResolver from './faq';
import partnerResolver from './partner';
import trailResolver from './trail';
import timelineResolver from './timeline';
import imageTextResolver from './imageText';
import featuresListingResolver from './featuresListing';
import pricingResolver from './pricing';
import rideOptionResolver from './rideOption';
import locationResolver from './location';
import branchResolver from './branch';
import workDataReslover from './workData';
import MilestoneBlockResolver from './milestone';
import HumanityDataResolver from './humanityData';
import PromotionBlockResolver from './promotionData';
import donationSectionResolver from './donationData';
import mapSectionResolver from './mapData';
import fundraiserSectionResolver from './fundraiserData';
import blogSectionResolver from './blogsData';
import latestNewsResolver from './news';
import socialMediaResolver from './socialMedia';
import videoResolver from './video';
import listImageResolver from './listImage';
import teamResolver from './team';
import textAnalyticsResolver from './textAnalytics';
import imageListResolver from './imagesList';
import controlResolver from './control';
import tabbedImagesListResolver from './tabbedImagesList';
import newsletterResolver from './newsletter';
import forms from './forms';
export interface ComponentsPropsType {
  model: any;
  modelId: number;
  isAR?: boolean;
}

const ComponentsPool: {
  [key: number]: {
    render: (props: ComponentsPropsType) => ReactElement<any, any>;
    name?: string;
    category?: string;
  };
} = {
  ...navbarsResolver(),
  ...bannersResolver(),
  ...horizontalSlidersResolver(),
  ...callToActionResolver(),
  ...clientsResolver(),
  ...contactResolver(),
  ...footerResolver(),
  ...tabsImageTextSlidersResolver(),
  //...processResolver(),
  ...skillsResolver(),
  ...testimonialsResolver(),
  ...faqResolver(),
  ...partnerResolver(),
  ...trailResolver(),
  ...timelineResolver(),
  ...imageTextResolver(),
  ...featuresListingResolver(),
  ...pricingResolver(),
  ...socialMediaResolver(),
  ...videoResolver(),
  ...listImageResolver(),
  ...teamResolver(),
  ...textAnalyticsResolver(),
  ...imageListResolver(),
  ...rideOptionResolver(),
  ...locationResolver(),
  ...branchResolver(),
  ...workDataReslover(),
  ...MilestoneBlockResolver(),
  ...HumanityDataResolver(),
  ...PromotionBlockResolver(),
  ...donationSectionResolver(),
  ...mapSectionResolver(),
  ...fundraiserSectionResolver(),
  ...blogSectionResolver(),
  ...latestNewsResolver(),
  ...controlResolver(),
  ...tabbedImagesListResolver(),
  ...newsletterResolver(),
  ...forms(),
};

const ComponentResolver = (props: ComponentsPropsType) => {
  const targetComponent = ComponentsPool[props.modelId];
  return targetComponent ? targetComponent.render(props) : null;
};

export default ComponentResolver;
