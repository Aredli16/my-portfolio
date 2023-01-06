import Button from './Button.vue';

export default {
    title: 'Atoms/Button',
    component: Button,
};

export const Primary = () => ({
    components: {Button},
    template: '<Button title="Print Resume" />',
});

export const PrimaryIconized = () => ({
    components: {Button},
    template: '<Button title="Print Resume" icon="fa-solid fa-print" />',
});

export const Outlined = () => ({
    components: {Button},
    template: '<Button title="Print Resume" :outlined="true"/>',
});

export const OutlinedIconized = () => ({
    components: {Button},
    template: '<Button title="Print Resume" icon="fa-solid fa-print" :outlined="true"/>',
});