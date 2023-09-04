import BlogSection from '../../../lib/containers/Charity/BlogSection';

const resolveComponents = () => {
  return {
    403389: {
      render: props => <BlogSection {...props} />,
      name: 'Blog Section Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
