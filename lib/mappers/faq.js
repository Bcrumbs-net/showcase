import SaaSFaqSection from '../containers/Saas/FaqSection';
import AgencyFaqSection from '../containers/Agency/FaqSection';

const resolveComponents = () => {
  return {
    403425: {
      render: props => <SaaSFaqSection {...props} />,
      name: 'SaaS FAQs',
      category: 'FAQs',
    },
    403188: {
      render: props => <AgencyFaqSection {...props} />,
      name: 'Agency FAQs',
      category: 'FAQs',
    },
  };
};
export default resolveComponents;
