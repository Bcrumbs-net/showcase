import SaaSPricingSection from '../containers/Saas/PricingSection';
import PaymentSection from '../containers/App/PaymentSection';
import SaaSClasicPricingSection from "../containers/SaasClassic/Pricing";

const resolveComponents = () => {
  return {
    403433: {
      render: props => <SaaSPricingSection {...props} />,
      name: 'SaaS Pricing',
      category: 'Pricing',
    },
    403416: {
      render: props => <PaymentSection {...props} />,
      name: 'Payment Section',
      category: 'Payment',
    },
    403378: {
      render: props => <SaaSClasicPricingSection {...props} />,
      name: 'SaaS classic Payment Section',
      category: 'Payment',
    }
  };
};
export default resolveComponents;
