<template>
  <div class="demands-type-list">
    <TopNav :iconClassName="isShowSearch?'':'icon-search'"
            @click="handShowSearch" />
    <transition v-if="showList">
      <div class="content">
        <ul v-show="!isShowSearch && list">
          <li v-for="(item, index) in list"
              @click="linkNav(index)"
              class="animated bounceInLeft"
              :key="index">
            <div class="title">郫都区万云汇互联网娱乐云计算产业基地项目</div>
            <div class="name">
              <span class="tag">融资需求</span>
              <span>成都国民沃成半导体有限公司</span>
            </div>
          </li>
        </ul>
      </div>
    </transition>

    <transition v-if="showSearch">
      <div v-show="isShowSearch">
        <Search @clickSearch="clickSearch"
                :isHasInputSearch="true" />
      </div>
    </transition>

  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
import Search from '@/components/search.vue'

import qs from 'qs'
export default {
  name: 'demands-list',
  data () {
    return {
      showSearch: false,
      showList: false,
      isShowSearch: false,
      list: []
    }
  },
  components: {
    TopNav,
    Search
  },
  created () {
    console.log(this.$route)

    setTimeout(() => {
      this.showSearch = true
    }, 0)
    setTimeout(() => {
      this.showList = true
    }, 0)

    this.requestList()
  },
  methods: {
    requestList () {
      const query = this.$route.query
      console.log(query)
      const cityName = query.city_name
      const cate = query.cate
      const keyword = query.keyword
      const nature = query.nature
      const page = query.page
      const requestType = query.request_type
      const scene = query.scene
      const type = query.type
      const data = {
        'city_name': cityName,
        'request_type': requestType,
        cate,
        keyword,
        nature,
        page,
        scene,
        type,
      }

      this.axios.post('/list/demand', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.list = res.data.list
        }
        console.log(res)
      })
    },
    linkNav (index) {
      this.$router.push({
        path: '/demandsDetail'
      })
    },
    handShowSearch () {
      this.isShowSearch = !this.isShowSearch
    },
    clickSearch () {
      console.log('clickSearch')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-type-list {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  .content {
    flex: 1;
    width: 100%;
    overflow: auto;
    background: url(../assets/img/bg.jpg) no-repeat left bottom;
    background-size: cover;
    font-size: $scss_32px;
    padding: 0 $scss_30px;
    ul {
      li {
        padding: $scss_30px 0;
        min-height: $scss_140px;
        border-bottom: 1px solid;
        border-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#edeff2, #edeff2);
        .title {
          line-height: $scss_44px;
        }
        .name {
          padding-top: $scss_16px;
          display: flex;
          align-items: center;
          font-size: $scss_22px;
          line-height: 1;
          .tag {
            border-radius: $scss_4px;
            font-size: $scss_18px;
            padding: $scss_4px;
            line-height: 1;
            border: solid 1px #fff;
            margin-right: $scss_10px;
          }
        }
      }
    }
  }
}
</style>
