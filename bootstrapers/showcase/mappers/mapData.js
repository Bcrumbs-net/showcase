import MapSection from '../../../lib/containers/Charity/MapSection';

const resolveComponents = () => {
  return {
    403386: {
      render: props => <MapSection {...props} />,
      name: 'Map Section Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
