<template>
  <div class="all">
    <div class="top">
      <img src="/../../../static/image/notice.png"/>
    </div>
    <div class="top1">通知公告</div>
    <div ref="wrapper" class="scroll-wrapper">
      <div>
        <div class="center" v-for="(val,index) in data" :key="index" @click="jump(val)">
          <div class="container">
            <div class="col-md-9 col-sm-9 col-lg-9 col-xs-9 left">
              <div class="container title">
                {{val.title}}
              </div>
            </div>
            <div class="col-md-3 col-sm-3 col-lg-3 col-xs-3 imgg"><img :src="val.img_path"/></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import BetterScroll from 'better-scroll'

  export default {
    name: "hello",
    data() {
      return {
        data: [], // 存储列表数据
        scroll: null, // 存储scroll实例对象
        isPullUpLoad: false, // 存储上拉加载状态
        current_page: 1, // 当前页码，默认为第一页加载
        per_page: 10 // 每页数据条数
      }

    },
    created() {
      const vm = this
      vm.getData()
    },
    mounted() {
      const vm = this
      vm.$nextTick(() => {
        vm._initScroll()
      })
    },
    methods: {
      getData() {
        const vm = this
        vm.$dialog.loading.open('loading...');
        this.$axios({
          method: "post",
          url: "/api/home/find_news",
          headers: {
            Accept: "application/vnd.myapp.v1+json"
          },
          data: {
            cateid: 1,// ok
            page: vm.current_page
          }
        })
          .then(res => {
            let resdata = res.data.news.data;
            for (let i in resdata) {
              if (resdata[i].title.length > 28) {
                resdata[i].title = resdata[i].title.substr(0, 28) + ' ···'
              }
            }
            // let tmpData =  {
            //   author: "赖雨桐",
            //   carete_time: "2018-10-16 10:29:08",
            //   id: 1,
            //   img_path: "http://qumatou-1254255265.cos.ap-beijing.myqcloud.com/28g4FWj5FguclpYDV4FIEGZWjlgTlwW8Y7b2aO61.png",
            //   source: "工信部网站",
            //   title: "关于印发《陕西省小微企业服务补贴券使用管理办法（试行）》的通知"
            // }
            vm.data.push(...resdata)

            // for (let i = 0; i < 20; i++) {
            //   vm.data.push(tmpData);
            // }
            vm.current_page = res.data.news.current_page;
            vm.current_page += 1;
            setTimeout(() => {
              vm.$dialog.loading.close();
            }, 800);
            vm.scroll.finishPullUp()
          })
      },
      _initScroll() {
        const vm = this
        if (!vm.$refs.wrapper) {
          return
        }
        // 初始化scroll实例
        vm.scroll = new BetterScroll(vm.$refs.wrapper, {
          click: true,
          probeType: 1,
          pullUpLoad: {
            threshold: 50
          }
        })
        // 注册上拉事件
        vm.scroll.on('pullingUp', function () {
          // 上拉事件触发，更新上拉状态为true
          vm.isPullUpLoad = true
          // 调用上拉后的执行方法
          vm.loadingMore()
        })
      },
      // 上拉执行方法
      loadingMore() {
        const vm = this
        vm.getData()
      },
      // 禁用滚动
      disableScroll() {
        this.scroll && this.scroll.disable()
      },
      // 启用滚动
      enableScroll() {
        this.scroll && this.scroll.enable()
      },
      // 点击列表单项
      jump(val) {
        this.$router.push({path: "/details1", query: {Id: val.id}});
      },
    }

  }
</script>

<style scoped>
  * .col-md-3, .col-md-9, .container, .col-lg-8, .col-sm-6, .col-sm-7 {
    margin: 0px;
    padding: 0px;
  }

  .top img {
    width: 100%;
    z-index: 2;
    height: 180px;
  }

  .top1 {
    background: #efeff4;
    color: #333333;
    height: 0.7rem;
    line-height: 0.7rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    font-weight: 600;
    margin: 0.1rem 0;
  }

  .center {
    margin: 0.2rem 0.3rem;
    border-bottom: 1px solid #efeff4;

  }

  .center:last-child {
    border-bottom: 0;
  }

  .imgg img {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.4rem;
  }

  .title {
    font-weight: 500;
    font-size: 0.3rem;
    height: 1.1rem;
    line-height: 0.55rem;

  }

  .left {
    padding: 0.1rem 0;
    height: 1.6rem;;

  }

  .time {
    /*margin-top: 0.4rem;*/
    color: #b5b5b5;
  }
  .all {
    display: flex;
    flex-direction: column;
  }
  .scroll-wrapper {
    height: calc(100vh - 0.9rem - 180px);
    overflow: hidden;

  }

</style>
