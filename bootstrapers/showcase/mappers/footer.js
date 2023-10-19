import PortfolioFooter from '../../../lib/containers/Portfolio/Footer';
import SaaS2Footer from '../../../lib/organisms/components/footers/footer3';
import RideFooter from '../../../lib/containers/Ride/Footer';
import CharityFooter from '../../../lib/containers/Charity/Footer';
import AgencyFooter from '../../../lib/organisms/components/footers/footer1';
import AppFooter from '../../../lib/containers/App/Footer';
import SaaSClaasicFooter from "../../../lib/organisms/components/footers/footer6";
import CryptoFooter from "../../../lib/organisms/components/footers/footer5";

const resolveComponents = () => {
  return {
    403304: {
      render: props => <PortfolioFooter {...props} />,
      name: 'Portfolio Footer',
      category: 'Footers',
    },
    403443: {
      render: props => <SaaS2Footer {...props} />,
      name: 'SaaS2 Footer',
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
