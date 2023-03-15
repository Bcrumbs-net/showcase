import ClientsSection from '../containers/Portfolio/Clients';
import ClientBlock from '../containers/Charity/ClientBlock';

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
