import FundraiserSection from '../containers/Charity/FundraiserSection';

const resolveComponents = () => {
  return {
    403387: {
      render: props => <FundraiserSection {...props} />,
      name: 'Fundraiser Section Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
