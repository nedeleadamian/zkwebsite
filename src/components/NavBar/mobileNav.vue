<template>
  <nav id="page-left" :class="{ 'page-left': true, status: status }">
    <div class="logo">
      <img src="@/assets/imgs/logo@2x.png" alt="" />
    </div>
    <div class="menu" @click="handleMenu">
      <svg-icon v-if="!menuShow" class="icon" icon-class="menu" />
      <svg-icon v-else="menuShow" class="close" icon-class="close" />
    </div>
    <div v-if="menuShow" class="list">
      <div v-if="origin === 'page'">
        <div
          v-for="(item, index) in bars"
          :key="index"
          class="item"
          :class="{ current: barsIndex === index }"
          @click="handleRoute(index, item.path)"
        >
          <a :href="item.path"><span></span>{{ item.cn }}</a>
        </div>
        <div class="item" @click="handleDownloadApk">
          <a><span></span> Download</a>
        </div>
      </div>
      <div v-else>
        <div class="item" @click="handleRoute(index, 'mobile')">
          <a href="javascript:">Back to home</a>
        </div>
      </div>

      <!-- <el-menu class="el-menu-demo" mode="horizontal" @select="hanleChangeLanguage">
                    <el-submenu index="2">
                        <template slot="title">langnage</template>
                        <el-menu-item 
                            v-for="(item, index) in list" 
                            :key="index" :index="item.type">
                            {{item.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu> -->
    </div>
    <div v-if="menuShow" class="topBg" />
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    langnage: {
      type: String,
      default: () => "cn",
    },
    status: {
      type: Boolean,
      default: false,
    },
    origin: {
      type: String,
      default: "page",
    },
  },
  data() {
    return {
      menuShow: false,
      bars: [
        {
          path: "#Home",
          cn: "Home",
          en: "Home",
        },
        {
          path: "#About",
          cn: "About",
          en: "About",
        },
        {
          path: "#Features",
          cn: "Features",
          en: "Features",
        },
        {
          path: "#Features",
          cn: "Features",
          en: "Features",
        },
        {
          path: "#Tools",
          cn: "Tools",
          en: "Tools",
        },
        {
          path: "#Team",
          cn: "Team",
          en: "Team",
        },
        {
          path: "#FAQ",
          cn: "FAQ",
          en: "FAQ",
        },
        {
          path: "#Roadmap",
          cn: "Roadmap",
          en: "Roadmap",
        },
      ],
      list: [
        {
          name: "English",
          type: "en",
        },
        {
          name: "中文简体",
          type: "cn",
        },
      ],
      barsIndex: 0,
      type: "en",
    };
  },
  created() {
    this.path = this.$route.path;
    this.type = localStorage.getItem("language") || "en";
  },
  methods: {
    //下载安装包
    handleDownloadApk() {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        window.location.href =
          "itms-services://?action=download-manifest&url=" +
          window.location.origin +
          window.location.pathname +
          "static/pdf/ios.plist";
      } else if (/(Android)/i.test(navigator.userAgent)) {
        //alert(navigator.userAgent);
        window.location.href =
          window.location.origin +
          window.location.pathname +
          "static/pdf/nft.apk";
      } else {
        window.location.href =
          window.location.origin +
          window.location.pathname +
          "static/pdf/nft.apk";
      }
    },
    handlePdfRoute() {
      if (this.langnage == "cn") {
        window.location.href =
          window.location.origin +
          window.location.pathname +
          "static/pdf/Solana60-pitchdeck.pdf";
      } else {
        window.location.href =
          window.location.origin +
          window.location.pathname +
          "static/pdf/Solana60-pitchdeck.pdf";
      }
    },
    selectIndex(path) {
      this.path = path;
      this.$router.push(path);
    },
    hanleChangeLanguage() {
      this.type = type;
      const type = localStorage.getItem("language") === "en" ? "cn" : "en";
      localStorage.setItem("language", type);
      this.$emit("changeLanguage", type);
    },
    handleMenu() {
      this.menuShow = !this.menuShow;
    },
    handleRoute(index, path) {
      this.barsIndex = index;
      this.$router.push({ path: path });
      this.menuShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-left {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #0e0808;

  .menu .icon {
    width: 300px;
    height: 120px;
    margin-right: 15px;
    fill: #fff;
    .svg-icon {
      width: 100px;
    }
  }
  .menu .close {
    width: 300px;
    height: 60px;
    margin-right: 25px;
    fill: #2162de;
  }
  .logo {
    margin-left: 20px;
    vertical-align: middle;
    margin-top: 10px;
    img {
      width: 100px;
    }
  }
}
.WALLET {
  .el-dropdown-link {
    font-size: 80px;
    color: #000;
    margin-left: 80px;
  }
}
.el-dropdown-menu {
  margin-top: -70px !important;
  width: 300px !important;
  li {
    a {
      text-decoration: none;
      font-family: "Alibaba PuHuiTi";
      font-weight: bold;
      color: #14212b;
      position: relative;
      height: 120px;
      line-height: 120px;
      display: inline-block;
      font-size: 70px;
    }
  }
}

.list {
  line-height: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 200px;
  background: #fff;
  width: 100%;
  height: calc(100vh - 55px);
  box-shadow: 0px 0px 36px 4px rgba(181, 186, 196, 0.17);
  text-transform: uppercase;
  .item {
    font-size: 15px;
    color: #58c1f0;
    cursor: pointer;
    line-height: 40px;

    font-weight: 400;
    margin-left: 20px;
    font-family: "Alibaba PuHuiTi";
    a {
      color: #0e0808;
      text-decoration: none;
      display: block;
      position: relative;
      text-indent: 10px;
    }
  }
  .Download {
    font-size: 80px;
    color: #000;
    cursor: pointer;
    line-height: 140px;

    font-weight: 400;
    margin-left: 80px;
    font-family: "Alibaba PuHuiTi";
  }
  .line {
    width: 50px;
    background: rgba(157, 159, 161, 0.8);
    margin: 40px 0 0 20px;
    height: 1px;
  }
}
.topBg {
  position: fixed;
  left: 0;
  top: 30px;
  width: 100%;
  height: 10px;
  box-shadow: 0px 60px 60px 0 #5f8afa;
}
nav {
  height: 50px;
  box-shadow: 0px 0px 36px 4px rgba(181, 186, 196, 0.17);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  line-height: 50px;

  .changeBtn img {
    margin-top: -2px;
    display: inline-block;
    vertical-align: middle;
  }
  &.status {
    box-shadow: none;
    .icon {
      fill: #fff;
    }
    .con .list div {
      color: #fff;
    }
  }
}
</style>
