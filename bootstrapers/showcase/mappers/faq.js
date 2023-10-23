import SaaSFaqSection from '../../../lib/organisms/components/faqs/faq2';
import AgencyFaqSection from '../../../lib/organisms/components/faqs/faq1';

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
