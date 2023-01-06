import {createApp} from 'vue'
import App from './App.vue'

import '@/assets/app.css'
import {library} from "@fortawesome/fontawesome-svg-core"
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

createApp(App).mount('#app')