import CharityMilestoneBlock from '../../../lib/organisms/components/portfolios/portfolio6';

const resolveComponents = () => {
  return {
    403121: {
      render: props => <CharityMilestoneBlock {...props} />,
      name: 'Milestone Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
