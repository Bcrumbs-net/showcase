import FoodTabbedProductsSection from "../../../lib/organisms/components/productsLists/productsList1/tabbedproducts";
import SaasClassicUpdateScreen from "../../../lib/organisms/components/tabsGallerys/tabsGallery1";
import SaasModernUpdateScreen from "../../../lib/organisms/components/tabsGallerys/tabsGallery2";

const resolveComponents = () => {
  return {
    403487: {
      render: (props) => <FoodTabbedProductsSection {...props} />,
      name: "Food Tabbed Images List",
      category: "Tabbed Images List",
    },
    403356: {
      render: (props) => <SaasClassicUpdateScreen {...props} />,
      name: "SaaS classic Tabbed screen shots",
      category: "Tabbed Images List",
    },
    403567: {
      render: (props) => <SaasModernUpdateScreen {...props} />,
      name: "SaaS modern Tabbed screen shots",
      category: "Tabbed Images List",
    },
  };
};
export default resolveComponents;
