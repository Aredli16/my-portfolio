import SocialButtonBar from './SocialButtonBar.vue';

export default {
    title: 'Molecules/SocialButtonBar',
    component: SocialButtonBar,
};

export const Primary = () => ({
    components: {SocialButtonBar},
    template: '<SocialButtonBar />',
});

export const Secondary = () => ({
    components: {SocialButtonBar},
    template: '<SocialButtonBar :secondary="true"/>',
});