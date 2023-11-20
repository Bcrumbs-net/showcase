import NewsSection from '../../../lib/containers/Ride/LatestNews';
import CryptoContactSection from '../../lib/organisms/components/featuresLists/featurelist8';

const resolveComponents = () => {
  return {
    403318: {
      render: props => <NewsSection {...props} />,
      name: 'Latest News Section',
      category: 'News',
    },
    403373: {
      render: props => <CryptoContactSection {...props} />,
      name: 'NewsLetter Section',
      category: 'News',
    },
  };
};
export default resolveComponents;
