import AwardsSection from '../../../lib/organisms/components/awards/award1';
import NewsSection from '../../../lib/containers/Food/NewsSection';
import AgencyBlogSliderSection from '../../../lib/organisms/components/sliders/slider1';
import FoodSliderSection from '../../../lib/containers/Food/BlogSliderSection';
import CryptoSlideSections from "../../../lib/organisms/components/sliders/slider3";

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
