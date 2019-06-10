import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import Home from './views/Home.vue'
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
        title: 'Index'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/demandsList',
      name: 'demandsList',
      component: DemandsList,
      meta: {
        title: 'DemandsList'
      }
    },
    {
      path: '/demandsTypeList',
      name: 'demandsTypeList',
      component: DemandsTypeList,
      meta: {
        title: 'DemandsTypeList'
      }
    },
    {
      path: '/demandsDetail',
      name: 'demandsDetail',
      component: DemandsDetail,
      meta: {
        title: 'DemandsDetail'
      }
    },
    {
      path: '/choice',
      name: 'choice',
      component: Choice,
      meta: {
        title: 'Choice'
      }
    }
  ]
})
