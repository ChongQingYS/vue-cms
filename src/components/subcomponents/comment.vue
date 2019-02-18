<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength="120" placeholder="最大不能超过12个字"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list" v-for="(item, index) in pagelist" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    第{{item.id}} 楼&nbsp;&nbsp; {{item.user_name}} :匿名发表: {{item.add_time | getTime}}
                </div>
                <div class="cmt-body"> {{item.content}} </div>
            </div>
        </div>

        <mt-button type="danger" plain size="large" @click="getnewsid()">加载更多</mt-button>
    </div>
</template>

<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                pageindex: 0,
                pagelist:[]
            }
        },
        created(){
            this.getnewsid()
        },
        methods: {
            getnewsid() {
                this.pageindex += 1;
                this.$http.jsonp('http://127.0.0.1:3000/newsid/' + this.pageindex).then((result) => {
                    // console.log(result.body);
                    if (result.body == '') {
                        Toast({
                            message: '没有更多了',
                            position: 'bottom',
                            duration: 3000,
                            position:'middle',
                        });
                    }else {
                        // this.pagelist = result.body
                        this.pagelist = this.pagelist.concat(result.body);
                    }
                })

            }
        }
    }
</script>

<style lang="less" scoped>
    .cmt-container {
        h3 {
            font-size: 16px;
        }

        textarea {
            height: 100px;
            font-size: 14px;
            margin: 0;
        }

        .cmt-list {
            margin: 10px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    background-color: #ccc;
                    // padding: 5px 0;
                    line-height: 30px;
                }

                .cmt-body {
                    line-height: 30px;
                    text-indent: 2em;
                }
            }
        }

    }
</style>