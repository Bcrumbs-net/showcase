import SaaS2FaqSection from "../../../lib/organisms/components/faqs/faq2";
import SaaSModernFaqSection from "../../../lib/organisms/components/faqs/faq3";
import AgencyFaqSection from "../../../lib/organisms/components/faqs/faq1";

const resolveComponents = () => {
  return {
    403425: {
      render: (props) => <SaaS2FaqSection {...props} />,
      name: "SaaS FAQs",
      category: "FAQs",
    },
    403188: {
      render: (props) => <AgencyFaqSection {...props} />,
      name: "Agency FAQs",
      category: "FAQs",
    },
    403216: {
      render: (props) => <SaaSModernFaqSection {...props} />,
      name: "SaaS FAQs",
      category: "FAQs",
    },
  };
};
export default resolveComponents;
