import About from './About.vue';

export default {
    title: 'Molecules/About',
    component: About,
};

export const Primary = () => ({
    components: {About},
    template: '<About />',
});