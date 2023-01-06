import HeaderContent from './HeaderContent.vue';

export default {
    title: 'Molecules/HeaderContent',
    component: HeaderContent,
};

export const Primary = () => ({
    components: {HeaderContent},
    template: '<HeaderContent />',
});