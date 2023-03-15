import PortfolioSkillSection from '../containers/Portfolio/Skill';

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
