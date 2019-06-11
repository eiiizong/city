<template>
  <div class="choice">
    <TopNav />
    <div class="content">
      <transition v-if="showNav">
        <div class="list">
          <ul>
            <li v-for="(item, index) in cardData"
                class="animated rollIn rollout"
                :key="item.id">
              <Card className="big"
                    @click="clickNav(index)"
                    :data="item" />
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
import Card from '@/components/card.vue'

export default {
  name: 'chioce',
  data () {
    return {
      showNav: false,
      cardData: [
        {
          id: 1,
          iconClassName: 'icon-enterprise',
          title: '企业',
          desc: 'Translate'
        },
        {
          id: 2,
          iconClassName: 'icon-government',
          title: '政府',
          desc: 'Government'
        }
      ]
    }
  },
  components: {
    TopNav,
    Card
  },
  created () {
    setTimeout(() => {
      this.showNav = true
    }, 0)
  },
  methods: {
    clickNav (index) {
      this.$router.push({
        path: '/demandsTypeList'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.choice {
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
    overflow: auto;
    .list {
      padding: $scss_270px $scss_100px 0;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 100%;
          margin-bottom: $scss_48px;
        }
      }
    }
  }
}
</style>
