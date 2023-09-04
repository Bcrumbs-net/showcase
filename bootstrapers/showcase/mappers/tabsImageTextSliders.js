import PortfolioShowcase from '../../../lib/containers/Portfolio/PortfolioShowcase';

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
