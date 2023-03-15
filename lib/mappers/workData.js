import WorkSection from '../containers/Charity/WorkSection';

const resolveComponents = () => {
  return {
    403119: {
      render: props => <WorkSection {...props} />,
      name: 'Work Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
