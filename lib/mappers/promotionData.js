import PromotionBlock from '../containers/Charity/PromotionBlock';

const resolveComponents = () => {
  return {
    403125: {
      render: props => <PromotionBlock {...props} />,
      name: 'Promotion Data Section',
      category: 'Section',
    },
  };
};
export default resolveComponents;
