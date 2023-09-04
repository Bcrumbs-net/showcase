import MilestoneBlock from '../../../lib/containers/Charity/MilestoneBlock';

const resolveComponents = () => {
  return {
    403121: {
      render: props => <MilestoneBlock {...props} />,
      name: 'Milestone Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
