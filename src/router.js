import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index.vue'
import Home from './views/Home.vue'
import DemandsList from './views/DemandsList.vue'
import Choice from './views/Choice.vue'
import DemandsDetail from './views/DemandsDetail.vue'
import DemandsTypeList from './views/DemandsTypeList.vue'

Router.prototype.goBack = function () {
  this.isback = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: 'Index',
        index: 0
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
        index: 1
      }
    },
    {
      path: '/demandsList',
      name: 'demandsList',
      component: DemandsList,
      meta: {
        title: 'DemandsList',
        index: 2
      }
    },
    {
      path: '/demandsTypeList',
      name: 'demandsTypeList',
      component: DemandsTypeList,
      meta: {
        title: 'DemandsTypeList',
        index: 4
      }
    },
    {
      path: '/demandsDetail',
      name: 'demandsDetail',
      component: DemandsDetail,
      meta: {
        title: 'DemandsDetail',
        index: 5
      }
    },
    {
      path: '/choice',
      name: 'choice',
      component: Choice,
      meta: {
        title: 'Choice',
        index: 3
      }
    }
  ]
})
