import CardTitle from './CardTitle.vue';

export default {
    title: 'Atoms/CardTitle',
    component: CardTitle,
};

export const Primary = () => ({
    components: {CardTitle},
    template: '<CardTitle>About me</CardTitle>',
});