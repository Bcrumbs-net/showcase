import AgencyTeamSection from '../containers/Agency/TeamSection';

const resolveComponents = () => {
  return {
    403182: {
      render: props => <AgencyTeamSection {...props} />,
      name: 'Agency Team',
      category: 'Team',
    },
  };
};
export default resolveComponents;
