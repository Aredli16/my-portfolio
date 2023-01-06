import Header from './Header.vue';

export default {
    title: 'Organisms/Header',
    component: Header,
};

export const Primary = () => ({
    components: {Header},
    template: '<Header />',
});