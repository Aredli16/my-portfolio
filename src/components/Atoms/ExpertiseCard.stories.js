import ExpertiseCard from './ExpertiseCard.vue';

export default {
    title: 'Atoms/ExpertiseCard',
    component: ExpertiseCard,
};

export const Primary = () => ({
    components: {ExpertiseCard},
    template: '<ExpertiseCard name="Web" icon="fa-solid fa-globe" description="Web development" />',
});
