import TabbedProductsSection from '../../../lib/organisms/components/products/product1/tabbedproducts';
import SaasClassicUpdateScreen from "../../../lib/organisms/components/tabsGallerys/tabsGallery1";

const resolveComponents = () => {
  return {
    403487: {
      render: props => <TabbedProductsSection {...props} />,
      name: 'Food Tabbed Images List',
      category: 'Tabbed Images List',
    },
    403356: {
      render: props => <SaasClassicUpdateScreen {...props} />,
      name: 'SaaS classic Tabbed screen shots',
      category: 'Tabbed Images List',
    }
  };
};
export default resolveComponents;
