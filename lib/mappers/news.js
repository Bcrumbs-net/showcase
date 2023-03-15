import NewsSection from '../containers/Ride/LatestNews';
import CryptoContactSection from '../containers/Crypto/Contact';

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
