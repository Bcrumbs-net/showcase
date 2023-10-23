import SaaS2TimelineSection from '../../../lib/organisms/components/timelines/timeline1';

const resolveComponents = () => {
  return {
    403440: {
      render: props => <SaaS2TimelineSection {...props} />,
      name: 'SaaS Timelines',
      category: 'Timelines',
    },
  };
};
export default resolveComponents;
