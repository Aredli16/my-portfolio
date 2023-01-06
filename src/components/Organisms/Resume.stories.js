import Resume from './Resume.vue';

export default {
    title: 'Molecules/Resume',
    component: Resume,
};

export const Primary = () => ({
    components: {Resume},
    template: '<Resume />',
});