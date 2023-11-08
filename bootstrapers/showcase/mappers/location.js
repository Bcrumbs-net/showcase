import RideLocationSection from '../../../lib/containers/Ride/LocationSelection';
import FoodLocationSection from '../../../lib/organisms/components/featuresLists/featureList7/location';

const resolveComponents = () => {
  return {
    403393: {
      render: props => <RideLocationSection {...props} />,
      name: 'Ride Location',
      category: 'Location',
    },
    403466: {
      render: props => <FoodLocationSection {...props} />,
      name: 'Food Location',
      category: 'Location',
    },
  };
};
export default resolveComponents;
