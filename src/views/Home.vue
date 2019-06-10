<template>
  <div class="home">
    <transition v-if="showLogo">
      <div class="img-wrapper animated wobble rollIn">
        <img src="../assets/img/logo-big@2x.png"
             alt="logo">
      </div>
    </transition>

    <transition v-if="showNav">
      <div class="content">
        <ul>
          <li class="common animated wobble rollIn">
            <div class="img-wrapper animated wobble rollIn">
              <img src="../assets/img/city/chengdu.jpg"
                   alt="">
            </div>
            <div class="info">
              <p><span>成都</span><span>Chengdu</span></p>
              <div class="btn-wrapper">
                <router-link to="/demandsList">
                  <span class="bg"></span>
                  <span>点击进入</span>
                </router-link>
              </div>
            </div>
          </li>
          <li class="reverse animated wobble rollIn">
            <div class="img-wrapper animated wobble rollIn">
              <img src="../assets/img/city/deyang.jpg"
                   alt="">
            </div>
            <div class="info">
              <p><span>德阳</span><span>Deyang</span></p>
              <div class="btn-wrapper">
                <router-link to="/demandsList">
                  <span class="bg"></span>
                  <span>点击进入</span>
                </router-link>
              </div>
            </div>
          </li>
          <li class="common animated wobble rollIn">
            <div class="img-wrapper animated wobble rollIn">
              <img src="../assets/img/city/deyang.jpg"
                   alt="">
            </div>
            <div class="info">
              <p><span>德阳</span><span>Deyang</span></p>
              <div class="btn-wrapper">
                <router-link to="/demandsList">
                  <span class="bg"></span>
                  <span>点击进入</span>
                </router-link>
              </div>
            </div>
          </li>
          <li class="reverse animated wobble rollIn">
            <div class="img-wrapper animated wobble rollIn">
              <img src="../assets/img/city/deyang.jpg"
                   alt="">
            </div>
            <div class="info">
              <p><span>德阳</span><span>Deyang</span></p>
              <div class="btn-wrapper">
                <router-link to="/demandsList">
                  <span class="bg"></span>
                  <span>点击进入</span>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      showLogo: false,
      showNav: false
    }
  },
  created () {
    setTimeout(() => {
      this.showLogo = true
    }, 0)
    setTimeout(() => {
      this.showNav = true
    }, 1000)
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.home {
  width: 100%;
  height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat left bottom;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  .img-wrapper {
    width: 100%;
    text-align: center;
    padding: $scss_100px $scss_138px;
    img {
      width: 100%;
    }
  }
  .content {
    flex: 1;
    overflow: hidden;
  }
  ul {
    height: 100%;
    overflow: auto;
    padding: $scss_70px $scss_104px $scss_70px $scss_80px;
    li {
      width: 100%;
      min-height: $scss_200px;
      border: 1px solid #fff;
      margin-bottom: $scss_94px;
      position: relative;
      .img-wrapper {
        padding: 0;
        width: $scss_214px;
        height: $scss_214px;
        position: absolute;
        top: -$scss_54px;
      }
      .info {
        padding-left: $scss_320px;
        p {
          font-size: $scss_24px;
          line-height: 1;
          display: flex;
          align-items: flex-end;
          padding-top: $scss_28px;
          padding-bottom: $scss_34px;
          span {
            &:first-child {
              margin-right: $scss_10px;
              font-size: $scss_36px;
              font-weight: 700;
            }
          }
        }
        .btn-wrapper {
          a {
            position: relative;
            width: $scss_118px;
            height: $scss_40px;
            span {
              display: block;
              width: $scss_118px;
              height: $scss_40px;
              background-color: #008ed5;
              border-radius: $scss_5px;
              border: solid 1px #fff;
              font-size: $scss_22px;
              line-height: $scss_40px;
              color: #fff;
              text-align: center;
              position: absolute;
              top: -$scss_40px;
              left: 0;
              &.bg {
                position: relative;
                background-color: #20f0ec;
                top: $scss_3px;
                left: $scss_3px;
              }
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.common {
        .img-wrapper {
          left: $scss_38px;
        }
      }
      &.reverse {
        .img-wrapper {
          right: $scss_38px;
        }
        .info {
          padding-left: $scss_38px;
        }
      }
    }
  }
}
</style>
