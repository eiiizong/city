<template>
  <div class="home">
    <div class="img-wrapper">
      <img src="../assets/img/logo-big@2x.png"
           alt="logo">
    </div>
    <ul>
      <li class="common">
        <div class="img-wrapper">
          <img src="../assets/img/img-01.jpg"
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
      <li class="reverse">
        <div class="img-wrapper">
          <img src="../assets/img/img-01.jpg"
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
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.home {
  width: 100%;
  background: url(../assets/img/bg.jpg) no-repeat left bottom;
  background-size: cover;
  color: #fff;
  .img-wrapper {
    width: 100%;
    text-align: center;
    padding: $scss_244px $scss_138px $scss_170px;
    img {
      width: 100%;
    }
  }
  ul {
    padding: 0 $scss_104px 0 $scss_80px;
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
