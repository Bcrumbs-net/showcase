import HumanityBlock from '../containers/Charity/HumanityBlock';

const resolveComponents = () => {
  return {
    403123: {
      render: props => <HumanityBlock {...props} />,
      name: 'Humanity Block Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
