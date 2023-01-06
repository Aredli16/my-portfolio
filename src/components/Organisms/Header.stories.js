import Header from './Header.vue';

export default {
    title: 'Molecules/Header',
    component: Header,
};

export const Primary = () => ({
    components: {Header},
    template: '<Header />',
});