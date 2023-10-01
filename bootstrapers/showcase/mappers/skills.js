import PortfolioSkillSection from '../../../lib/organisms/components/skills/skill1';

const resolveComponents = () => {
  return {
    403384: {
      render: props => <PortfolioSkillSection {...props} />,
      name: 'Portfolio Skills',
      category: 'Skills',
    },
  };
};
export default resolveComponents;
