<template>
  <div id="app">
    <div class="audio">
      <audio controls="controls"
             autoplay="autoplay"
             loop="loop"
             src="http://m10.music.126.net/20190610171418/3d8b5ae7b75febcf5d7209e2839b4dfb/ymusic/0058/040b/545d/72286584453a50dd83d7c71b769c6f59.mp3"
             ref="audio">您的浏览器不支持 audio 标签。</audio>
      <i class="icon icon-audio"
         :class="musicIsPlay?'animation':''"
         @click="handleMusic"></i>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      musicIsPlay: true
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    handleMusic () {
      console.log(1111)
      if (this.musicIsPlay) {
        this.$refs.audio.pause()
        this.musicIsPlay = !this.musicIsPlay
      } else {
        this.$refs.audio.play()
        this.musicIsPlay = !this.musicIsPlay
      }
    }
  }
}
</script>

<style lang="scss">
@import url("./static/style/normalize.scss");
@import url("./static/style/common.scss");
@import "./static/style/variable.scss";
.audio {
  height: 0;
  position: fixed;
  top: 50px;
  right: 10px;
  z-index: 999;
}
audio {
  display: none;
}
.icon-audio {
  display: block;
  width: $scss_100px;
  height: $scss_100px;
  border-radius: 50%;
  background: url(assets/img/icon-music.png) no-repeat #fff;
  background-size: 100% 100%;
  -webkit-animation: music 5s linear;
  &.animation {
    -webkit-animation: music 5s linear infinite;
  }
}

@-webkit-keyframes music {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
