import SaaSTimelineSection from '../../../lib/containers/Saas/TimelineSection';

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
