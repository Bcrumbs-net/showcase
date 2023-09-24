import SaaSPricingSection from '../../../lib/organisms/components/pricings/pricing1';
import PaymentSection from '../../../lib/containers/App/PaymentSection';
import SaaSClasicPricingSection from "../../../lib/containers/SaasClassic/Pricing";

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
