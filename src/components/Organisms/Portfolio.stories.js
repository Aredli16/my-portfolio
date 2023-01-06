import Portfolio from './Portfolio.vue';

export default {
    title: 'Organisms/Portfolio',
    component: Portfolio,
};

export const Primary = () => ({
    components: {Portfolio},
    template: '<Portfolio />',
});