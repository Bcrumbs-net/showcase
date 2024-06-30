import FormSection from '../templates/shared/components/FormSection';

const resolveComponents = () => {
  return {
    403548: {
      render: props => <FormSection {...props} />,
      name: 'Agency Form',
      category: 'Forms',
    },
    403550: {
      render: props => <FormSection {...props} />,
      name: 'App Form',
      category: 'Forms',
    },
    403552: {
      render: props => <FormSection {...props} />,
      name: 'Crypto Form',
      category: 'Forms',
    },
    403554: {
      render: props => <FormSection {...props} />,
      name: 'Charity Form',
      category: 'Forms',
    },
    403558: {
      render: props => <FormSection {...props} />,
      name: 'Saas Form',
      category: 'Forms',
    },
    403556: {
      render: props => <FormSection {...props} />,
      name: 'Saas2 Form',
      category: 'Forms',
    },
    403560: {
      render: props => <FormSection {...props} />,
      name: 'Portfolio Form',
      category: 'Forms',
    },
    403562: {
      render: props => <FormSection {...props} />,
      name: 'Food Form',
      category: 'Forms',
    }
  };
};

export default resolveComponents;
