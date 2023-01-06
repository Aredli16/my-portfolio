import Contact from './Contact.vue';

export default {
    title: 'Organisms/Contact',
    component: Contact,
};

export const Primary = () => ({
    components: {Contact},
    template: '<Contact />',
});