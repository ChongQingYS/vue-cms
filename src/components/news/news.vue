<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newslist" :key="index">
                <router-link :to="'/news/newsInfo/'+item.id" href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4> {{item.title}} </h4>
                        <p class="mui-ellipsis">
                            <span>发布时间: {{ item.add_time | getTime() }} </span>
                            <span>点击: {{item.click}} </span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                newslist:[]
            }
        },
        created(){
            this.getnew()
        },
        methods:{
            getnew(){
                this.$http.jsonp('http://127.0.0.1:3000/news').then(result=>{
                    // console.log(result.body);
                    this.newslist = result.body
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mui-table-view {
        .mui-media-body {
            img {
                width: 42px;
                height: 42px;
            }

            h4 {
                font-size: 14px;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;

            }
        }
    }
</style>