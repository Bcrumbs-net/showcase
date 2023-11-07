import PortfolioClientsSection from '../../../lib/organisms/components/clients/clinet1';
import ClientBlock from '../../../lib/containers/Charity/ClientBlock';

const resolveComponents = () => {
  return {
    403300: {
      render: props => <PortfolioClientsSection {...props} />,
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
