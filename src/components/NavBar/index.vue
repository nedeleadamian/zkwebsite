<template>
  <nav id="page-left" :class="{ en: type === 'en' }">
    <div :class="{ con: true, sub: origin !== 'page' }">
      <div class="logo">
        <a href="https://portal.openzk.net">
          <img src="@/assets/imgs/logo@2x.png" alt="" />
        </a>
      </div>
      <div class="list">
        <div
          v-for="(item, index) in bars"
          :key="index"
          :class="{ current: barsIndex === index }"
          class="item"
          @click="handleRoute(index, item.path)"
        >
          <a :href="item.path">
            {{ item.en }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    origin: {
      type: String,
      default: "page",
    },
  },
  data() {
    return {
      bars: [
        {
          path: "https://portal.openzk.net/aboutus",
          cn: "About Us",
          en: "About Us",
        },
        {
          path: "https://portal.openzk.net/airdrop",
          cn: "Airdrop",
          en: "Airdrop",
        },
        {
          path: "https://portal.openzk.net/bridge",
          cn: "Bridge",
          en: "Bridge",
        },
        {
          path: "https://www.testnet.openzkbeta.click/",
          cn: "Explorer",
          en: "Explorer",
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
  watch: {
    $route: {
      handler(val, oldval) {
        console.log(val); //新路由信息
        console.log(oldval); //老路由信息
      },
      // 深度观察监听
      deep: true,
    },
  },
  created() {
    this.path = this.$route.path;
    this.type = localStorage.getItem("language") || "en";
  },
  methods: {
    selectIndex(path) {
      this.path = path;
      this.$router.push(path);
    },
    hanleChangeLanguage() {
      const type = localStorage.getItem("language") === "en" ? "cn" : "en";
      this.type = type;
      localStorage.setItem("language", type);
      this.$emit("changeLanguage", type);
    },
    handleRoute(index, path) {
      console.info(path, "00000000000000");
      this.barsIndex = index;
      // this.$router.push({ path: path });
    },
  },
};
</script>

<style lang="scss">
nav {
  height: 110px;
  line-height: 110px;
  // position: fixed;
  // left:0;
  // top:0;
  width: 100%;
  z-index: 100088888888;
  position: relative;
  .con {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1300px;
    margin: 0 auto;
    height: 110px;
    &.sub {
      justify-content: space-between;
    }
    .logo {
      img {
        width: 176px;
        margin-top: 38px;
      }
    }
    .list {
      line-height: 110px;
      height: 110px;
      display: flex;
      flex-direction: row;
      margin-left: 20px;
      .item {
        padding: 0 25px;
        cursor: pointer;
        a {
          text-decoration: none;
          font-family: Montserrat;
          font-weight: 500;
          font-size: 18px;
          color: #ffffff;
        }
        &.current,
        &:hover {
          a {
            img {
              transform: rotate(90deg);
            }
          }
        }
      }
      .WALLET {
        padding: 0 25px;
        cursor: pointer;
        .el-dropdown-link {
          text-decoration: none;
          font-family: Montserrat;
          font-weight: bold;
          color: #14212b;
          text-transform: uppercase;
          position: relative;
          height: 180px;
          display: inline-block;
          font-size: 20px;
          span {
            margin-left: 10px;
          }
        }
        &.current,
        &:hover {
          a {
            img {
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }
  &.status {
    box-shadow: 0px 2px 48px 0px rgba(0, 0, 0, 0.06);
  }
  &.en {
    a {
      font-family: Montserrat;
    }
  }
}
.el-dropdown-menu {
  margin-top: -70px !important;
  width: 140px !important;
  li {
    a {
      text-decoration: none;
      font-family: Montserrat;
      font-weight: bold;
      color: #14212b;
      position: relative;
      height: 60px;
      line-height: 60px;
      display: inline-block;
      font-size: 20px;
    }
  }
}
</style>
