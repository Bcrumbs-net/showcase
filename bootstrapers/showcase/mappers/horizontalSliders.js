import AwardsSection from '../../../lib/containers/Portfolio/Awards';
import NewsSection from '../../../lib/containers/Food/NewsSection';
import AgencyBlogSliderSection from '../../../lib/containers/Agency/BlogSliderSection';
import FoodSliderSection from '../../../lib/containers/Food/BlogSliderSection';
import CryptoSlideSections from "../../../lib/containers/Crypto/CryptoSlides";

const resolveComponents = () => {
  return {
    403289: {
      render: props => <AwardsSection {...props} />,
      name: 'Portfolio Awards',
      category: 'Horizontal Slider',
    },
    403467: {
      render: props => <NewsSection {...props} />,
      name: 'Food News',
      category: 'Horizontal Slider',
    },
    403481: {
      render: props => <AgencyBlogSliderSection {...props} />,
      name: 'Agency Hz Slider',
      category: 'Hz Slider',
    },
    403485: {
      render: props => <FoodSliderSection {...props} />,
      name: 'Food Hz Slider',
      category: 'Hz Slider',
    },
    403371: {
      render: props => <CryptoSlideSections {...props} />,
      name: 'Crypto Hz Slider',
      category: 'Hz Slider',
    }
  };
};
export default resolveComponents;
