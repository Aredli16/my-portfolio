import ExperienceCard from './ExperienceCard.vue';

export default {
    title: 'Atoms/ExperienceCard',
    component: ExperienceCard,
};

export const Primary = () => ({
    components: {ExperienceCard},
    template: '<ExperienceCard date="2017 - Present" location="Denain" experience="UX Designer">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, blanditiis consequatur debitis, deleniti dicta error harum id illum ipsa nam natus nemo nisi nostrum, omnis optio quas quia rerum totam.</ExperienceCard>',
});
