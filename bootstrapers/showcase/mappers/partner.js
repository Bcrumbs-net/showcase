import SaaSPartnerSection from '../../../lib/containers/Saas/PartnerSection';
import PartnerHistory from '../../../lib/organisms/components/partnerHistory/partnerHistory1';

const resolveComponents = () => {
  return {
    403439: {
      render: props => <SaaSPartnerSection {...props} />,
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
