import SaaS2TrialSection from "../../../lib/organisms/components/trials/trial1";
import SaaSClassicTrialSection from "../../../lib/organisms/components/trials/trial2";
import SaaSModernTrialSection from "../../../lib/organisms/components/trials/trial3";

const resolveComponents = () => {
  return {
    403442: {
      render: (props) => <SaaS2TrialSection {...props} />,
      name: "SaaS Trail",
      category: "Trail",
    },
    403380: {
      render: (props) => <SaaSClassicTrialSection {...props} />,
      name: "SaaS Classic Trail",
      category: "Trail",
    },
    403573: {
      render: (props) => <SaaSModernTrialSection {...props} />,
      name: "SaaS Classic Trail",
      category: "Trail",
    },
  };
};
export default resolveComponents;
