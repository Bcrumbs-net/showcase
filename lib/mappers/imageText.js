import SaaSVisitorSection from '../containers/Saas/VisitorSection';
import AgencyAboutUsSection from '../containers/Agency/AboutUsSection';
import FoodAboutUsSection from '../containers/Food/AboutUsSection';
import SaaSClassicPartnerSection from "../containers/SaasClassic/Partner";
import CryptoControlSections from "../containers/Crypto/ControlSection";
import CryptoScalableSections from "../containers/Crypto/ScalableSection";
import CryptoTrustedProofSections from "../containers/Crypto/TrustedProof";

const resolveComponents = () => {
  return {
    403430: {
      render: props => <SaaSVisitorSection {...props} />,
      name: 'SaaS ImageText',
      category: 'ImageText',
    },
    403174: {
      render: props => <AgencyAboutUsSection {...props} />,
      name: 'Agency ImageText',
      category: 'ImageText',
    },
    403462: {
      render: props => <FoodAboutUsSection {...props} />,
      name: 'Food ImageText',
      category: 'ImageText',
    },
    403382: {
      render: props => <SaaSClassicPartnerSection {...props} />,
      name: 'SaaS classic ImageText',
      category: 'ImageText',
    },
    403370: {
      render: props => <CryptoControlSections {...props} />,
      name: 'Crypto ImageText',
      category: 'ImageText',
    },
    403364: {
      render: props => <CryptoScalableSections {...props} />,
      name: 'Crypto ImageText',
      category: 'ImageText',
    },
    403362: {
      render: props => <CryptoTrustedProofSections {...props} />,
      name: 'Crypto Hz Slider',
      category: 'Hz Slider',
    },
  };
};
export default resolveComponents;
