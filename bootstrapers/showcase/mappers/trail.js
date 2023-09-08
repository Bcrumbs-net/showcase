import SaaSTrialSection from '../../../lib/containers/Saas/TrialSection';
import SaaSClassicTrialSection from "../../../lib/containers/SaasClassic/Trial";

const resolveComponents = () => {
  return {
    403442: {
      render: props => <SaaSTrialSection {...props} />,
      name: 'SaaS Trail',
      category: 'Trail',
    },
    403380: {
      render: props => <SaaSClassicTrialSection {...props} />,
      name: 'SaaS ClassicT Trail',
      category: 'Trail',
    }
  };
};
export default resolveComponents;