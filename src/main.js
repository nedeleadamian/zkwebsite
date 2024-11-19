import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueSocketIO from 'vue-socket.io'
// import 'nprogress/nprogress.css'
import './assets/font/font.css'
import '@/icons'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
// public style
import '@/assets/css/style.scss';
import '@/assets/css/index.scss';
import { resizeScale } from '@/resize.js'
//import BaiduMap from 'vue-baidu-map'
//Vue.use(BaiduMap,{ak:'ci7rdNGEoh7bQS4u1phvUDqWSzovBwgK'})
import animated from 'animate.css'

Vue.use(animated)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
resizeScale();
