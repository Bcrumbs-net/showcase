import AwardsSection from '../../../lib/organisms/components/awards/award1';
import NewsSection from '../../../lib/organisms/components/news/new1';
import AgencyBlogSliderSection from '../../../lib/organisms/components/sliders/slider1';
import FoodSliderSection from '../../../lib/organisms/components/sliders/slider2';
import CryptoSlideSections from "../../../lib/organisms/components/sliders/slider4";

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
