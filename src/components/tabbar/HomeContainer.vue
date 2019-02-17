<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item, index) in lunbolist" :key="index">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>

        </ul>

    </div>


</template>

<script>
    export default {
        data() {
            return {
                lunbolist: []
            }
        },
        methods: {
            getlunbo() {
                this.$http.jsonp("http://127.0.0.1:3000/getlunbo").then(result => {
                    console.log(result.body);
                    this.lunbolist = result.body
                })
            }
        },
        created() {
            this.getlunbo()
        }

    }
</script>

<style lang="less" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-last-of-type(1) {
                background-color: red;
            }

            &:nth-last-of-type(2) {
                background-color: green;
            }

            &:nth-last-of-type(3) {
                background-color: hotpink;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }

    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;

        .mui-table-view-cell {
            border: none;

            img {
                width: 60px;
                height: 60px;
            }
            .mui-media-body {
                font-size: 13px;
            }
        }


    }
</style>