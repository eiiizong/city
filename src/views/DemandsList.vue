<template>
  <div class="demands-list">
    <TopNav :iconClassName="isShowSearch?'':'icon-filtrate'"
            :rightText="isShowSearch?'关闭':'筛选'"
            @click="handleShowSearch" />

    <div class="content">
      <div v-show="!isShowSearch">
        <transition v-if="showLogo">
          <div class="img-wrapper animated wobble rollIn">
            <img src="../assets/img/logo-big@2x.png"
                 alt="logo">
          </div>
        </transition>

        <transition v-if="showNav">
          <div class="nav">
            <ul>
              <li :class="navIndex===0?'active':''">
                <div class="link"
                     @click.stop="clickNavDemandsList">
                  <span class="bg"></span>
                  <span>需求清单({{requestData.demand_cnt}})</span>
                </div>
              </li>
              <li :class="navIndex===1?'active':''">
                <div class="link"
                     @click.stop="clickNavGetsList">
                  <span class="bg"></span>
                  <span>供给清单({{requestData.supply_cnt}})</span>
                </div>
              </li>
            </ul>
          </div>
        </transition>

        <transition v-if="showList">
          <div class="list">
            <ul>
              <li v-for="(item, index) in cardData"
                  class="animated rollIn rollout"
                  :key="item.id">
                <Card :data="item"
                      @click="linkNav(index)" />
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <transition v-if="showSearch">
      <div v-if="isShowSearch">
        <Search @clickSearch="clickSearch"
                :searchCity="searchCity"
                :searchScene="searchScene"
                :isHasInputSearch="false" />
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
import Card from '@/components/card.vue'
import Search from '@/components/search.vue'
import qs from 'qs'

export default {
  name: 'demands-list',
  data () {
    return {
      showSearch: false,
      showNav: false,
      showLogo: false,
      showList: false,
      isShowSearch: false,
      navIndex: 0,
      requestData: {},
      cardData: [],
      searchCity: [],
      searchScene: [],
      city: ''
    }
  },
  components: {
    TopNav,
    Card,
    Search
  },
  created () {
    setTimeout(() => {
      this.showLogo = true
      this.showSearch = true
    }, 0)
    setTimeout(() => {
      this.showNav = true
    }, 1000)
    setTimeout(() => {
      this.showList = true
    }, 1500)

    this.request()
    this.requestSearchList()
  },
  methods: {
    request () {
      const cityName = this.$route.query.city_name
      this.city = cityName
      const data = {
        'city_name': cityName
      }
      this.axios.post('/list/city', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.requestData = res.data
          this.cardData = res.data.demand_list
        }
      })
    },
    requestSearchList () {
      this.axios.post('/list/system').then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.searchCity = res.data.city
          this.searchScene = res.data.scene
        }
      })
    },
    requestSearch () {
      const cityName = this.$route.query.city_name
      const data = {
        'city_name': cityName
      }
      this.axios.post('/list/city', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.requestData = res.data
          this.cardData = res.data.demand_list
        }
      })
    },
    handleShowSearch () {
      this.isShowSearch = !this.isShowSearch
    },
    linkNav (index) {
      const cate = this.cardData[index].cate
      const page = ''
      const type = ''
      const nature = ''
      const scene = ''
      const requestType = ''
      const keyword = ''

      let url = {
        path: '/choice',
        query: {
          city_name: this.city,
          cate,
          page,
          type,
          nature,
          scene,
          'request_type': requestType,
          keyword
        }
      }
      if (this.city !== '成都') {
        url.path = '/demandsTypeList'
      }
      this.$router.push(url)
    },
    clickNavDemandsList () {
      this.navIndex = 0
      this.cardData = this.requestData.demand_list
    },
    clickNavGetsList () {
      this.navIndex = 1
      this.cardData = this.requestData.supply_list
    },
    clickSearch () {
      console.log('clickSearch111')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-list {
  width: 100%;
  height: 100%;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  .content {
    flex: 1;
    width: 100%;
    background: url(../assets/img/bg.jpg) no-repeat left top;
    background-size: 100% 100%;
    overflow: hidden;
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .img-wrapper {
      width: 100%;
      text-align: center;
      padding: $scss_72px $scss_196px $scss_120px;
      img {
        width: 100%;
      }
    }
    .nav {
      padding: 0 $scss_72px $scss_54px $scss_66px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          .link {
            position: relative;
            width: $scss_286px;
            height: $scss_70px;
            span {
              display: block;
              width: $scss_286px;
              height: $scss_70px;
              background-color: #008ed5;
              border-radius: 50px;
              border: solid 1px #fff;
              font-size: $scss_38px;
              line-height: $scss_70px;
              font-weight: 500;
              color: #fff;
              text-align: center;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.5;
              &.bg {
                position: relative;
                background-color: #20f0ec;
                top: 0;
                left: 0;
              }
            }
          }
          &.active {
            .link {
              span {
                opacity: 1;
                font-weight: 700;
                &.bg {
                  top: $scss_4px;
                  left: $scss_4px;
                }
              }
            }
          }
        }
      }
    }
    .list {
      width: 100%;
      flex: 1;
      padding-top: $scss_40px;
      padding-bottom: $scss_172px;
      overflow: auto;
      ul {
        max-height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: auto;
        padding: 0 $scss_42px;
        align-items: flex-start;
        li {
          width: $scss_325px;
          height: $scss_170px;
          position: relative;
          margin-bottom: $scss_48px;
        }
      }
    }
  }
}
</style>
