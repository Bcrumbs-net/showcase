import SaaS2FeatureSection from '../../../lib/organisms/components/featuresLists/featureList5';
import SaaS2ServiceSection from '../../../lib/organisms/components/featuresLists/featureList14';
import AgencyFeatureSection from '../../../lib/organisms/components/featuresLists/featureList3';
import RideFeatureSection from '../../../lib/containers/Ride/Feature';
import FeatureSlider from '../../../lib/containers/Ride/FeatureSlider';
import CharityFeatureSection from '../../../lib/organisms/components/featuresLists/featureList16';
import AppFeature from '../../../lib/organisms/components/featuresLists/featureList4';
import AppFeatureSlider from '../../../lib/organisms/components/featureSliders/featureSlider1';
import AppFeatureSliderTwo from '../../../lib/organisms/components/featureSliders/featureSlider2';
import CryptoTransactionFeatures from '../../../lib/organisms/components/featuresLists/featureList11';
import CryptoBetaFeatures from '../../../lib/organisms/components/featuresLists/featureList10';
import SaaSClassicServiceSection from "../../../lib/organisms/components/featuresLists/featureList13";
import SaasClassicFeatureSection from "../../../lib/organisms/components/featuresLists/featureList12";
//import FeatureSection from '../../../lib/containers/Saas/FeatureSection';

const resolveComponents = () => {
  return {
    403431: {
      render: props => <SaaS2FeatureSection {...props} />,
      name: 'SaaS Features listing',
      category: 'Features listing',
    },
    403427: {
      render: props => <SaaS2ServiceSection {...props} />,
      name: 'SaaS Features listing 2',
      category: 'Features listing',
    },
    403176: {
      render: props => <AgencyFeatureSection {...props} />,
      name: 'Agency Features listing 2',
      category: 'Features listing',
    },
    403394: {
      render: props => <FeatureSlider {...props} />,
      name: 'Ride Features listing 2',
      category: 'Features listing',
    },
    403316: {
      render: props => <RideFeatureSection {...props} />,
      name: 'Ride Features listing',
      category: 'Features listing',
    },
    403115: {
      render: props => <CharityFeatureSection {...props} />,
      name: 'Charity Feature Listing',
      category: 'Feature Listing',
    },
    403195: {
      render: props => <AppFeature {...props} />,
      name: 'App Feature Section',
      category: 'Feature Listing',
    },
    403412: {
      render: props => <AppFeatureSlider {...props} />,
      name: 'App Feature Slider',
      category: 'Feature Listing',
    },
    403339: {
      render: props => <SaaSClassicServiceSection {...props} />,
      name: 'SaaS classic Services List',
      category: 'Feature Listing',
    },
    403352: {
      render: props => <SaasClassicFeatureSection {...props} />,
      name: 'SaaS classic Feature List',
      category: 'Feature Listing',
    },
    403360: {
      render: props => <CryptoTransactionFeatures {...props} />,
      name: 'Crypto Features Listing',
      category: 'Crypto Features',
    },
    403366: {
      render: props => <CryptoBetaFeatures {...props} />,
      name: 'Crypto Beta  Section',
      category: 'Crypto Eta Features',
    },
  };
};
export default resolveComponents;
