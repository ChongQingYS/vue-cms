//入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css'
import VueResource from 'vue-resource';
// import monent from 'moment';

Vue.use(VueResource);
Vue.component(Header.name, Header,);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
import app from './app.vue';
// import VueRouter from 'vue-router';
import router from './router.js';
import moment from 'moment' ;

Vue.filter('getTime',function(data,pattern='YYYY-MM-DD HH-MM-SS'){
  
    return moment(data).format(pattern)
})

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





