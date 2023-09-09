import AgencyBlogSection from '../../../lib/organisms/components/portfolios/portfolio1';
import FoodPortfolioSection from '../../../lib/containers/Food/PortfolioSection';

const resolveComponents = () => {
  return {
    403180: {
      render: props => <AgencyBlogSection {...props} />,
      name: 'Agency Images List',
      category: 'Images List',
    },
    403463: {
      render: props => <FoodPortfolioSection {...props} />,
      name: 'Food Images List',
      category: 'Images List',
    },
  };
};
export default resolveComponents;
