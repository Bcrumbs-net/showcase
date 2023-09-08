import SaaSFeatureSection from '../../../lib/containers/Saas/FeatureSection';
import SaaSServiceSection from '../../../lib/containers/Saas/ServiceSection';
import AgencyFeatureSection from '../../../lib/organisms/components/featuresLists/featureList3';
import RideFeatureSection from '../../../lib/containers/Ride/Feature';
import FeatureSlider from '../../../lib/containers/Ride/FeatureSlider';
import CharityFeatureSection from '../../../lib/containers/Charity/FeatureSection';
import AppFeature from '../../../lib/containers/App/FeatureSection';
import AppFeatureSlider from '../../../lib/containers/App/FeatureSlider';
import AppFeatureSliderTwo from '../../../lib/containers/App/FeatureSliderTwo';
import CryptoTransactionFeatures from '../../../lib/containers/Crypto/Transaction';
import CryptoBetaFeatures from '../../../lib/containers/Crypto/BetaSection';
import SaaSClassicServiceSection from "../../../lib/containers/SaasClassic/Service";
import SaasClassicFeatureSection from "../../../lib/containers/SaasClassic/Feature";
//import FeatureSection from '../../../lib/containers/Saas/FeatureSection';
import CryptoTransactions from "../../../lib/containers/Crypto/Transaction";

const resolveComponents = () => {
  return {
    403431: {
      render: props => <SaaSFeatureSection {...props} />,
      name: 'SaaS Features listing',
      category: 'Features listing',
    },
    403427: {
      render: props => <SaaSServiceSection {...props} />,
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