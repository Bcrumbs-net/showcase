import PartnerHistory from '../../../lib/organisms/components/partnerHistory/partnerHistory1';
import SaaS2PartnerSection from '../../../lib/organisms/components/partnerHistory/partnerHistory2';

const resolveComponents = () => {
  return {
    403439: {
      render: props => <SaaS2PartnerSection {...props} />,
      name: 'SaaS Partners',
      category: 'Partners',
    },
    403414: {
      render: props => <PartnerHistory {...props} />,
      name: 'Partner History',
      category: 'Partners',
    },
  };
};
export default resolveComponents;
