import SectionTitle from './SectionTitle.vue';

export default {
    title: 'Atoms/SectionTitle',
    component: SectionTitle,
};

export const Primary = () => ({
    components: {SectionTitle},
    template: '<SectionTitle>Resume</SectionTitle>',
});

export const Secondary = () => ({
    components: {SectionTitle},
    template: '<SectionTitle primary-text="My"> Resume</SectionTitle>',
});
