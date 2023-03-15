import PortfolioTestimonialSection from '../containers/Portfolio/Testimonial';
import SaaSTestimonialSection from '../containers/Saas/TestimonialSection';
import RideTestimonialSecion from '../containers/Ride/TestimonialSection';
import AgencyTestimonialSection from '../containers/Agency/TestimonialSection';
import AppTestimonialSection from '../containers/App/Testimonial';
import SaaSClassicTestimonialSection from "../containers/SaasClassic/Testimonial";
import CryptoTestimonialSecion from "../containers/Crypto/BannerSlider";

const resolveComponents = () => {
  return {
    403302: {
      render: props => <PortfolioTestimonialSection {...props} />,
      name: 'Portfolio Testimonial',
      category: 'Testimonial',
    },
    403437: {
      render: props => <SaaSTestimonialSection {...props} />,
      name: 'SaaS Testimonial',
      category: 'Testimonial',
    },
    403186: {
      render: props => <AgencyTestimonialSection {...props} />,
      name: 'Agency Testimonial',
      category: 'Testimonial',
    },
    403320: {
      render: props => <RideTestimonialSecion {...props} />,
      name: 'Ride Testimonial',
      category: 'Testimonial',
    },
    403203: {
      render: props => <AppTestimonialSection {...props} />,
      name: 'App Testimonial',
      category: 'Testimonial',
    },
    403354: {
      render: props => <SaaSClassicTestimonialSection {...props} />,
      name: 'SaaS Classic Testimonial',
      category: 'Testimonial',
    },
    403358: {
      render: props => <CryptoTestimonialSecion {...props} />,
      name: 'Crypto Testimonial',
      category: 'Testimonial',
    },
  };
};
export default resolveComponents;
