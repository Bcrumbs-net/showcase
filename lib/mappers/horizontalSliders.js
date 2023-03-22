import AwardsSection from '../containers/Portfolio/Awards';
import NewsSection from '../containers/Food/NewsSection';
import AgencyBlogSliderSection from '../containers/organisms/components/blogSliderSection/blogSlider1';
import FoodSliderSection from '../containers/Food/BlogSliderSection';
import CryptoSlideSections from "../containers/Crypto/CryptoSlides";

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
