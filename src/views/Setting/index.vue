<template>
  <div class="page">
    <NavBar id="home" :langnage="langnage" :status="status" @changeLanguage="hanleChangeLanguage" />
    <div id="Home" class="banner">
      <star></star>
      <div class="bg">
        <img src="@/assets/imgs/banner.png" alt="">
      </div>
      <div class="con">
        <div class="left">
          <div class="one">
            Shaping the Future of Blockchain:
          </div>
          <div class="two">
            OpenZK Network's
          </div>
          <div class="three">
            Leading Layer 2 Solution
          </div>
          <div class="four">
            OpenZK is the first Layer 2 solution on ZK rollup technology to unite ETH staking, liquid restaking, and
            stablecoin rewards in one seamless platform. Built for superior performance in DeFi, Real-Word Assets, and
            trading applications.
          </div>
        </div>
        <div class="right">
          <div class="one">
            <div class="btn">
              <div class="btnBg" />
              <div class="btnCon">
                <img class="arrow" src="@/assets/imgs/bg.png" alt="">
              </div>
            </div>
            <div class="intro">
              Testnet available now</br>Airdrop points and Multipliers for early participants upon Mainnet launch
            </div>
          </div>
          <div class="two">
            <div class="btnGroup">
              <div class="btn" @click="currentIntro = 1">
                <img class="icon" src="@/assets/imgs/icon_eth@2x.png" alt=""> ETH <span>5.9</span>%
              </div>
              <div class="btn" @click="currentIntro = 2">
                <img class="icon" src="@/assets/imgs/icon_btc@2x.png" alt=""> Stablecoins <span>8.5</span>%
              </div>
            </div>
            <div v-if="currentIntro === 1" class="intro introOne">
              5.9% ETH earn via mainnet staking and liquid restaking plus <span>Airdrop Points</span>
            </div>
            <div v-else class="intro introTne">
              8.5% Stablecoin earn via Defi and RWA protocols plus <span>Airdrop Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Tags" class="Tags  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <marqueeLeft />
      </div>
    </div>
    <div id="About" class="Abouts  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <div class="title">
          OpenZK Overview
        </div>
        <swiper ref="myRoadSwiper" class="swiperOptions swiper-container itemList" :options="swiperAboutOptions">
          <swiper-slide v-for="(item, index) in AboutList" :key="index" class="swiperSlide item">
            <div class="itemSlide">
              <img :src="item.src" alt="">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="content">
                {{ item.content }}
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiperOuter">
          <div class="btns">
            <div class="swiper-about-prev">
              <img src="@/assets/imgs/icon_syy@2x.png" alt="">
            </div>
            <div class="swiper-about-next">
              <img src="@/assets/imgs/icon_xyy@2x.png" alt="">
            </div>
          </div>
        </div>
        <!-- <div class="aboutBottom">
          Fast and Low-Cost Transactions
          <div class="btn" @click="handlePdfRoute">
            <div class="btnBg" />
            <div class="btnCon">
              Check Whitepaper <img src="@/assets/imgs/icon_anjt.png" alt=""></span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div id="Features" class="Features  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <div class="title">
          Key Features
        </div>
        <swiper ref="myRoadSwiper" class="swiperOptions swiper-container itemList" :options="swiperFeatureOptions">
          <swiper-slide v-for="(item, index) in FeaturesOneList" :key="index" class="swiperSlide item">
            <div class="itemSlide">
              <div class="name">
                {{ item.name }}
              </div>
              <div class="content" v-html="item.content" />
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiperOuter">
          <div class="btns">
            <div class="swiper-feature-prev">
              <img src="@/assets/imgs/icon_syy@2x.png" alt="">
            </div>
            <div class="swiper-feature-next">
              <img src="@/assets/imgs/icon_xyy@2x.png" alt="">
            </div>
          </div>
        </div>
        <!-- <div class="itemTwoList">
              <div class="item" v-for="(item,index) in FeaturesTwoList" :key="index">
                  <div class="name" v-html="item.name"></div>
                  <div class="content">{{ item.content }}</div>
              </div>
            </div> -->
        <div class="btn">
          <div class="btnBg" />
          <div class="btnCon">
            <img class="text" src="@/assets/imgs/StakeNow@2x.png" alt="">
          </div>
        </div>
        <div class="intro">
          ...
        </div>
        <div class="detail">
          Stake now to earn ETH from Ethereum mainnet staking and liquid restaking, stablecoin reward from Defi and RWA
          protocols, and collect Airdrop Points for airdrop!
        </div>
      </div>
    </div>
    <div id="Tools" class="Tools  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <div class="title">
          Developer Tools
        </div>
        <div class="itemList">
          <div v-for="(item, index) in ToolsList" :key="index" class="item">
            <img class="img" :src="item.src" alt="">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="itemContent">
              <img class="icon" src="@/assets/imgs/icon_xjt@2x.png" alt="">
              <div class="content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Team" class="Team  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <div class="title">
          Team
        </div>
        <div class="intro">
          Bringing together world-class engineers, blockchain architects, and product specialists with deep expertise in
          Layer 2 scaling solutions and DeFi protocols, the OpenZK Network team is united by its passion for innovation
          and is committed to building the infrastructure that will power the next generation of decentralized
          applications.
        </div>
        <swiper ref="myRoadSwiper" class="swiperOptions swiper-container itemList" :options="swiperTeamOptions">
          <swiper-slide v-for="(item, index) in TeamList" :key="index" class="item swiperSlide">
            <div class="avtar-outer">
              <img class="avtar" :src="item.src" alt="">
              <img class="tag" src="@/assets/imgs/icon_team_in@2x.png" alt="">
            </div>
            <div class="name">
              {{ item.name }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiperOuter">
          <div class="btns">
            <div class="swiper-team-prev">
              <img src="@/assets/imgs/icon_syy@2x.png" alt="">
            </div>
            <div class="swiper-team-next">
              <img src="@/assets/imgs/icon_xyy@2x.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
            id="Events"
            class="Events  wow fadeInUp "
            data-wow-delay="200ms"
            data-wow-duration="2000ms">
            <div class="con">
                <div class="title">
                    Events </br> Around the World
                </div>
                <div class="intro">
                    The <span>OpenZK</span> community gets together around the world. We can't wait to see you at a future event!
                </div>
                <swiper
                    ref="myRoadSwiper"
                    class="swiperOptions swiper-container "
                    :options="swiperOption">
                    <swiper-slide class="swiperSlide">
                        <div class="swiperCon">
                            <div class="left">
                                <img
                                    src="@/assets/imgs/img_zp1@2x.png"
                                    alt="">
                            </div>
                            <div class="right">
                                <img
                                    class="one"
                                    src="@/assets/imgs/img_zp2@2x.png"
                                    alt="">
                                <img
                                    src="@/assets/imgs/img_zp3@2x.png"
                                    alt="">
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiperSlide">
                        <div class="swiperCon">
                            <div class="left">
                                <img
                                    src="@/assets/imgs/img_zp4@2x.png"
                                    alt="">
                            </div>
                            <div class="right">
                                <img
                                    class="one"
                                    src="@/assets/imgs/img_zp5@2x.png"
                                    alt="">
                                <img
                                    src="@/assets/imgs/img_zp6@2x.png"
                                    alt="">
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="swiperOuter">
                    <div class="btns">
                        <div
                            class="swiper-road-prev">
                            <img
                                src="@/assets/imgs/icon_syy@2x.png"
                                alt="">
                        </div>
                        <div
                            class="swiper-road-next">
                            <img
                                src="@/assets/imgs/icon_xyy@2x.png"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="Roadmap"
            class="Roadmap  wow fadeInUp "
            data-wow-delay="200ms"
            data-wow-duration="2000ms">
            <div class="con">
                <div class="title">
                    Roadmap
                </div>
                <div class="itemList">
                    <div
                        v-for="(item,index) in RoadmapList"
                        :key="index"
                        class="item">
                        <img
                            src="@/assets/imgs/img_phase_zs@2x.png"
                            alt="">
                        <div class="name">
                            {{ item.name }}
                        </div>
                        <div class="content">
                            {{ item.content }}
                        </div>
                        <div
                            class="detail"
                            v-html="item.intro" />
                    </div>
                </div>
            </div>
        </div> -->
    <!-- <div
            id="Community"
            class="Community  wow fadeInUp "
            data-wow-delay="200ms"
            data-wow-duration="2000ms">
            <div class="con">
                <div class="title">
                    Community & News
                </div>
                <div class="itemList">
                    <div
                        v-for="(item,index) in CommunityList"
                        :key="index"
                        class="item">
                        <div class="name">
                            {{ item.name }}
                        </div>
                        <div class="content">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <div id="FAQ" class="FAQ  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <div class="title">
          Frequently Asked </br> Questions (FAQ)
        </div>
        <div class="itemList">
          <div v-for="(item, index) in FAQList" :key="index" class="item" @click="handleToggleFaq(item)">
            <div class="name">
              {{ item.name }}
            </div>
            <img v-if="item.show" src="@/assets/imgs/icon_faq_sq@2x.png" alt="">
            <img v-if="!item.show" src="@/assets/imgs/icon_faq_zk@2x.png" alt="">
            <div v-if="item.show" class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom" class="bottom  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="2000ms">
      <div class="con">
        <a class="left" href="#Home">
          <img src="@/assets/imgs/logo@2x.png" alt="">
        </a>
        <div class="right">
          <div class="itemList">
            <div v-for="(item, index) in bars" :key="index" class="item" @click="handleRoute(index, item.path)">
              <a :href="item.path">
                <span />{{ item.cn }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyRight">
      Copyright @ 2024 All Right Reserved, OpenZK
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import NavBar from '@/components/NavBar/mobileNav.vue'
import marqueeLeft from "./scroll.vue";
import star from "../Page/star.vue";
let timer = null;
export default {
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    marqueeLeft,
    star
  },
  data() {
    return {
      currentIntro: 1,
      AboutList: [{
        src: require('@/assets/imgs/icon_drivi_1@2x.png'),
        name: "Driving the Change",
        content: "OpenZK's Rollup solution addresses the core challenges of blockchain - scalability, cost efficiency and security. Additionally, we integrate the ZK Rollup technology with native ETH mainnet staking, liquid restaking and stablecoin earn to further driving the mass adoption of the L2."
      }, {
        src: require('@/assets/imgs/icon_future_2@2x.png'),
        name: "Future Blueprint",
        content: "OpenZK Network is committed to building a scalable, efficient Layer 2 network using zero-knowledge proof technology, to offer unmatched oppurtunity for DeFi, RWA and high-frequency trading applications."
      }, {
        src: require('@/assets/imgs/icon_pione_3@2x.png'),
        name: "Pioneering Technological  Innovation",
        content: "OpenZK Network is a Layer 2 solution based on ZK Rollup technology. Leveraging zk-SNARK and account abstraction, we provide developers with a powerful, Ethereum-compatible smart contract platform. With a unique cross-chain bridge and native staking rewarding mechanism, OpenZK brings unmatched scalability and flexibility."
      }],
      FeaturesOneList: [{
        name: "Native ETH Staking Reward",
        content: "With OpenZK Network's Layer 2 solution, users can stake ETH and earn native rewards from Ethereum mainnet as well as liquid restaking. Unlike other Layer 2 solutions, OpenZK intergrates direct rewards from native ETH Staking and restaking via L2, providing low-cost, high-reward opportunities for DeFi users.<p>· Competitive Staking Reward: Stake ETH and earn native reward from Ethereum mainnet plus additional restaking reward.</p><p>· Low Cost, High Returns: Reduce transaction fees with Layer 2 technology while maximizing staking and restaking rewards.</p><p>· Secure and Decentralized: ZK Rollup technology ensures the efficiency and security of transactions, anchored by Ethereum's robust security.</p>"
      }, {
        name: "ETH Restaking and Stablecoin Staking",
        content: "Open ZK combines additional liquid staking opportunities with native ETH staking to maximise earning potential while supporting decentralization and the security of the Ethereum ecosystem.</p><p>Open ZK also integrates multidimensional stablecoin staking options from Defi and RWA protocols, allowing users to stake stablecoins via OpenZK and benefit from staking rewards while maintaining liquidity.</p><p>· Beyond Staking: OpenZK's native ETH staking solutions integrate both staking and restaking in a single click.</p><p>· Maximise Earning Potential: Enjoy the benefits of both staking/restaking rewards and the flexibility afforded by Defi and RWA protocols.</p><p>· Diverse Opportunities and Liquidity: Unlock the potential of staked ETH or stablecoin for even greater utility, liquidity and rewards.</p>"
      }],
      FeaturesTwoList: [{
        name: "Cross-chain</br>Interoperability",
        content: "Our native cross-chain bridge enables seamless asset and data transfers between multiple blockchains, enhancing collaboration and functionality across ecosystems. OpenZK breaks the barriers of isolated blockchains, supporting more cross-chain financial applications."
      }, {
        name: "Security Model",
        content: "OpenZK's Rollup solution uses zk-SNARKs to prove the validity of each batch of transactions. This prevents the possibility offraud byensuring that all transactions are verified before being finalized on Ethereum."
      }, {
        name: "Native Tokenomics</br> (OZK Tokenomics)",
        content: "OZKis the native token for openZK Network, plavina a critical role in alianina incentives within the ecosvstem.oZK servesmultiple utilities including governance rights, stakingincentives, deflationary model, and potentialnetwork fee mechanisms."
      }],
      ToolsList: [{
        src: require('@/assets/imgs/icon_tools_1@2x.png'),
        name: "Robust Development Environment",
        content: "OpenZK Network offers a fully Ethereum-compatible Layer 2 development environment. Developers can easily migrate and deploy smart contracts, using our comprehensive toolkit to accelerate the development and iteration of decentralized applications (dApps)."
      }, {
        src: require('@/assets/imgs/icon_tools_2@2x.png'),
        name: "Testnet & Mainnet Support",
        content: "We provide a complete testnet and mainnet environment, allowing developers to build and validate their smart contracts in a test environment before seamlessly deploying them to the mainnet."
      }, {
        src: require('@/assets/imgs/icon_tools_3@2x.png'),
        name: "Smart Contract Compilation & Debugging",
        content: "With our debugging tools, developers can efficiently compile, debug, and test their smart contracts to optimize dApp performance and enhance user experience."
      }],
      TeamList: [{
        src: require('@/assets/imgs/img_tx_1@2x.png'),
        name: "Dave Sandor",
        content: "Co Founder"
      }, {
        src: require('@/assets/imgs/img_tx_2@2x.png'),
        name: "Lucas Cullen",
        content: "Chief Technology Officer (CTO)"
      }, {
        src: require('@/assets/imgs/img_tx_3@2x.png'),
        name: "Jenna Wayne",
        content: "Founder",
        fadeInRight: true,
      },
      {
        src: require('@/assets/imgs/img_tx_4@2x.png'),
        name: "John Newham",
        content: "Social Media Lead",
        fadeInRight: true,
      },
      {
        src: require('@/assets/imgs/img_tx_5@2x.png'),
        name: "Neil Dundon",
        content: "Strategic Advisor",
        fadeInRight: true,
      },
      {
        src: require('@/assets/imgs/img_tx_6@2x.png'),
        name: "Victor Hsu",
        content: "Software Engineer",
        fadeInRight: true,
      },
      {
        src: require('@/assets/imgs/img_tx_7@2x.png'),
        name: "Sam Annavi",
        content: "Blockchain Lead",
        fadeInRight: true,
      }],
      RoadmapList: [{
        name: "Phase 1",
        content: "Core Infrastructure Development",
        intro: "<p>· Implementation of ZK Rollup scalability features</p><p>· Launch of the testnet environment for developers</p><p>· Launch of developer tools for seamless dApp migration</p>"

      }, {
        name: "Phase 2",
        content: "Ecosystem Expansion",
        intro: "<p>· Deployment of the mainnet with full cross-chain bridge functionality </p><p>· Integration of account abstraction and advanced smart contract capabilities</p><p>· Strategic partnerships with other blockchain ecosystems and DeFi projects</p><p>· Token staking and reward mechanisms</p><p>· Establishing the deflationary tokenomics model for OZK</p>"
      }, {
        name: "Phase 3",
        content: "Full Decentralization & Governance",
        intro:
          "<p>· Transition to a decentralized governance model, allowing OZK stakers to vote on network upgrades and decisions</p><p>· Expansion of cross-chain interoperability</p><p>· Further optimization of transaction throughput and network scalability through continued technological upgrades</p>"
      }],
      CommunityList: [{
        name: "Join the OpenZK Community",
        content: "Become part of our global community and help shape the future of the OpenZK Network. Collaborate with developers, users, and investors to build a decentralized blockchain ecosystem."
      }, {
        name: "News & Updates",
        content: "Stay informed with the latest updates on OpenZK Network, including technological advancements, network growth, partnerships, and community events. Keep up with the project's progress and explore what's next."
      }],
      FAQList: [{
        show: false,
        name: "What is ZK Rollup?",
        content: "ZK Rollup is a Layer 2 scaling solution that batches multiple transactions into one and submits them to the Ethereum mainnet, significantly increasing network transaction speed and efficiency. ZK Rollup uses zero-knowledge proofs (zk-SNARKs) to ensure the security and privacy of transactions."
      }, {
        show: false,
        name: "Why choose OpenZK Network?",
        content: "OpenZK Network utilizes cutting-edge zero-knowledge proof technology to solve Ethereum's scalability challenges. Users benefit from faster, cheaper transactions and the ability to earn yields through staking, all while ensuring high security and privacy."
      }, {
        show: false,
        name: "How do I stake and earn rewards?",
        content: "Users can connect their wallets and stake ETH or stablecoins on the OpenZK Network. After staking, users earn rewards based on the amount and duration of their staking, with opportunities to participate in network governance."
      }, {
        show: false,
        name: "What is the OpenZK tokenomics model?",
        content: "OZK is the native token of the network, and it is designed with a deflationary model. As network usage increases, OZK token supply decreases, driving its scarcity and long-term value. A portion of each transaction is burned, ensuring continued value growth."
      }, {
        show: false,
        name: "How can developers start using OpenZK?",
        content: "Developers can access our developer portal, where they will find a full suite of tools, a testnet environment, and smart contract debugging tools. Developers can start by migrating their Ethereum-based contracts and using OpenZK's Layer 2 features to optimize and deploy their decentralized applications."
      }, {
        show: false,
        name: "Is OpenZK compatible with Ethereum?",
        content: "Yes, OpenZK is fully compatible with Ethereum. This means developers can seamlessly migrate their existing Ethereum smart contracts to the OpenZK Network without needing to rewrite code. Additionally, users can enjoy lower transaction fees and faster speeds while still benefiting from Ethereum's security."
      }],
      status: 0,
      scrollTop: 0,
      implement: 0,
      strategy: 0,
      videoStatus: false,
      top: -581,
      bars: [{
        path: '#Home',
        cn: 'Home',
        en: 'Home',
      }, {
        path: '#About',
        cn: 'About',
        en: 'About',
      }, {
        path: '#Features',
        cn: 'Features',
        en: 'Features',
      }, {
        path: '#Features',
        cn: 'Features',
        en: 'Features',
      }, {
        path: '#Tools',
        cn: 'Tools',
        en: 'Tools',
      }, {
        path: '#Team',
        cn: 'Team',
        en: 'Team',
      }, {
        path: '#Events',
        cn: 'Events',
        en: 'Events',
      }, {
        path: '#Community',
        cn: 'Community',
        en: 'Community',
      }, {
        path: '#FAQ',
        cn: 'FAQ',
        en: 'FAQ',
      }, {
        path: '#Roadmap',
        cn: 'Roadmap',
        en: 'Roadmap',
      }],
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-road-next',
          prevEl: '.swiper-road-prev',
        },
      },
      swiperTagsOptions: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
        loop: false,
        autoplay: false,
        slidesPerView: 2.5,
      },
      swiperTeamOptions: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: false,
        slidesPerView: 2,
        navigation: {
          nextEl: '.swiper-team-next',
          prevEl: '.swiper-team-prev',
        },
      },
      swiperFeatureOptions: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-feature-next',
          prevEl: '.swiper-feature-prev',
        },
      },
      swiperAboutOptions: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: 'auto', //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: false,
        navigation: {
          nextEl: '.swiper-about-next',
          prevEl: '.swiper-about-prev',
        },
      },

    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.langnage = localStorage.getItem('language') || 'en'
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
      console.info('mobile')

    } else {
      this.$router.push({ path: '/page' })
    }

    this.implement = document.getElementById('implement').offsetTop - 200;
    this.strategy = document.getElementById('student').offsetTop - 800;

    window.addEventListener('scroll', () => {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;


    });

  },
  beforeDestroy() {
    clearInterval(timer);
    timer = null;
  },
  methods: {
    handleImg(index) {
      this.currentIndex = index;
      const img = document.getElementById('img')
      const developCon = document.getElementById('developCon')
      img.style.left = -(index * developCon.clientWidth) + 'Px'

    },
    handleImgBg() {
      const height = (561 * document.body.clientWidth) / 475;
      var iSpeed = -1
      timer = setInterval(() => {
        this.top = this.top + iSpeed;
        if (this.top < -height) {
          this.top = 0;
        }
      }, 30);
    },
    handleRoute(path) {
      this.$router.push({ path: path });
    },
    hanleChangeLanguage(type) {
      this.langnage = type;
    },
    handleCurrentTimeLine(type) {
      this.currentTimeLine = type;
    },
    handleVideoPlay() {
      this.videoStatus = !this.videoStatus;
      if (!this.videoStatus) {
        this.$refs.myVideo.play();
      }

    },
    handlePdfRoute() {
      window.location.href = window.location.origin + window.location.pathname + "static/pdf/ZK-wp.pdf"
    },
    handleToggleFaq(item) {
      this.$set(item, "show", !item.show)
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes gradient {
  to {
    background-position: 200%
  }
}

.con {
  margin: 0 20Px;
  ;
}

.title {
  text-align: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 24Px;
  color: #FFFFFF;
}

.swiperOuter {
  margin-top: 35Px;

  .btns {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 22Px;
      margin: 0 11Px;
    }
  }
}

.banner {
  margin-top: 100Px;

  .bg {
    width: 80%;
    margin: 0 auto;
    background: url("~@/assets/imgs/img_banner_bj@2x.png") no-repeat center center;
    background-size: 100%;

    img {
      width: 100%;
      //transition: transform 0.5s ease;
    }
  }

  .con {}

  .left {
    .one {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 14Px;
      color: #FFFFFF;
      ;
    }

    .two {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 21Px;
      color: #FFFFFF;
      line-height: 21Px;
      margin-top: 9Px;
      background: linear-gradient(0deg, #FFE381 0.4150390625%, #FA7D32 100%);


      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .three {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 21Px;
      color: #FFFFFF;
      line-height: 49Px;
    }

    .four {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 11Px;
      color: #FFFFFF;
      line-height: 18Px;
      margin-top: 3Px;
    }
  }

  .right {
    .one {
      display: flex;
      flex-direction: row;
      margin-top: 5Px;

      .btn {
        width: 134Px;
        height: 42Px;
        background: url("~@/assets/imgs/img_bjgx@2x.png") no-repeat center center;
        background-size: 100%;
        margin-left: -10Px;
        position: relative;

        .btnBg {
          position: absolute;
          left: 9Px;
          top: 8Px;
          width: calc(100% - 16Px);
          height: 26Px;
          border-radius: 5Px;
          background-size: 200% auto;
          z-index: 1;
          animation: gradient 3s linear infinite;
          background-image: linear-gradient(90deg, #214e81, #506179, #ed5409, #ffcb67, #ffcb67, #ed5409, #506179, #214e81);
        }

        .btnCon {
          position: relative;
          z-index: 2;
          width: 115Px;
          height: 23Px;
          border-radius: 5Px;
          margin: 10Px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background: url("~@/assets/imgs/Comp_3.gif") #000 no-repeat top center;
          background-size: 100%;

          .arrow {
            display: none;
            width: 100%;
          }

          &:hover {
            .arrow {
              display: block;

            }
          }
        }

        .btnCon::after {
          position: absolute;
          content: "";
          height: 100%;
          background: linear-gradient(120deg, #f37c30 0%, #ffe582 50%, #f37c30 100%);
          width: 0;
          right: 0;
          top: 0;
          z-index: -1;
          border-radius: 5Px;
          // transition: .3s;
          // -webkit-transition: .3s;
          // -moz-transition: .3s;
          // -ms-transition: .3s;
          // -o-transition: .3s;
        }

        .btnCon:hover::after {
          width: 100%;
          right: auto;
          left: 0;
        }

        .btnCon:hover {
          box-shadow: 2px 5px 20px rgba(253, 235, 155, 0.473);
          color: #fff;

          .icon {
            fill: #fff;
          }
        }
      }

      .intro {
        width: 161Px;
        height: 37Px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 12Px;
        color: #FFFFFF;
        line-height: 15Px;

        .first {
          font-family: Montserrat;
          font-size: 15Px;
          color: #F5B800;
          line-height: 22Px;
        }

        .second {
          color: #F5B800;
        }
      }
    }

    .two {
      .btnGroup {
        display: flex;
        flex-direction: row;
        margin-top: 23Px;
      }

      .btn {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 12Px;
        color: #FFFFFF;
        border-radius: 21Px;
        border: 1Px solid #F5B800;
        text-align: center;
        line-height: 21Px;
        width: 130Px;
        position: relative;
        text-indent: 25Px;

        img {
          width: 16Px;
          position: absolute;
          left: 5Px;
          top: 3Px;
        }

        &:nth-child(1) {
          width: 85Px;
          margin-right: 11Px;
          text-indent: 15Px;
        }

        span {
          color: #F5B800;
        }
      }

      .btn:hover {
        background: linear-gradient(120deg, #f37c30 0%, #ffe582 50%, #f37c30 100%);
        color: #000;

      }

      .intro {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 11Px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 10Px;
        width: 228Px;
        height: 35Px;
        line-height: 15Px;
        border-radius: 10Px;
        border: 1Px solid rgba(206, 187, 156, 0.23);
        padding-top: 4Px;

        span {
          font-family: Montserrat;
          font-size: 10Px;
          color: #F5B800;
        }
      }

    }
  }
}

.Tags {
  margin-top: 70Px;

  .con {
    border-top: solid 1Px rgba(255, 255, 255, 0.2);
    padding-top: 21Px;

    .imgs {
      display: flex;
      flex-direction: row;

      img {
        display: block;
        height: 30Px;
        margin-left: 35Px;
      }
    }

  }
}

.Abouts {
  margin-top: 70Px;

  .itemList {
    margin-top: 30Px;
    overflow: hidden;

    .item {
      // width: calc(100% - 10Px);
      height: 250Px;


      .itemSlide {
        border: 1Px solid rgba(255, 255, 255, 0.2);
        width: calc(100% - 2PX);
        height: calc(100% - 2PX);
        border-radius: 4Px;
      }

      cursor: pointer;

      &:hover {
        background: linear-gradient(90deg, #070503, #31250E);
      }

      img {
        width: 142Px;
        margin: -14Px 0 0 -21Px;
      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 11Px;
        color: #FFE683;
        background: linear-gradient(0deg, #FFE381 0.4150390625%, #FA7D32 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: -25Px;
        margin-left: 25Px;
      }

      .content {
        margin: 0 25Px;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 14Px;
        margin-top: 16Px;
      }
    }
  }

  .aboutBottom {
    margin: 33Px auto 0 auto;
    ;
    text-align: center;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 10Px;
    color: #FFFFFF;
    line-height: 33Px;
    width: 325Px;
    height: 33Px;
    border-radius: 33Px;
    border: 1Px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      width: 124Px;
      height: 36Px;
      background: url("~@/assets/imgs/1.png") no-repeat center center;
      background-size: 100%;
      margin-left: 12Px;
      position: relative;
      cursor: pointer;

      .btnBg {
        position: absolute;
        left: 9Px;
        top: 8Px;
        width: calc(100% - 16Px);
        height: 20Px;
        border-radius: 16Px;
        background-size: 200% auto;
        z-index: 1;
        animation: gradient 3s linear infinite;
        background-image: linear-gradient(90deg, #214e81, #506179, #ed5409, #ffcb67, #ffcb67, #ed5409, #506179, #214e81);
      }

      .btnCon {
        position: relative;
        z-index: 2;
        width: 106Px;
        height: 17Px;
        background: #000000;
        border-radius: 11Px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 10Px 9Px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 8Px;
        color: #FFB95B;
        line-height: 14Px;

        img {
          width: 9Px;
          margin-left: 11Px;
        }
      }
    }
  }

}

.Features {
  margin-top: 70Px;
  ;

  .con {
    overflow: hidden;
  }

  .itemList {
    margin-top: 30Px;

    .item {
      height: 360Px;

      .itemSlide {
        border: 1Px solid rgba(255, 255, 255, 0.2);
        width: calc(100% - 2PX);
        height: calc(100% - 2PX);
        border-radius: 10Px;
      }

      &:hover {
        background: linear-gradient(90deg, #070503, #31250E);
        border-radius: 10Px;
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 11Px;
      color: #FFFFFF;
      background: linear-gradient(0deg, #FFE381 0.4150390625%, #FA7D32 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 27Px 0 0 20Px;
      ;
      padding-bottom: 15Px;
      border-bottom: solid 1Px rgba(255, 255, 255, 0.2);

    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 11Px;
      color: #FFFFFF;
      margin: 0 20Px;
      margin-top: 14Px;
    }
  }

  .itemTwoList {
    margin-top: 20Px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      border: 2Px solid rgba(206, 187, 156, 0.2);
      width: 420Px;
      height: 360Px;
      border-radius: 20Px;
      cursor: pointer;

      &:hover {
        background: linear-gradient(90deg, #070503, #31250E);
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 22Px;
      color: #FFFFFF;
      line-height: 22Px;
      margin: 54Px 0 0 46Px;
      ;
      padding-bottom: 28Px;
      border-bottom: solid 1Px rgba(255, 255, 255, 0.2);

    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14Px;
      color: #FFFFFF;
      line-height: 21Px;
      margin: 0 46Px;
      margin-top: 27Px;
    }
  }

  .btn {
    margin: 28Px auto 0 auto;
    width: 131Px;
    height: 38Px;
    background: url("~@/assets/imgs/img_sta_fg@2x.png") no-repeat center center;
    background-size: 100%;
    padding: 10Px;
    position: relative;

    .btnBg {
      position: absolute;
      left: 11Px;
      top: 14Px;
      width: calc(100% - 18Px);
      height: 26Px;
      border-radius: 5Px;
      background-size: 200% auto;
      z-index: 1;
      animation: gradient 3s linear infinite;
      background-image: linear-gradient(90deg, #214e81, #506179, #ed5409, #ffcb67, #ffcb67, #ed5409, #506179, #214e81);
    }

    .btnCon {
      position: relative;
      z-index: 2;
      width: 130Px;
      height: 23Px;
      background: #000000;
      border-radius: 5Px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 6Px;

      .text {
        width: 95Px;
      }
    }
  }

  .intro {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 11Px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 10Px;

    span {
      color: #F5B800;
    }
  }

  .detail {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 11Px;
    color: #FFFFFF;
    text-align: center;
    margin: 10Px auto 0 auto;
  }
}

.Tools {
  margin-top: 80Px;

  .con {
    margin: 0;
  }

  .itemList {
    margin-top: 32Px;
    border: 1Px solid rgba(255, 255, 255, 0.2);

    .item {
      height: 100%;
      border-top: 1Px solid rgba(255, 255, 255, 0.2);
      position: relative;
      padding-bottom: 25Px;

      &:hover {
        background: url("~@/assets/imgs/img_xzzt@2x.png") no-repeat;
        background-size: 100%;
      }

      &:nth-child(1) {
        border-top: none;
      }

      .img {
        width: 111Px;
        margin-left: -8Px;

      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 13Px;
        color: #FFFFFF;
        line-height: 13Px;
        margin: 0 26Px;
      }

      .itemContent {
        img {
          display: none;
        }

        div {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 11Px;
          color: #FFFFFF;
          line-height: 14Px;
          margin: 0 26Px;
          margin-top: 10Px;
        }
      }
    }
  }
}

.Team {
  margin-top: 90Px;

  .intro {
    margin: 21Px auto 0 auto;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 11Px;
    color: #FFFFFF;
    line-height: 16Px;
    text-align: center;
  }

  .itemList {
    margin-top: 42Px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .item {
      ;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .avtar-outer {
        position: relative;

        .tag {
          position: absolute;
          bottom: 0;
          right: 12Px;
          width: 25Px;
          margin-left: 6Px;
          vertical-align: middle;
          margin-top: -3px;

        }
      }

      .avtar {
        width: 100Px;
      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 17Px;
        margin-top: 13Px;

      }

      .content {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 9Px;
        color: #FFFFFF;
        line-height: 15Px;
      }
    }
  }
}

.Events {
  margin-top: 80Px;

  .intro {
    margin-top: 15Px;
    text-align: center;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 11Px;
    color: #FFFFFF;
    line-height: 15Px;

    span {
      color: #F5B800;
    }
  }

  .swiperOptions {
    overflow: hidden;
    margin-top: 45Px;
  }

  .swiperSlide {
    display: flex;
    flex-direction: row;
  }

  .swiperCon {
    display: flex;
    flex-direction: row;

    .left {
      width: calc(58% - 5Px);
      margin-right: 10Px;

      img {
        width: 100%;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      width: calc(42% - 5Px);

      .one {
        margin-bottom: 10Px;
      }

      img {
        width: 100%;
      }
    }
  }
}

.Roadmap {
  margin-top: 80Px;

  .itemList {
    margin-top: 44Px;
    margin-left: 55Px;

    .item {
      position: relative;
      margin-bottom: 40Px;

      img {
        position: absolute;
        left: -56Px;
        top: 0;
        width: 56Px;
      }

      .name {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 11Px;
      }

      .content {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 11Px;
        margin-top: 9Px;
      }

      .detail {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 12Px;
        margin-top: 10Px;
      }
    }
  }
}

.Community {
  margin-top: 100Px;

  .itemList {
    margin-top: 25Px;

    .item {
      border: 2Px solid rgba(206, 187, 156, 0.2);
      width: 100%;
      height: 160Px;
      border-radius: 14Px;
      margin-bottom: 11Px;

      &:hover {
        background: url("~@/assets/imgs/img_news_fg@2x.png") no-repeat -1px center;
        background-size: 114%;
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 11Px;
      color: #FFFFFF;
      line-height: 22Px;
      margin: 12Px 0 0 21Px;
      ;
      padding-bottom: 14Px;
      border-bottom: solid 1Px rgba(255, 255, 255, 0.2);

    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 11Px;
      color: #FFFFFF;
      line-height: 14Px;
      margin: 0 25Px;
      margin-top: 15Px;
    }
  }
}

.FAQ {
  margin-top: 100Px;

  .itemList {
    margin-top: 28Px;

    .item {
      border: solid 1Px rgba(255, 255, 255, 0.2);
      padding: 20Px;
      position: relative;
      cursor: pointer;

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 22Px;
      }

      img {
        position: absolute;
        right: 20Px;
        top: 20Px;
        width: 12Px;
      }

      .content {
        margin-top: 15Px;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 11Px;
        color: #FFFFFF;
        line-height: 14Px;
        ;
      }
    }
  }
}

.bottom {
  margin-top: 100Px;

  .con {
    border-top: solid 1Px rgba(255, 255, 255, 0.2);
    padding-top: 18Px;
    ;

    .left {
      img {
        width: 139Px;
      }
    }

    .right {
      .itemList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .item {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 10Px;
        color: #FFFFFF;
        width: 70Px;
        line-height: 25Px;
        margin-top: 5Px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}

.copyRight {
  border-top: solid 1Px rgba(255, 255, 255, 0.2);
  margin-top: 30Px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 12Px;
  color: #FFFFFF;
  line-height: 34Px;
  text-align: center;
}
</style>