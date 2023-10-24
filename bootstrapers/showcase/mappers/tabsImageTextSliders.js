import PortfolioShowcase from '../../../lib/organisms/components/portfolios/portfolio2';

const resolveComponents = () => {
  return {
    403291: {
      render: props => <PortfolioShowcase {...props} />,
      name: 'Portfolio Showcase',
      category: 'Portfolio',
    },
  };
};
export default resolveComponents;
