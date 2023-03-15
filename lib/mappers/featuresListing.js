import SaaSFeatureSection from '../containers/Saas/FeatureSection';
import SaaSServiceSection from '../containers/Saas/ServiceSection';
import AgencyFeatureSection from '../containers/Agency/FeatureSection';
import RideFeatureSection from '../containers/Ride/Feature';
import FeatureSlider from '../containers/Ride/FeatureSlider';
import CharityFeatureSection from '../containers/Charity/FeatureSection';
import AppFeature from '../containers/App/FeatureSection';
import AppFeatureSlider from '../containers/App/FeatureSlider';
import AppFeatureSliderTwo from '../containers/App/FeatureSliderTwo';
import CryptoTransactionFeatures from '../containers/Crypto/Transaction';
import CryptoBetaFeatures from '../containers/Crypto/BetaSection';
import SaaSClassicServiceSection from "../containers/SaasClassic/Service";
import SaasClassicFeatureSection from "../containers/SaasClassic/Feature";
//import FeatureSection from '../containers/Saas/FeatureSection';
import CryptoTransactions from "../containers/Crypto/Transaction";

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
