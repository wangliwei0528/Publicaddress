<template>
  <div class="all">
    <div class="title">
      {{data.title}}
    </div>
    <div class="top">
      <span v-if="data.author != 'undefined'">{{data.author}}</span><a>澄城县中小企业促进局</a><span>{{data.carete_time}}</span>
    </div>
    <div class="top1">
      <span> ⇧ 搜索上方 <label> "澄城县中小企业促进局" </label> 关注我们</span>
    </div>
    <div class="center">
      <div class="image">
        <img :src="data.img_path"/>
      </div>
      <div>
        <div class="centent1" v-html="data.content"></div>
      </div>
    </div>

    <div class="bor"><img src="/../../../static/image/border.png"/></div>

    <div class="bottom">
      <p v-if="data.source  != 'undefined'">来源: {{data.source}}</p>
      <p v-if="data.author  != 'undefined'">编辑: {{data.author}}</p>
      <p>澄城县中小企业促进局</p>
    </div>

    <!--<div class="end"><img src="/../../../static/image/pic8.jpg"/></div>-->
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "details1",
    data() {

      return {
        data: ''
      }

    },
    created() {
      this.$axios({
        method: "post",
        url: "/api/home/news_info/" + this.$route.query.Id,
        headers: {
          Accept: "application/vnd.myapp.v1+json"
        }
      })
        .then(res => {
          this.data = res.data.news;
        })
    }

  }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .title {
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.4rem;
    font-weight: 500;
  }

  .all {
    padding: 0.4rem;
  }

  .top {
    margin-top: 0.4rem;
    color: gray;
  }

  .top a {
    margin: 0 0.2rem;
  }

  .top1 {
    margin: 0.4rem 0;
    background: #60a683;
    text-align: center;
    border-radius: 0.2rem;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  .top1 span {
    color: #ffffff;
  }

  .top1 label {
    color: #333333;
    font-weight: 400;
  }

  .image {
    border: 1px solid #b2b2b2;
    padding: 0.1rem;
    border-radius: 0.1rem;
  }

  .center img {
    width: 100%;
  }

  h5 {

    text-align: center;
    margin: 0.8rem 0;
    font-weight: 700;
  }

  .centent1 {
    margin-top: 0.4rem;
    /*text-indent: 25px;*/
    padding: 0.3rem;
    border: 1px solid #b2b2b2;
    border-radius: 0.1rem;
    line-height: 0.5rem;
    box-shadow: darkgrey 1px 1px 8px 1px;
  }

  .bor img {
    margin: 0.4rem 0;
    width: 100%;
  }

  .bottom {
    color: #b2b2b2;
    font-size: 0.28rem;
  }

  .end img {
    width: 100%;
  }


</style>

<style>
  .ql-align-center {
    text-indent: 0
  }
.centent1 img{
  width: 100%;
}

  .ql-align-center img {
    width: 100%;
  }
</style>
