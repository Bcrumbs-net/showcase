import FBPageSection from '../templates/shared/components/FBPageSection';

const resolveComponents = () => {
  return {
    403446: {
      render: props => <FBPageSection {...props} />,
      name: 'Facebook feeds',
      category: 'Feeds',
    },
  };
};
export default resolveComponents;
