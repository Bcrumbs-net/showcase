import DonateSection from '../containers/Charity/DonateSection';

const resolveComponents = () => {
  return {
    403126: {
      render: props => <DonateSection {...props} />,
      name: 'Donate Section Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
