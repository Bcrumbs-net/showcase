import MilestoneBlock from '../../../lib/organisms/components/portfolios/portfolio7';

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
