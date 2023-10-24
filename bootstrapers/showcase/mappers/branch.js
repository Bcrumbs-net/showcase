import BranchSection from '../../../lib/organisms/components/portfolios/portfolio5';

const resolveComponents = () => {
  return {
    403117: {
      render: props => <BranchSection {...props} />,
      name: 'Branch Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
