import FormSection from '../templates/shared/components/FormSection';

const resolveComponents = () => {
  return {
    403548: {
      render: props => <FormSection {...props} />,
      name: 'Showcase Form',
      category: 'Forms',
    },
  };
};

export default resolveComponents;
