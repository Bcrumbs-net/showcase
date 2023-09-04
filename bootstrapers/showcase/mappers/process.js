import ProcessSection from '../../../lib/containers/Portfolio/Process';
import HowItWorksSection from '../../../lib/containers/Ride/HowItWorks';

const resolveComponents = () => {
  return {
    403295: {
      render: props => <ProcessSection {...props} />,
      name: 'Portfolio Process',
      category: 'Process',
    },
    403397: {
      render: props => <HowItWorksSection {...props} />,
      name: 'How it Works',
      category: 'Process',
    },
  };
};
export default resolveComponents;
