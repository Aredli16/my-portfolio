import InformationCard from './InformationCard.vue';

export default {
    title: 'Molecules/InformationCard',
    component: InformationCard,
};

export const Primary = () => ({
    components: {InformationCard},
    template: '<InformationCard title="About me">About me. I have differents informations</InformationCard>',
});
