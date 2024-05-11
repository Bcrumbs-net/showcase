import AppPartnerHistory from "../../../lib/organisms/components/partnerHistory/partnerHistory1";
import SaaS2PartnerSection from "../../../lib/organisms/components/partnerHistory/partnerHistory2";
import SaasModernPartnerHistory from "../../../lib/organisms/components/partnerHistory/partnerHistory4";

const resolveComponents = () => {
  return {
    403439: {
      render: (props) => <SaaS2PartnerSection {...props} />,
      name: "SaaS Partners",
      category: "Partners",
    },
    403414: {
      render: (props) => <AppPartnerHistory {...props} />,
      name: "Partner History",
      category: "Partners",
    },
    403566: {
      render: (props) => <SaasModernPartnerHistory {...props} />,
      name: "Partner History",
      category: "Partners",
    },
  };
};
export default resolveComponents;
