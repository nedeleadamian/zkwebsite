<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/var.scss";
* {
  -webkit-tap-highlight-color: transparent;
}
img {
  user-select: none;
}
#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .home {
    background: #0f0811;
  }
}
.el-menu,
.el-menu:hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: none !important;
}
.el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #000 !important;
  height: 120px !important;
  line-height: 120px !important;
  font-size: 16px !important;
  border-bottom: none !important;
}
.mobile .el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #000 !important;
  height: 30px !important;
  line-height: 30px !important;
  font-size: 12px !important;
  border-bottom: none !important;
  text-transform: uppercase;
  margin-left: 30px;
}
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  color: #000d42 !important;
}
.page .status .el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #fff !important;
  border-bottom: none !important;
}
.page .status .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  color: #fff !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
  width: 100%;
  overflow-x: hidden;
  .swiperOuter {
    position: relative;
    .swiper-container {
      width: 1200px;
      overflow: hidden;
      margin: 0 auto;
    }
    .swiper-wrapper {
      position: relative;

      width: 1200px;
      // height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
    }

    .swiper-slide {
      flex-shrink: 0;
      width: 1200px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: space-between;
      img {
        width: 282px;
        height: 332px;
      }
    }
    .swiper-pagination {
      margin-top: 76px;
      width: 100%;
      .swiper-pagination-bullet {
        margin: 0 8px;
        width: 15px;
        height: 15px;
        background: #00aaff;
        opacity: 0.4;
        border-radius: 50%;
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }
  }
  .swiperPower {
    position: relative;
    margin-top: 100px;
    .swiper-container {
      width: 1080px;
      overflow: hidden;
      margin: 0 auto;
    }
    .swiper-wrapper {
      position: relative;

      width: 100%;
      // height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
    }

    .swiper-slide {
      flex-shrink: 0;
      width: 250px;
      height: 320px;
      background: #ffffff;
      border-radius: 14px;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
    }
    .swiper-road-prev {
      position: absolute;
      left: -100px;
      top: 140px;
      z-index: 100;
      cursor: pointer;
      img {
        width: 26px;
        height: 26px;
      }
    }
    .swiper-road-next {
      position: absolute;
      right: -100px;
      top: 140px;
      z-index: 100;
      cursor: pointer;
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
}
.pageMobile {
  width: 100%;
  overflow-x: hidden;
  .swiperOuter {
    position: relative;
    .swiper-container {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }
    .swiper-wrapper {
      position: relative;

      width: 100%;
      // height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
    }

    .swiper-slide {
      flex-shrink: 0;
      width: 100%;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: space-between;
      img {
        width: calc(50% - 10px);
        margin: 0 5px;
      }
    }
    .swiper-pagination {
      margin-top: 76px;
      width: 100%;
      .swiper-pagination-bullet {
        margin: 0 5px;
        width: 10px;
        height: 10px;
        background: #00aaff;
        opacity: 0.4;
        border-radius: 50%;
        &.swiper-pagination-bullet-active {
          opacity: 1;
        }
      }
    }
  }
  .swiperPower {
    position: relative;
    .swiper-container {
      width: 100%;
      overflow: hidden;
      margin: 0 auto;
    }
    .swiper-wrapper {
      position: relative;

      width: 100%;
      // height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
    }

    .swiper-slide {
      text-align: center;
      height: 86%;
      background: #cccdce;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 300ms;
      transform: scale(0.8);
    }
    .swiper-slide-active {
      z-index: 999 !important;
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1);
    }
    .swiper-slide-prev .s-right {
      display: none;
    }
    .swiper-slide-prev .s-left {
      // margin-left: 35%;
    }
    .swiper-slide-prev {
      background-color: #fff;
    }
    .swiper-slide-next {
      background-color: #fff;
    }
  }
}
</style>
