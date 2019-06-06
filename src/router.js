import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import DemandsList from './views/DemandsList.vue'
import Choice from './views/Choice.vue'
import DemandsDetail from './views/DemandsDetail.vue'
import DemandsTypeList from './views/DemandsTypeList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demandsList',
      name: 'demandsList',
      component: DemandsList,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demandsTypeList',
      name: 'demandsTypeList',
      component: DemandsTypeList,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/demandsDetail',
      name: 'demandsDetail',
      component: DemandsDetail,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/choice',
      name: 'choice',
      component: Choice,
      meta: {
        title: '选择'
      }
    }
  ]
})
