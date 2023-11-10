
import CharityClientBlock from '../../../lib/organisms/components/sliders/slider5';
import PortfolioClientsSection from '../../../lib/organisms/components/clients/clinet1';

const resolveComponents = () => {
  return {
    403300: {
      render: props => <PortfolioClientsSection {...props} />,
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
