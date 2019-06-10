<template>
  <div class="index">
    <router-link to="/home"
                 tag="li">
      <div class="title">
        <div class="left">
          <i class="icon"></i>
          <span>城市机会</span>
        </div>
        <div class="right">
          <img src="../assets/img/logo-big@2x.png"
               alt="">
        </div>
      </div>
      <div class="content">
        <p>在全国率先提出应用场景理论，着力构建与新经济发展高度契合的“七大应用场景”，通过场景供给培育新技术、新模式落地的应用市场，为新经济企业提供入口机会，为广大市民提供情景体验。</p>
        <p>机会是应用场景的源泉和基础，应用场景则是城市机会在生产生活、城市治理等领域的具体化表现。为厚植新经济发展的市场沃土，推动产业扶持、企业发展从“给优惠”向“给机会”转变，让场景具象成为可感知、可视化、可参与的城市机会，我们在全国首创性提出“城市机会清单”</p>
        <img src="../assets/img/index-01.jpg"
             alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'index',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.index {
  width: 100%;
  background: url(../assets/img/bg.jpg) no-repeat left bottom;
  background-size: 100% 100%;
  color: #fff;
  font-size: $scss_28px;
  line-height: $scss_42px;
  padding: 0 $scss_56px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: $scss_152px;
    padding-bottom: $scss_34px;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: $scss_30px;
        height: $scss_30px;
        background-image: url(../assets/img/icon-deng@2x.png);
        background-size: 100% 100%;
      }
      span {
        font-size: $scss_56px;
        line-height: 1;
        padding-left: $scss_14px;
        font-weight: 700;
      }
    }
    .right {
      width: $scss_130px;
      img {
        width: 100%;
      }
    }
  }
  .content {
    p {
      text-indent: 2em;
    }
    img {
      padding-top: $scss_40px;
      width: 100%;
    }
  }
}
</style>
