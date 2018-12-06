import Vue from 'vue'
import Router from 'vue-router'

// 通知公告
import notice from '@/components/notice/notice'
// 政策法规
import policy from '@/components/policy/policy'
// 最新资讯
import industry from '@/components/industry/industry'
// 融资服务
import government from '@/components/government/government'


// 详情
import details1 from '@/components/details1/details1'
// 企业需求
import complaint from '@/components/complaint/complaint'
// 我的
import index from '@/components/index/index'

// 图片
import image from '@/components/image/image'
//评价
import evaluate from '@/components/evaluate/evaluate'
//投诉
import complaint1 from '@/components/complaint1/complaint1'


Vue.use(Router)
export default new Router({
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'notice',
      component: notice
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/image',
      name: 'image',
      component: image
    },
    {
      path: '/industry',
      name: 'industry',
      component: industry
    },
    {
      path: '/policy',
      name: 'policy',
      component: policy
    },
    {
      path: '/details1',
      name: 'details1',
      component: details1
    },
    {
      path: '/government',
      name: 'government',
      component:
      government
    },
    {
      path: '/complaint',
      name: 'complaint',
      component:
      complaint
    },
    {
      path: '/complaint1',
      name: 'complaint1',
      component: complaint1
    }
    ,
    {
      path: '/evaluate',
      name: 'evaluate',
      component: evaluate
    }
    ,

  ],
})
