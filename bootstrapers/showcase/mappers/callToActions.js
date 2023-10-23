import CallToAction from '../../../lib/containers/Portfolio/CallToAction';
import AppPaymentSection from '../../../lib/organisms/components/callToActions/callToAction3';

const resolveComponents = () => {
  return {
    403384: {
      render: props => <CallToAction {...props} />,
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
