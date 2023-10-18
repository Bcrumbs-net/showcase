import AppPaymentSection from '../../../lib/organisms/components/callToActions/callToAction3';

const resolveComponents = () => {
    return {
        403202: {
            render: props => <AppPaymentSection {...props} />,
            name: 'App Payments',
            category: 'Payments',
        },
    };
};
export default resolveComponents;
