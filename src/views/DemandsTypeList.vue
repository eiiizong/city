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
              :key="item.id">
            <div class="title">{{item.name||item.carrier_name}}</div>
            <div class="name">
              <span class="tag"
                    v-if="item.scene||item.type">{{item.scene||item.type}}</span>
              <span>{{item.contact_company||item.sponsor}}</span>
            </div>
          </li>
          <li class="btn-wrapper">
            <button @click="requestList">点击加载更多</button>
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
      list: [],
      page: 1
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
  },
  mounted () {
    this.requestList()
  },
  methods: {
    requestList () {
      const query = this.$route.query
      const cityName = query.city_name
      const cate = query.cate
      const keyword = query.keyword
      const nature = query.nature
      const page = this.page
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
        type
      }

      this.axios.post('/list/demand', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          if (page === 1) {
            this.list = res.data.list
            this.page++
          } else {
            if (res.data.list.length > 0) {
              this.list = this.list.concat(res.data.list)
              this.page++
            }
          }
        }
      })
    },
    linkNav (index) {
      const id = this.list[index].id
      this.$router.push({
        path: '/demandsDetail',
        query: { id }
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
        &.btn-wrapper {
          padding-right: $scss_140px;
          padding-left: $scss_140px;
          button {
            border: 0;
            outline: 0;
            border-radius: 0;
            width: 100%;
            height: $scss_70px;
            background-color: #00baff;
            border-radius: $scss_20px;
            color: #fff;
            font-size: $scss_32px;
            line-height: $scss_70px;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
