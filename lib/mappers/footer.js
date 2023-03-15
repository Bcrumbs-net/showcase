import PortfolioFooter from '../containers/Portfolio/Footer';
import SaaSFooter from '../containers/Saas/Footer';
import RideFooter from '../containers/Ride/Footer';
import CharityFooter from '../containers/Charity/Footer';
import AgencyFooter from '../containers/Agency/Footer';
import AppFooter from '../containers/App/Footer';
import SaaSClaasicFooter from "../containers/SaasClassic/Footer";
import CryptoFooter from "../containers/Crypto/Footer";

const resolveComponents = () => {
  return {
    403304: {
      render: props => <PortfolioFooter {...props} />,
      name: 'Portfolio Footer',
      category: 'Footers',
    },
    403443: {
      render: props => <SaaSFooter {...props} />,
      name: 'SaaS Footer',
      category: 'Footers',
    },
    403274: {
      render: props => <AgencyFooter {...props} />,
      name: 'Agency Footer',
      category: 'Footers',
    },
    403450: {
      render: props => <RideFooter {...props} />,
      name: 'Rider Footer',
      category: 'Footers',
    },
    403136: {
      render: props => <CharityFooter {...props} />,
      name: 'Charity Footer',
      category: 'Footers',
    },
    403417: {
      render: props => <AppFooter {...props} />,
      name: 'App Footer',
      category: 'Footers',
    },
    403348: {
      render: props => <SaaSClaasicFooter {...props} />,
      name: 'SaaS Classic Footer',
      category: 'Footers',
    },
    403167: {
      render: props => <CryptoFooter {...props} />,
      name: 'Crypto Footer',
      category: 'Footers',
    }
  };
};
export default resolveComponents;
