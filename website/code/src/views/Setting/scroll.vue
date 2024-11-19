<template>
  <div>
    <vue-seamless-scroll
      :data="list"
      class="seamless-warp seamless-warp-mobile"
      :class-option="optionSingleHeightTime"
    >
      <!-- 在需要添加点击事件的元素上绑定 :data-obj="JSON.stringify(item)" 否则事件无法触发且会抱错 -->
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        :data-obj="JSON.stringify(item)"
      >
      <img
                  :src="item.src"
                  alt="">
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
        limitMoveNum: 5, // 开始无缝滚动的数据量
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
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
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          },{
              src: require('@/assets/imgs/img_ba@2x.png'),
          },{
              src: require('@/assets/imgs/img_lott@2x.png'),
          },{
              src: require('@/assets/imgs/img_mira@2x.png'),
          },{
              src: require('@/assets/imgs/img_spar@2x.png'),
          },{
              src: require('@/assets/imgs/img_mult@2x.png'),
          }],
    }
  },
}
</script>

<style lang="scss">
.seamless-warp-mobile {
  height: 100%;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  .item {
  margin-right: 40PX;
  display: inline-block;
  width: 100Px;
  img{
            display: block;
            height: 25PX;
           
        }
}
}
.seamless-warp-mobile > div {
  // display: flex;
  // flex-wrap: wrap;
  
  
}
.seamless-warp-mobile > div > div {
 // margin-right: 10Px;
  width: 400Px !important;
  display: inline-block;
  // overflow: auto !important;
}


</style>