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
                  <span>需求清单(10)</span>
                </div>
              </li>
              <li :class="navIndex===1?'active':''">
                <div class="link"
                     @click.stop="clickNavGetsList">
                  <span class="bg"></span>
                  <span>供给清单(5)</span>
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
      cardData: [
        {
          id: 0,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 1,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 2,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 3,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 4,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 5,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 6,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 7,
          title: '服务实体经济',
          desc: '共35项'
        }
      ],
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
  },
  methods: {
    handleShowSearch () {
      this.isShowSearch = !this.isShowSearch
    },
    linkNav (index) {
      console.log(index)
      this.$router.push({
        path: '/choice'
      })
    },
    clickNavDemandsList () {
      this.navIndex = 0
      this.cardData = [
        {
          id: 0,
          title: '服务实体经济',
          desc: '共35项'
        },
        {
          id: 1,
          title: '服务实体经济',
          desc: '共35项'
        }
      ]
    },
    clickNavGetsList () {
      this.navIndex = 1
      this.cardData = [
        {
          id: 5,
          title: '服务实体经济',
          desc: '共30项'
        },
        {
          id: 6,
          title: '服务实体经济',
          desc: '共30项'
        },
        {
          id: 7,
          title: '服务实体经济',
          desc: '共30项'
        }
      ]
    },
    clickSearch () {
      console.log('clickSearch')
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
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: auto;
        padding: 0 $scss_42px;
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
