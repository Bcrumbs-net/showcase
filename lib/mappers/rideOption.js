import RideOption from '../containers/Ride/RideOption';

const resolveComponents = () => {
  return {
    403392: {
      render: props => <RideOption {...props} />,
      name: 'Ride Option',
      category: 'Process',
    },
  };
};
export default resolveComponents;
