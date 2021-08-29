import { createApp } from 'vue'
import router from './router'
import App from './Pages/App.vue'

//import vuemathjax
import VueMathjax from 'vue-mathjax-next'

createApp(App)
  .use(router)
  .use(VueMathjax)
  .mount('#App')
