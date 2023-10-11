import PortfolioBannerSection from '../../../lib/containers/Portfolio/Banner';
import SaaS2BannerSection from '../../../lib/organisms/components/banners/banner3';
import RideBannerSecion from '../../../lib/containers/Ride/Banner';
import CharityBannerSection from '../../../lib/containers/Charity/BannerSection';
import AgencyBannerSection from '../../../lib/organisms/components/banners/banner1';
import AppBannerSection from '../../../lib/containers/App/Banner';
import FoodFullScreenBanner from '../../../lib/containers/Food/FullScreenBanner';
import CryptoBannerSection from '../../../lib/containers/Crypto/BannerSection';
import SaaSBannerSection from "../../../lib/containers/SaasClassic/Banner";

const resolveComponents = () => {
  return {
    403285: {
      render: (props) => <PortfolioBannerSection {...props} />,
      name: 'Portfolio Banner',
      category: 'Banner',
    },
    403429: {
      render: (props) => <SaaS2BannerSection {...props} />,
      name: 'SaaS2 Banner',
      category: 'Banner',
    },
    403269: {
      render: (props) => <AgencyBannerSection {...props} />,
      name: 'Agency Banner',
      category: 'Banner',
    },
    403391: {
      render: (props) => <RideBannerSecion {...props} />,
      name: 'Ride Banner',
      category: 'Banner',
    },
    403113: {
      render: (props) => <CharityBannerSection {...props} />,
      name: 'Charity Banner',
      category: 'Banner',
    },
    403460: {
      render: (props) => <FoodFullScreenBanner {...props} />,
      name: 'Food Banner',
      category: 'Banner',
    },
    403410: {
      render: (props) => <AppBannerSection {...props} />,
      name: 'App Banner',
      category: 'Banner',
    },
    403536: {
      render: (props) => <SaaSBannerSection {...props} />,
      name: 'SaaS Banner',
      category: 'Banner',
    },
    403488: {
      render: (props) => <CryptoBannerSection {...props} />,
      name: 'Crypto Banner',
      category: 'Banner',
    },
  };
};
export default resolveComponents;
