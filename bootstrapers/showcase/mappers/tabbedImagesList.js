import FoodTabbedProductsSection from '../../../lib/organisms/components/productsLists/productsList1/tabbedproducts';
import SaasClassicUpdateScreen from "../../../lib/containers/SaasClassic/UpdateScreen";

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
