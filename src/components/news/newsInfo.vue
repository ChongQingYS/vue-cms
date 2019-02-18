<template>
    <div class="newsinfo-container">
       <h3 class="title"> {{newslist.title}} </h3>
       <p class="subtitle">
           <span>发表时间: {{newslist.add_time | getTime }}</span>
           <span>点击 {{newslist.click}}次</span>
       </p>
       <hr>
       <div class="content">
            {{newslist.content}}
       </div>
        <commentbox></commentbox>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue';
    export default {
      data() {
          return {
              id:this.$route.params.id,
              newslist:{}
          }
      },
      created(){
          this.getnewsInfo();
      },
      methods:{
          getnewsInfo(){
              this.$http.jsonp('http://127.0.0.1:3000/newsinfo/'+this.id).then((result)=>{
                this.newslist = result.body
              })
          }
      },
      components:{
          'commentbox':comment
      }
    }
</script>

<style lang="less" scoped>
    .newsinfo-container {
        padding: 0 5px;
        .title {
            font-size: 16px;
            margin: 10px 0;
            text-align: center;
            color: red;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #226aff;
        }
        .content {
            font-size: 12px;
        }
    }
</style>
