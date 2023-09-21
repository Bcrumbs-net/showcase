import AgencyVideoSection from '../../../lib/organisms/components/video/video1';
import FoodVideoSecion from '../../../lib/containers/Food/FullScreenVideoSection';
import VideoLibrary from '../../../lib/organisms/components/videolibrary/videolibrary1';

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
