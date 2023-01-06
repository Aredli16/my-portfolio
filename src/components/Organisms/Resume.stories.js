import Resume from './Resume.vue';

export default {
    title: 'Organisms/Resume',
    component: Resume,
};

export const Primary = () => ({
    components: {Resume},
    template: '<Resume />',
});