import BranchSection from '../containers/Charity/BranchSection';

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
