import SocialButton from './SocialButton.vue';

export default {
    title: 'Atoms/SocialButton',
    component: SocialButton,
};

export const Primary = () => ({
    components: {SocialButton},
    template: '<SocialButton icon="fa-brands fa-facebook" />',
});

export const Secondary = () => ({
    components: {SocialButton},
    template: '<SocialButton icon="fa-brands fa-facebook" :secondary="true"/>',
});