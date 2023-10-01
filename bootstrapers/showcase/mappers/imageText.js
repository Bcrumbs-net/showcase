import SaaSVisitorSection from '../../../lib/containers/Saas/VisitorSection';
import AgencyAboutUsSection from '../../../lib/organisms/components/featuresLists/featureList2';
import FoodAboutUsSection from '../../../lib/organisms/components/featuresLists/featureList6';
import SaaSClassicPartnerSection from "../../../lib/containers/SaasClassic/Partner";
import CryptoControlSections from "../../../lib/containers/Crypto/ControlSection";
import CryptoScalableSections from "../../../lib/containers/Crypto/ScalableSection";
import CryptoTrustedProofSections from "../../../lib/containers/Crypto/TrustedProof";

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
