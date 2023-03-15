import AgencyWorkHistory from '../containers/Agency/WorkHistory';

const resolveComponents = () => {
  return {
    403270: {
      render: props => <AgencyWorkHistory {...props} />,
      name: 'Agency Text Analytics',
      category: 'Text Analytics',
    },
  };
};
export default resolveComponents;
