
import AppPaymentSection from '../../../lib/organisms/components/callToActions/callToAction3';
import PortfolioCallToAction from '../../../lib/organisms/components/callToActions/callToAction4';

const resolveComponents = () => {
  return {
    403384: {
      render: props => <PortfolioCallToAction {...props} />,
      name: 'Portfolio Call to Action',
      category: 'Call to action',
    },
    403416: {
      render: props => <AppPaymentSection {...props} />,
      name: 'App Payments',
      category: 'Payments',
  },
  };
};
export default resolveComponents;
