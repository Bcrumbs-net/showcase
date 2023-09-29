import PortfolioTestimonialSection from '../../../lib/organisms/components/testimonials/testimonial4';
import SaaSTestimonialSection from '../../../lib/containers/Saas/TestimonialSection';
import RideTestimonialSecion from '../../../lib/containers/Ride/TestimonialSection';
import AgencyTestimonialSection from '../../../lib/organisms/components/testimonials/testimonial1';
import AppTestimonialSection from '../../../lib/containers/App/Testimonial';
import SaaSClassicTestimonialSection from "../../../lib/containers/SaasClassic/Testimonial";
import CryptoTestimonialSecion from "../../../lib/containers/Crypto/BannerSlider";

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
