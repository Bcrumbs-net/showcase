import CharityClientsSection from '../../../lib/organisms/components/clients/client1';
import CharityClientBlock from '../../../lib/organisms/components/sliders/slider5';

const resolveComponents = () => {
  return {
    403300: {
      render: props => <CharityClientsSection {...props} />,
      name: 'Portfolio Clients',
      category: 'Clients',
    },
    403134: {
      render: props => <CharityClientBlock {...props} />,
      name: 'Portfolio Clients',
      category: 'Clients',
    },
  };
};
export default resolveComponents;
