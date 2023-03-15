import AgencyVideoSection from '../containers/Agency/VideoSection';
import FoodVideoSecion from '../containers/Food/FullScreenVideoSection';
import VideoLibrary from '../containers/Agency/VideoLibrary';

const resolveComponents = () => {
  return {
    403272: {
      render: props => <AgencyVideoSection {...props} />,
      name: 'Agency Video',
      category: 'Video',
    },
    403471: {
      render: props => <FoodVideoSecion {...props} />,
      name: 'Food Video',
    },
    403480: {
      render: props => <VideoLibrary {...props} />,
      name: 'Video Library',
      category: 'Video',
    },
  };
};
export default resolveComponents;
