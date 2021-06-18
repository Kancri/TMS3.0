import Vue from 'vue'
import App from './App.vue'
import './assets/flexible.js'
import './assets/css/comm.css'
import './assets/css/normalize.css'
import router from './router'
Vue.use(router)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')