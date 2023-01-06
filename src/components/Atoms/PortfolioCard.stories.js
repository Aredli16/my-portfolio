import PortfolioCard from './PortfolioCard.vue';

export default {
    title: 'Atoms/PortfolioCard',
    component: PortfolioCard,
};

export const Primary = () => ({
    components: {PortfolioCard},
    template: '<PortfolioCard img="https://github.com/Aredli16/uphf_edt/raw/main/assets/uphf_banner.png?raw=true" title="UPHF_ EDT">"Schedule</PortfolioCard>',
});
