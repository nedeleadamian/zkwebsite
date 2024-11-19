<template>
  <div>
    <vue-seamless-scroll
      :data="list"
      class="seamless-warp-img"
      :class-option="optionSingleHeightTime"
    >
      <!-- 在需要添加点击事件的元素上绑定 :data-obj="JSON.stringify(item)" 否则事件无法触发且会抱错 -->
      <div
        class="item "
        v-for="(item, index) in list"
        :key="index"
        :data-obj="JSON.stringify(item)"
      >
        <div class="swiperCon">
          <div class="left">
            <img
              :src="item.one"
              alt="">
          </div>
          <div class="right">
            <img class="one"
              :src="item.two"
              alt="">
            <img
              :src="item.three"
              alt="">
          </div>
        </div>
      </div>
    </vue-seamless-scroll>
  </div>

</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
  name: 'test',
  components: {
    vueSeamlessScroll,
  },
  computed: {
    optionSingleHeightTime() {
      return {
        // singleHeight: 50,
        // waitTime: 1500,
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 3, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动)
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动)
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      }
    },
  },
  data() {
    return {
      list: [{
          one: require('@/assets/imgs/img_zp1@2x.png'),
          two: require('@/assets/imgs/img_zp2@2x.png'),
          three: require('@/assets/imgs/img_zp3@2x.png'),
      },{
          one: require('@/assets/imgs/img_zp4@2x.png'),
          two: require('@/assets/imgs/img_zp5@2x.png'),
          three: require('@/assets/imgs/img_zp6@2x.png'),
      },{
          one: require('@/assets/imgs/img_zp1@2x.png'),
          two: require('@/assets/imgs/img_zp2@2x.png'),
          three: require('@/assets/imgs/img_zp3@2x.png'),
      },{
          one: require('@/assets/imgs/img_zp4@2x.png'),
          two: require('@/assets/imgs/img_zp5@2x.png'),
          three: require('@/assets/imgs/img_zp6@2x.png'),
      },],
    }
  },
}
</script>

<style  lang="scss">
.seamless-warp-img {
  height: 100%;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  margin-top: 45px;
  .item {
  display: inline-block;
}
.swiperCon{
  display: flex;
  flex-direction: row;
    .left{
      margin-right: 16px;
      margin-left: 16px;
      img{
        width: 362px;
      }
    }
    .right{
      display: flex;
      flex-direction: column;
      .one{
        margin-bottom: 16px;
      }
      img{
        width: 261px;
      }
    }
  }
}
.seamless-warp-img > div {
  display: flex;
}

</style>