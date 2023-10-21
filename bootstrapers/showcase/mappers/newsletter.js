import SaaSClaasicNewsletter from "../../../lib/organisms/components/newsletters/newsletter2";

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
