import Markdown from '../templates/shared/components/Markdown';

const resolveComponents = () => {
  return {
    403575: {
      render: props => <Markdown {...props} />,
      name: 'Agency Markdown',
      category: 'Markdown',
    },
  };
};
export default resolveComponents;
