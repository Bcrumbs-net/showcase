import AgencyBlogSection from '../../../lib/containers/Agency/BlogSection';
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
