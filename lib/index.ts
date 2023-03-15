import { ReactElement } from 'react';
import navbarsResolver from './mappers/navbars';
import bannersResolver from './mappers/banners';
import horizontalSlidersResolver from './mappers/horizontalSliders';
import callToActionResolver from './mappers/callToActions';
import clientsResolver from './mappers/clients';
import contactResolver from './mappers/contact';
import footerResolver from './mappers/footer';
import tabsImageTextSlidersResolver from './mappers/tabsImageTextSliders';
//import processResolver from './mappers/process';
import skillsResolver from './mappers/skills';
import testimonialsResolver from './mappers/testimonials';
import faqResolver from './mappers/faq';
import partnerResolver from './mappers/partner';
import trailResolver from './mappers/trail';
import timelineResolver from './mappers/timeline';
import imageTextResolver from './mappers/imageText';
import featuresListingResolver from './mappers/featuresListing';
import pricingResolver from './mappers/pricing';
import rideOptionResolver from './mappers/rideOption';
import locationResolver from './mappers/location';
import branchResolver from './mappers/branch';
import workDataReslover from './mappers/workData';
import MilestoneBlockResolver from './mappers/milestone';
import HumanityDataResolver from './mappers/humanityData';
import PromotionBlockResolver from './mappers/promotionData';
import donationSectionResolver from './mappers/donationData';
import mapSectionResolver from './mappers/mapData';
import fundraiserSectionResolver from './mappers/fundraiserData';
import blogSectionResolver from './mappers/blogsData';
import latestNewsResolver from './mappers/news';
import socialMediaResolver from './mappers/socialMedia';
import videoResolver from './mappers/video';
import listImageResolver from './mappers/listImage';
import teamResolver from './mappers/team';
import textAnalyticsResolver from './mappers/textAnalytics';
import imageListResolver from './mappers/imagesList';
import controlResolver from './mappers/control';
import tabbedImagesListResolver from './mappers/tabbedImagesList';
import newsletterResolver from './mappers/newsletter';

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
};

const ComponentResolver = (props: ComponentsPropsType) => {
  const targetComponent = ComponentsPool[props.modelId];
  return targetComponent ? targetComponent.render(props) : null;
};

export * from './templates/agency';
export default ComponentResolver;
