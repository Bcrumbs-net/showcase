import AgencyQualitySection from '../containers/Agency/QualitySection';

const resolveComponents = () => {
  return {
    403178: {
      render: props => <AgencyQualitySection {...props} />,
      name: 'Agency List Image',
      category: 'List Image',
    },
  };
};
export default resolveComponents;
