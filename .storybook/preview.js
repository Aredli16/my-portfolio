import {app} from '@storybook/vue3'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import '../src/assets/app.css';

library.add(fab, fas);
app.component('font-awesome-icon', FontAwesomeIcon);

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}