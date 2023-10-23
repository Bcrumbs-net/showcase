import SaaSTimelineSection from '../../../lib/organisms/components/timelines/timeline1';

const resolveComponents = () => {
  return {
    403440: {
      render: props => <SaaSTimelineSection {...props} />,
      name: 'SaaS Timelines',
      category: 'Timelines',
    },
  };
};
export default resolveComponents;
