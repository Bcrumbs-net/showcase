import PortfolioBannerSection from '../containers/Portfolio/Banner';
import SaaSBannerSection from '../containers/Saas/BannerSection';
import RideBannerSecion from '../containers/Ride/Banner';
import CharityBannerSection from '../containers/Charity/BannerSection';
import AgencyBannerSection from '../containers/Agency/BannerSection';
import AppBannerSection from '../containers/App/Banner';
import FoodFullScreenBanner from '../containers/Food/FullScreenBanner';
import CryptoBannerSection from '../containers/Crypto/BannerSection';
import SaaSClassicBannerSection from "../containers/SaasClassic/Banner";

const resolveComponents = () => {
  return {
    403285: {
      render: props => <PortfolioBannerSection {...props} />,
      name: 'Portfolio Banner',
      category: 'Banner',
    },
    403429: {
      render: props => <SaaSBannerSection {...props} />,
      name: 'SaaS Banner',
      category: 'Banner',
    },
    403269: {
      render: props => <AgencyBannerSection {...props} />,
      name: 'Agency Banner',
      category: 'Banner',
    },
    403391: {
      render: props => <RideBannerSecion {...props} />,
      name: 'Ride Banner',
      category: 'Banner',
    },
    403113: {
      render: props => <CharityBannerSection {...props} />,
      name: 'Charity Banner',
      category: 'Banner',
    },
    403460: {
      render: props => <FoodFullScreenBanner {...props} />,
      name: 'Food Banner',
      category: 'Banner',
    },
    403410: {
      render: props => <AppBannerSection {...props} />,
      name: 'App Banner',
      category: 'Banner',
    },
    403536: {
      render: props => <SaaSClassicBannerSection {...props} />,
      name: 'SaaS Classic Banner',
      category: 'Banner',
    },
    403488:{
      render: props => <CryptoBannerSection {...props} />,
      name: 'Crypto Banner',
      category: 'Banner',
    }
  };
};
export default resolveComponents;
