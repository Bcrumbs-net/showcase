import SaaS2VisitorSection from '../../../lib/organisms/components/visitors/visitor1';
import AgencyAboutUsSection from '../../../lib/organisms/components/featuresLists/featureList2';
import FoodAboutUsSection from '../../../lib/containers/Food/AboutUsSection';
import SaaSClassicPartnerSection from "../../../lib/organisms/components/partnerHistory/partnerHistory3";
import CryptoControlSections from "../../../lib/organisms/components/callToActions/callToAction5";
import CryptoScalableSections from "../../../lib/organisms/components/featuresLists/featureList9";
import CryptoTrustedProofSections from "../../../lib/organisms/components/trustedProofs/trustedProof1";

const resolveComponents = () => {
  return {
    403430: {
      render: props => <SaaS2VisitorSection {...props} />,
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
