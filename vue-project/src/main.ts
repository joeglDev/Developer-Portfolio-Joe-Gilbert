import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faGithub, fab, faEnvelope)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
