import VueRouter from 'vue-router';
import HomerContainer from './components/tabbar/HomeContainer.vue';
import MenberContainer from './components/tabbar/MenberVontainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';


var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomerContainer},
        {path:'/member',component:MenberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer}
    ],
    linkActiveClass:"mui-active"
})
export default router