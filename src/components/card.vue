<template>
  <div class="card"
       v-if="data"
       :class="className?className:''">
    <div class="border-bg"></div>
    <div class="content">
      <div class="left">
        <i class="icon"
           :class="data.iconClassName"></i>
      </div>
      <div class="right">
        <p>{{data.title}}</p>
        <span>{{data.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    className: {
      type: String,
      default: ''
    },
    data: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../static/style/variable.scss";
.card {
  width: $scss_325px;
  height: $scss_170px;
  position: relative;
  margin-bottom: $scss_48px;
  .border-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f0f;
    z-index: 1;
    background: url(../assets/img/border-bg@2x.png) no-repeat left top;
    background-size: 100% 100%;
  }
  .content {
    display: flex;
    position: absolute;
    top: $scss_10px;
    left: $scss_10px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, #00c8d5 0%, #008ed5 100%),
      linear-gradient(#008ed5, #008ed5);
    font-size: $scss_32px;
    line-height: $scss_38px;
    align-items: center;
    .left {
      padding-left: $scss_16px;
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      margin-left: $scss_10px;
      padding-right: $scss_24px;
      span {
        width: 100%;
        font-size: $scss_22px;
        line-height: 1;
        padding-top: $scss_14px;
      }
    }
  }
  .icon {
    display: block;
    width: $scss_76px;
    height: $scss_80px;
    background-image: url(../assets/img/icon-kjcxcy@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
  }
  &.big {
    width: 100%;
    height: $scss_218px;
    margin-bottom: 0;
    .content {
      font-weight: 700;
      line-height: 1;
      .left {
        padding-left: $scss_76px;
        .icon {
          width: $scss_90px;
          height: $scss_84px;
        }
      }
      .right {
        margin-left: $scss_56px;
        span {
          width: 100%;
          font-size: $scss_32px;
          line-height: 1;
          padding-top: $scss_14px;
        }
      }
    }
  }
}
</style>
