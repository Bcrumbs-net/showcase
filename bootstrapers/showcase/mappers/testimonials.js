import PortfolioTestimonialSection from "../../../lib/organisms/components/testimonials/testimonial4";
import SaaS2TestimonialSection from "../../../lib/organisms/components/testimonials/testimonial3";
import RideTestimonialSecion from "../../../lib/containers/Ride/TestimonialSection";
import AgencyTestimonialSection from "../../../lib/organisms/components/testimonials/testimonial1";
import AppTestimonialSection from "../../../lib/organisms/components/testimonials/testimonial2";
import SaaSClassicTestimonialSection from "../../../lib/organisms/components/testimonials/testimonial5";
import SaaSModernTestimonialSection from "../../../lib/organisms/components/testimonials/testimonial6";
import CryptoTestimonialSecion from "../../../lib/organisms/components/banners/banner6/bannerSlider";

const resolveComponents = () => {
  return {
    403302: {
      render: (props) => <PortfolioTestimonialSection {...props} />,
      name: "Portfolio Testimonial",
      category: "Testimonial",
    },
    403437: {
      render: (props) => <SaaS2TestimonialSection {...props} />,
      name: "SaaS Testimonial",
      category: "Testimonial",
    },
    403186: {
      render: (props) => <AgencyTestimonialSection {...props} />,
      name: "Agency Testimonial",
      category: "Testimonial",
    },
    403320: {
      render: (props) => <RideTestimonialSecion {...props} />,
      name: "Ride Testimonial",
      category: "Testimonial",
    },
    403203: {
      render: (props) => <AppTestimonialSection {...props} />,
      name: "App Testimonial",
      category: "Testimonial",
    },
    403354: {
      render: (props) => <SaaSClassicTestimonialSection {...props} />,
      name: "SaaS Classic Testimonial",
      category: "Testimonial",
    },
    403358: {
      render: (props) => <CryptoTestimonialSecion {...props} />,
      name: "Crypto Testimonial",
      category: "Testimonial",
    },
    403224: {
      render: (props) => <SaaSModernTestimonialSection {...props} />,
      name: "SaaS Modern Testimonial",
      category: "Testimonial",
    },
  };
};
export default resolveComponents;
