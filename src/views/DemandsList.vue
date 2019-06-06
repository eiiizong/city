<template>
  <div class="demands-list">
    <TopNav />
    <div class="content">
      <div class="img-wrapper">
        <img src="../assets/img/logo-big@2x.png"
             alt="logo">
      </div>
      <div class="nav">
        <ul>
          <li class="">
            <a href="#">
              <span class="bg"></span>
              <span>需求清单(10)</span>
            </a>
          </li>
          <li class="active">
            <a href="#">
              <span class="bg"></span>
              <span>供给清单(5)</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item, index) in 16"
              :key="index">
            <Card />
          </li>
        </ul>
      </div>
    </div>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
import Card from '@/components/card.vue'
import Search from '@/components/search.vue'

export default {
  name: 'demands-list',
  components: {
    TopNav,
    Card,
    Search
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
    overflow: auto;
    .img-wrapper {
      width: 100%;
      text-align: center;
      padding: $scss_72px $scss_196px $scss_120px;
      img {
        width: 100%;
      }
    }
    .nav {
      padding: 0 $scss_72px $scss_94px $scss_66px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          a {
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
              top: -$scss_70px;
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
            a {
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
      padding: 0 $scss_42px $scss_172px;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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
