import SkillBar from './SkillBar.vue';

export default {
    title: 'Atoms/SkillBar',
    component: SkillBar,
};

export const Primary = () => ({
    components: {SkillBar},
    template: '<SkillBar skill="HTML" percentage="80" />',
});
