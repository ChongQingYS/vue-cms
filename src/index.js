//入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { Header,Swipe, SwipeItem } from 'mint-ui';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.component(Header.name, Header,);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import app from './app.vue';
// import VueRouter from 'vue-router';
import router from './router.js';

var vm = new Vue({
    el:"#app",
    data:{},
    methods: {
        
    },
    render(h) {
        return h(app)
    },
    router
})





