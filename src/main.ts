import '@/assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {VMenu,VBtn,VList} from 'vuetify/components'

const vuetify = createVuetify({
  components:{VMenu,VBtn,VList}
})

createApp(App)
  .use(vuetify)
  .mount('#app')
