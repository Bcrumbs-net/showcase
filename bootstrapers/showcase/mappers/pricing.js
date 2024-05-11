import SaaS2PricingSection from "../../../lib/organisms/components/pricings/pricing1";
import SaaSClasicPricingSection from "../../../lib/organisms/components/pricings/pricing2";
import SaaSModernPricingSection from "../../../lib/organisms/components/pricings/pricing3";

const resolveComponents = () => {
  return {
    403433: {
      render: (props) => <SaaS2PricingSection {...props} />,
      name: "SaaS Pricing",
      category: "Pricing",
    },
    403378: {
      render: (props) => <SaaSClasicPricingSection {...props} />,
      name: "SaaS classic Payment Section",
      category: "Payment",
    },
    403569: {
      render: (props) => <SaaSModernPricingSection {...props} />,
      name: "SaaS Modern Payment Section",
      category: "Payment",
    },
  };
};
export default resolveComponents;
