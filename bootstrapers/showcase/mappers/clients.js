import ClientsSection from '../../../lib/organisms/components/clients/client1';
import ClientBlock from '../../../lib/organisms/components/sliders/slider5';

const resolveComponents = () => {
  return {
    403300: {
      render: props => <ClientsSection {...props} />,
      name: 'Portfolio Clients',
      category: 'Clients',
    },
    403134: {
      render: props => <ClientBlock {...props} />,
      name: 'Portfolio Clients',
      category: 'Clients',
    },
  };
};
export default resolveComponents;
