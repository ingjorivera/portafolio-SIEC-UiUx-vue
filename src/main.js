// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import quasarIconSet from 'quasar/icon-set/fontawesome-v5'
import { createPinia } from 'pinia'
import router from './router.js'
import VueApexCharts from "vue3-apexcharts";
// Import icon libraries
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
//Import animation library
import { MotionPlugin } from '@vueuse/motion'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)
const pinia=createPinia()

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})
myApp.use(pinia)
myApp.use(router)
myApp.use(MotionPlugin)
myApp.use(VueApexCharts)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
