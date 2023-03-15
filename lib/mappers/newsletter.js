import SaaSClaasicNewsletter from "../containers/SaasClassic/Newsletter";

const resolveComponents = () => {
  return {
    403381: {
      render: props => <SaaSClaasicNewsletter {...props} />,
      name: 'SaaS Classic Newsletter',
      category: 'Newsletter',
    },
  };
};

export default resolveComponents;
