import AgencyTeamSection from '../../../lib/organisms/components/teamLists/teamList1';

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
