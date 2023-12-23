import FBPageSection from '../templates/shared/components/FBPageSection';

const resolveComponents = () => {
  return {
    403446: {
      render: props => <FBPageSection {...props} />,
      name: 'Agency Facebook feeds',
      category: 'Feeds',
    },
    403541: {
      render: props => <FBPageSection {...props} />,
      name: 'App Facebook feeds',
      category: 'Feeds',
    },
    403543: {
      render: props => <FBPageSection {...props} />,
      name: 'Saas Facebook feeds',
      category: 'Feeds',
    },
    403542: {
      render: props => <FBPageSection {...props} />,
      name: 'Saas2 Facebook feeds',
      category: 'Feeds',
    },
    403544: {
      render: props => <FBPageSection {...props} />,
      name: 'Crypto Facebook feeds',
      category: 'Feeds',
    },
    403545: {
      render: props => <FBPageSection {...props} />,
      name: 'Charity Facebook feeds',
      category: 'Feeds',
    },
    403546: {
      render: props => <FBPageSection {...props} />,
      name: 'Food Facebook feeds',
      category: 'Feeds',
    },
    403547:{
      render: props => <FBPageSection {...props} />,
      name: 'Portfolio Facebook feeds',
      category: 'Feeds',
    }
  };
};
export default resolveComponents;
