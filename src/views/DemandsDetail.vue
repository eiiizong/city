<template>
  <div class="demands-detail">
    <TopNav iconClassName="icon-backMenu"
            rightText="回到目录" />
    <div class="content">
      <div class="top">
        <img src="../assets/img/detail-bg.jpg"
             alt="logo">
        <div class="info">
          <div class="title">郫都区万云汇互联网娱乐云计算产业基地项目</div>
          <div class="name">
            <span class="tag">融资需求</span>
            <span>成都国民沃成半导体有限公司</span>
          </div>
        </div>
      </div>

      <div class="main">
        <ul>
          <li v-for="item in detailData"
              :key="item.id">
            <div class="left">【{{item.title}}】</div>
            <div class="right">
              <span>{{item.desc}}</span>
              <span v-if="item.contact">{{item.contact}}</span>
            </div>
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

export default {
  name: 'demands-list',
  data () {
    return {
      detailData: [
        {
          id: 0,
          title: '需求需要',
          desc: '利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000'
        },
        {
          id: 1,
          title: '总投资额',
          desc: '150000万元 '
        },
        {
          id: 2,
          title: '融资需求',
          desc: '5000万元 '
        },
        {
          id: 3,
          title: '联系方式',
          desc: '成都国民天成半导体有限公司',
          contact: '张站峰  13880813191'
        },
        {
          id: 4,
          title: '建设模式',
          desc: '政府和企业出资共建'
        }
      ]
    }
  },
  components: {
    TopNav
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-detail {
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    width: 100%;
    overflow: auto;
    .top {
      position: relative;
      height: $scss_158px;
      img {
        width: 100%;
      }
      .info {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 $scss_30px;
        font-size: $scss_34px;
        line-height: $scss_42px;
        color: #fff;
        font-weight: 700;
        .title {
          color: #fff;
          padding-top: $scss_40px;
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
      }
    }
  }
  .main {
    ul {
      li {
        display: flex;
        padding: 0 $scss_30px;
        font-size: $scss_28px;
        font-weight: 500;
        line-height: $scss_42px;
        color: #010101;
        // align-items: center;
        padding-top: $scss_50px;
        min-height: $scss_132px;
        .left {
          width: $scss_172px;
        }
        .right {
          flex: 1;
          border-bottom: 1px solid #edeff2;
          padding-bottom: $scss_30px;
          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
