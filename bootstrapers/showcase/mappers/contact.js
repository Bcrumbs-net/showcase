import PortfolioContactSection from '../../../lib/containers/Portfolio/Contact';
import FoodContactSection from '../../../lib/containers/Food/ContactUsSection';
import TakeActionSection from '../../../lib/organisms/components/callToActions/callToAction1';

const resolveComponents = () => {
  return {
    403377: {
      render: props => <PortfolioContactSection {...props} />,
      name: 'Portfolio Contact',
      category: 'Contact',
    },
    403468: {
      render: props => <FoodContactSection {...props} />,
      name: 'Food Contact',
      category: 'Contact',
    },
    403484: {
      render: props => <TakeActionSection {...props} />,
      name: 'Agency Contact',
      category: 'Contact',
    },
  };
};
export default resolveComponents;
