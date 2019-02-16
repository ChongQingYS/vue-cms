//入口文件
import Vue from 'vue';
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css';

Vue.component(Header.name, Header);
import app from './app.vue';

var vm = new Vue({
    el:"#app",
    data:{},
    methods: {
        
    },
    render(h) {
        return h(app)
    },
})





