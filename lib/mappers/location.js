import RideLocationSection from '../containers/Ride/LocationSelection';
import FoodLocationSection from '../containers/Food/FullScreenLocationSection';

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
