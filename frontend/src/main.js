import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCaretDown)
library.add(faCaretUp)

// new Vue({
//     render: h => h(App),
// }).$mount('#app').component('font-awesome-icon', FontAwesomeIcon)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
