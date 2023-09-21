import AgencyWorkHistory from '../../../lib/organisms/components/workHistory/workHistory1';

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
