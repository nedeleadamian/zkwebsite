<template>
  <div class="page">
    <NavBar id="home" :status="status" @changeLanguage="hanleChangeLanguage" />
    <img class="imgOne" src="@/assets/imgs/img_bjzs4@2x.png" alt="">
    <img class="imgTwo" src="@/assets/imgs/img_bjzs2@2x.png" alt="">
    <img class="imgThree" src="@/assets/imgs/img_bjzs4@2x.png" alt="">
    <img class="imgFour" src="@/assets/imgs/img_bjzs2@2x.png" alt="">

    <div id="Home" class="banner">
      <star></star>
      <div class="bg">
        <img src="@/assets/imgs/banner.png" alt="">
      </div>
      <div class="con">
        <div class="left wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
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
            OpenZK is the first Layer 2 solution on ZK rollup technology to unite native ETH staking,liquid restaking, and stablecoin staking in one seamless platform. Built for superior performance in DeFi, Real-Word Assets, and trading applications.
          </div>
        </div>
        <div class="right wow fadeIn" data-wow-delay="600ms" data-wow-duration="3000ms">
          <div class="one">
            <div class="btn">
              <div class="btnBg" />
              <div class="btnCon">
                <a href="https://portal.openzk.net/bridge" rel="noopener noreferrer">
                  <img class="arrow" src="@/assets/imgs/bg.png" alt="">
                </a>
              </div>
            </div>
            <div class="intro" style="margin-left: 10px;">
              Testnet available now.</br>Airdrop points and Multipliers coming soon.
            </div>
          </div>
          <div class="two">
            <div class="btnGroup">
              <div class="btn" @mouseover="currentIntro = 1">
                <img class="icon" src="@/assets/imgs/icon_eth@2x.png" alt=""> ETH <span>4.2</span>%
              </div>
              <div class="btn" @mouseover="currentIntro = 2">
                <img class="icon" src="@/assets/imgs/icon_btc@2x.png" alt=""> Stablecoins <span>8.5</span>%
              </div>
            </div>
            <div v-if="currentIntro === 1" class="intro introOne">
              4.2% ETH earn via mainnet staking and liquid restaking plus </br><span>Airdrop Points</span>
            </div>
            <div v-else class="intro introTne">
              8.5% Stablecoin earn via Defi and RWA protocols plus <span>Airdrop Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="Tags" class="Tags  wow fadeIn " data-wow-delay="200ms" data-wow-duration="3000ms">
      <div class="con">
        <marqueeLeft />
      </div>
    </div> -->
    <div id="About" class="About">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          OpenZK Overview
        </div>
        <div class="itemList wow fadeInUp" data-wow-delay="200ms" data-wow-duration="3000ms">
          <div v-for="(item, index) in AboutList" :key="index" class="item">
            <img :src="item.src" alt="">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
        <a href="https://portal.openzk.net/bridge" rel="noopener noreferrer">
          <div class="btn  wow zoomInUp" data-wow-delay="200ms" data-wow-duration="3000ms">
            <div class="btnBg" />
            <div class="btnCon">

              <img class="text" src="@/assets/imgs/StakeNow@2x.png" alt="">
            </div>
            <div class="star-1">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
            <div class="star-2">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
            <div class="star-3">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
            <div class="star-4">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
            <div class="star-5">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
            <div class="star-6">
              <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    class="fil0"></path>
                </g>
              </svg>
            </div>
          </div>
        </a>
        <div class="intro  wow fadeIn" data-wow-delay="200ms" data-wow-duration="1000ms">
          <span>10</span>x Airdrop Point Multiplier for Early Participants
        </div>
      </div>
    </div>
    <div id="Features" class="Features  ">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Key Features
        </div>
        <div class="itemList wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          <div v-for="(item, index) in FeaturesOneList" :key="index" class="item">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="content" v-html="item.content" />
          </div>
        </div>
        <div class="itemTwoList wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          <div v-for="(item, index) in FeaturesTwoList" :key="index" class="item">
            <div class="name" v-html="item.name" />
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="Tools" class="Tools">
      <div class="con">
        <div class="title wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="3000ms">
          Developer Tools
        </div>
        <div class="itemList wow fadeInRight" data-wow-delay="200ms" data-wow-duration="3000ms">
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
    <div id="Team" class="Team">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Team
        </div>
        <div class="intro wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="3000ms">
          Bringing together world-class engineers, blockchain architects, and product specialists with deep expertise in
          Layer 2 scaling solutions and DeFi protocols, the OpenZK Network team is united by its passion for innovation
          and is committed to building the infrastructure that will power the next generation of decentralized
          applications.
        </div>
        <div class="itemList">
          <div v-for="(item, index) in TeamList" :key="index"
            :class="{ 'item': true, wow: true, 'fadeInRight': item.fadeInRight, 'fadeInLeft': item.fadeInLeft, }"
            data-wow-delay="200ms" data-wow-duration="2000ms">
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
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="Events" class="Events ">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Events Around the World
        </div>
        <div class="intro wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          The <span>OpenZK</span> community gets together around the world. We can't wait to see you at a future event!
        </div>
        <imgScroll />
      </div>
    </div> -->
    <div id="Roadmap" class="Roadmap">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Roadmap
        </div>
        <div class="itemList wow fadeInUp" data-wow-delay="200ms" data-wow-duration="3000ms">
          <div class="item  wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="3000ms">
            <div class="name">
              {{ RoadmapList[0].name }}
            </div>
            <div class="content">
              {{ RoadmapList[0].content }}
            </div>
            <div class="detail" v-html="RoadmapList[0].intro" />
          </div>
          <div class="item  wow fadeInRight" data-wow-delay="600ms" data-wow-duration="3000ms">
            <div class="name">
              {{ RoadmapList[1].name }}
            </div>
            <div class="content">
              {{ RoadmapList[1].content }}
            </div>
            <div class="detail" v-html="RoadmapList[1].intro" />
          </div>
          <div class="item  wow fadeInLeft" data-wow-delay="1000ms" data-wow-duration="3000ms">
            <div class="name">
              {{ RoadmapList[2].name }}
            </div>
            <div class="content">
              {{ RoadmapList[2].content }}
            </div>
            <div class="detail" v-html="RoadmapList[2].intro" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="Community" class="Community ">
      <div class="con">
        <div class="title wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Community & News
        </div>
        <div class="itemList wow fadeInUp" data-wow-delay="200ms" data-wow-duration="3000ms">
          <div v-for="(item, index) in CommunityList" :key="index" class="item">
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
    <div id="FAQ" class="FAQ  ">
      <div class="con">
        <div class="title  wow fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
          Frequently Asked Questions (FAQ)
        </div>
        <div class="itemList wow fadeInUp fadeIn" data-wow-delay="200ms" data-wow-duration="3000ms">
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
    <div id="bottom" class="bottom  wow fadeInUp " data-wow-delay="200ms" data-wow-duration="1000ms">
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
      Copyright © 2024 OpenZK Network. All rights reserved.
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import NavBar from "@/components/NavBar";
// import marqueeLeft from "./scroll.vue";
// import imgScroll from "./imgScroll.vue";
import star from "./star.vue";
let timer = null;
export default {
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    // marqueeLeft,
    // imgScroll,
    star,
  },
  data() {
    return {
      currentIntro: 1,
      AboutList: [
        {
          src: require("@/assets/imgs/icon_drivi_1@2x.png"),
          name: "Driving Change",
          content:
            "OpenZK Network's rollup solution addresses the core challenges of blockchain technology – scalability, cost efficiency, and security.  By combining ZK rollup technology with native ETH staking, liquid restaking and stablecoin staking rewards, OpenZK Network aims to enhance user benefits and accelerate L2 adoption.",
        },
        {
          src: require("@/assets/imgs/icon_future_2@2x.png"),
          name: "Future Blueprint",
          content:
            "OpenZK Network is committed to building a scalable, efficient Layer 2 network using zero-knowledge proof technology, to offer unmatched opportunity for DeFi, RWA and high-frequency trading applications.",
        },
        {
          src: require("@/assets/imgs/icon_pione_3@2x.png"),
          name: "Pioneering Technological  Innovation",
          content:
            "OpenZK Network is an advanced layer 2 solution built on ZK rollup technology. We offer developers a powerful Ethereum-compatible development platform. With our integrated cross-chain bridge and native staking mechanisms, Open ZK Network delivers exceptional scalability and flexibility.",
        },
      ],
      FeaturesOneList: [
        {
          name: "Native ETH Staking Reward",
          content:
            "With OpenZK Network's Layer 2 solution, users' bridged ETH is staked and restaked on the Ethereum mainnet automatically. Unlike other layer 2 solutions, OpenZK's integration of native staking and restaking provides users with a seamless experience, delivering a high performance, low cost and rewarding layer 2 network.<p>· Competitive Staking Rewards: Bridged ETH automatically earn native staking rewards from the Ethereum mainnet, plus additional restaking rewards.</p><p>· Low Cost Network + Rewards: Low transaction fees resulting from layer 2 technology, while maximizing staking and restaking rewards for assets bridged to the network.</p><p>· Secure: ZK rollup technology maintains the efficiency and security of transactions, supported by the Ethereum mainnet..</p>",
        },
        {
          name: "ETH Restaking and Stablecoin Staking",
          content:
            "Open ZK combines additional liquid staking opportunities with native ETH staking to maximise earning potential while supporting decentralization and the security of the Ethereum ecosystem.</p><p>Open ZK also integrates multidimensional stablecoin staking options from Defi and RWA protocols, allowing users to stake stablecoins via OpenZK and benefit from staking rewards while maintaining liquidity.</p><p>· Beyond Staking: OpenZK's native ETH staking solutions integrate both staking and restaking in a single click.</p><p>· Maximise Earning Potential: Enjoy the benefits of both staking/restaking rewards and the flexibility afforded by Defi and RWA protocols.</p><p>· Diverse Opportunities and Liquidity: Unlock the potential of staked ETH or stablecoin for even greater utility, liquidity and rewards.</p>",
        },
      ],
      FeaturesTwoList: [
        {
          name: "Cross-chain</br>Interoperability",
          content:
            "Our native cross-chain bridge enables seamless asset and data transfers between multiple blockchains, enhancing collaboration and functionality across ecosystems. OpenZK breaks the barriers of isolated blockchains, supporting more cross-chain financial applications.",
        },
        {
          name: "Security Model",
          content:
            "OpenZK's rollup solution uses zk-SNARKs to prove the validity of each batch of transactions. This prevents the possibility of fraud by ensuring that all transaction to verified before being finalized on Ethereum.",
        },
        {
          name: "Tokenomics",
          content:
            "OZK is the native token for the OpenZK Network, playing a crucial role in aligning incentives within the ecosystem. It is anticipated that OZK will follow a deflationary model and serve multiple purposes including utility in governance rights, staking incentives, and potential network fee mechanisms.",
        },
      ],
      ToolsList: [
        {
          src: require("@/assets/imgs/icon_tools_1@2x.png"),
          name: "Robust Development Environment",
          content:
            "OpenZK Network offers a fully Ethereum-compatible Layer 2 development environment. Developers can easily migrate and deploy smart contracts, using our comprehensive toolkit to accelerate the development and iteration of decentralized applications (dApps).",
        },
        {
          src: require("@/assets/imgs/icon_tools_2@2x.png"),
          name: "Testnet & Mainnet Support",
          content:
            "We provide a complete testnet and mainnet environment, allowing developers to build and validate their smart contracts in a test environment before seamlessly deploying them to the mainnet.",
        },
        {
          src: require("@/assets/imgs/icon_tools_3@2x.png"),
          name: "Smart Contract Compilation & Debugging",
          content:
            "With our debugging tools, developers can efficiently compile, debug, and test their smart contracts to optimize dApp performance and enhance user experience.",
        },
      ],
      TeamList: [
        {
          src: require("@/assets/imgs/img_tx_1@2x.png"),
          name: "Dave Sandor",
          content: "Co Founder",
        },
        {
          src: require("@/assets/imgs/img_tx_2@2x.png"),
          name: "Lucas Cullen",
          content: "Chief Technology Officer (CTO)",
        },
        {
          src: require("@/assets/imgs/img_tx_3@2x.png"),
          name: "Jenna Wayne",
          content: "Chief Marketing Officer",
          fadeInRight: true,
        },
        {
          src: require("@/assets/imgs/img_tx_7@2x.png"),
          name: "Sam Annavi",
          content: "Blockchain Lead",
          fadeInRight: true,
        },
        {
          src: require("@/assets/imgs/img_tx_4@2x.png"),
          name: "John Newham",
          content: "Social Media Lead",
          fadeInRight: true,
        },
        {
          src: require("@/assets/imgs/img_tx_5@2x.png"),
          name: "Neil Dundon",
          content: "Strategic Advisor",
          fadeInRight: true,
        },
        {
          src: require("@/assets/imgs/img_tx_6@2x.png"),
          name: "Victor Hsu",
          content: "Software Engineer",
          fadeInRight: true,
        },
      ],
      RoadmapList: [
        {
          name: "Phase 1",
          content: "Core Infrastructure Development",
          intro:
            "<p>· Implementation of ZK Rollup scalability features</p><p>· Launch of the testnet environment for developers</p><p>· Launch of developer tools for seamless dApp migration</p>",
        },
        {
          name: "Phase 2",
          content: "Ecosystem Expansion",
          intro:
            "<p>· Deployment of the mainnet with full cross-chain bridge functionality </p><p>· Integration of account abstraction and advanced smart contract capabilities</p><p>· Strategic partnerships with other blockchain ecosystems and DeFi projects</p><p>· Token staking and reward mechanisms</p><p>· Establishing the deflationary tokenomics model for OZK</p>",
        },
        {
          name: "Phase 3",
          content: "Full Decentralization & Governance",
          intro:
            "<p>· Transition to a decentralized governance model, allowing OZK stakers to vote on network upgrades and decisions</p><p>· Expansion of cross-chain interoperability</p><p>· Further optimization of transaction throughput and network scalability through continued technological upgrades</p>",
        },
      ],
      CommunityList: [
        {
          name: "Join the OpenZK Community",
          content:
            "Become part of our global community and help shape the future of the OpenZK Network. Collaborate with developers, users, and investors to build a decentralized blockchain ecosystem.",
        },
        {
          name: "News & Updates",
          content:
            "Stay informed with the latest updates on OpenZK Network, including technological advancements, network growth, partnerships, and community events. Keep up with the project's progress and explore what's next.",
        },
      ],
      FAQList: [
        {
          show: false,
          name: "What is a ZK Rollup?",
          content:
            "A ZK rollup is a layer 2 scaling solution where multiple transactions are bundled together off chain, these transactions are processed and “rolled up” into a single piece of data, a cryptographic proof called a ZK proof is generated to verify all transactions are valid. Only this proof and the compressed transaction data posted to the Ethereum mainnet.",
        },
        {
          show: false,
          name: "Why choose OpenZK Network?",
          content:
            "OpenZK Network utilises cutting edge zero-knowledge proof technology to solve Ethereum's scalability challenges. Users benefit from faster, cheaper transactions and the rewards generated from the automatic staking/restaking of bridged assets (ETH/stablecoins) to the network.",
        },
        {
          show: false,
          name: "How do I stake and earn rewards?",
          content:
            "Users are able to connect their wallet and bridge assets like ETH and stablecoins (USDT / USDC) to the OpenZK Network with a single click through our native bridge. After bridging, staking and restaking of ETH takes place automatically (through Rocket Pool and Ether.fi initially) as does the staking of stablecoins (through Spark.fi). In both cases the ETH and stablecoin that have been bridged and staked by the user will be represented on the OpenZK Network by liquid tokens, ozkETH and ozkUSD respectively.",
        },
        {
          show: false,
          name: "What is the OpenZK Network tokenomics model?",
          content:
            "OZK will be the native token of the OpenZK Network. It is expected that OZK will have utility in governance rights, payment for gas fees and staking. It is likely OZK will follow a deflationary model, with a portion of OZK used in payment of gas fees being burned and scarcity increasing over time.",
        },
        {
          show: false,
          name: "How can developers start using OpenZK?",
          content:
            "Developers can access our developer portal, where they will find a full suite of tools, a testnet environment, and smart contract debugging tools. Developers can start by migrating their Ethereum-based contracts and using OpenZK's Layer 2 features to optimize and deploy their decentralized applications.",
        },
        {
          show: false,
          name: "Is OpenZK compatible with Ethereum?",
          content:
            "Yes, OpenZK is fully compatible with Ethereum. This means developers can seamlessly migrate their existing Ethereum smart contracts to the OpenZK Network without needing to rewrite code. Additionally, users can enjoy lower transaction fees and faster speeds while still benefiting from Ethereum's security.",
        },
      ],
      status: 0,
      scrollTop: 0,
      implement: 0,
      strategy: 0,
      videoStatus: false,
      top: -581,
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
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        slidesPerView: "auto", //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: true,
      },
      swiperTagsOptions: {
        // 所有的参数同 swiper 官方 api 参数
        direction: "horizontal",
        slidesPerView: "auto", //设置slider容器能够同时显示的slides数量
        loop: true,
        autoplay: true,
        slidesPerView: 4,
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    if (
      navigator.userAgent.match(
        /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
      )
    ) {
      console.info("mobile");
      this.$router.push({ path: "/mobile" });
    }
  },
  beforeDestroy() {
    clearInterval(timer);
    timer = null;
  },
  methods: {
    toggleIntro(index) {
      this.currentIntro = index;
    },
    handleImg(index) {
      this.currentIndex = index;
      const img = document.getElementById("img");
      const developCon = document.getElementById("developCon");
      img.style.left = -(index * developCon.clientWidth) + "px";
    },
    handleImgBg() {
      const height = (561 * document.body.clientWidth) / 475;
      var iSpeed = -1;
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
      window.location.href =
        window.location.origin +
        window.location.pathname +
        "static/pdf/ZK-wp.pdf";
    },
    handleToggleFaq(item) {
      this.$set(item, "show", !item.show);
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  position: relative;
}

.imgOne {
  position: absolute;
  right: 0;
  top: 343px;
  width: 519px;
}

.imgTwo {
  position: absolute;
  left: 0;
  top: 1148px;
  width: 519px;
}

.imgThree {
  position: absolute;
  right: 0;
  top: 2460px;
  width: 519px;
}

.imgFour {
  position: absolute;
  left: 0;
  top: 3403px;
  width: 519px;
}

.con {
  width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 48px;
  color: #ffffff;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  0% {
    transform: rotate(360deg);
  }
}

@keyframes backgroundSize {
  0% {
    opacity: 0.3;
    /* 动画开始时，盒子完全不透明 */
  }

  100% {
    opacity: 1;
    /* 动画结束时，盒子透明度为0.3 */
  }
}

@keyframes gradient {
  to {
    background-position: 200%;
  }
}

@keyframes btnRorate {
  0% {
    left: -20px;
  }

  100% {
    left: 1000px;
  }
}

.banner {
  .con {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -60px;
  }

  .bg {
    width: 628px;
    height: 503px;
    margin: 0 auto;
    background: url("~@/assets/imgs/img_banner_bj@2x.png") no-repeat center
      center;
    background-size: 100%;
    margin-top: -20px;

    img {
      width: 100%;
      display: block;
      margin-left: 20px;
      //animation: rotation 5s linear infinite;
    }
  }

  .left {
    width: 550px;

    .one {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 29px;
      color: #ffffff;
      line-height: 38px;
    }

    .two {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 42px;
      color: #ffffff;
      line-height: 49px;
      margin-top: 18px;
      background: linear-gradient(0deg, #ffe381 0.4150390625%, #fa7d32 100%);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .three {
      font-family: Montserrat;
      font-weight: 800;
      font-size: 42px;
      color: #ffffff;
      line-height: 49px;
    }

    .four {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
      line-height: 24px;
      margin-top: 22px;
    }
  }

  .right {
    .one {
      display: flex;
      flex-direction: row;

      .btn {
        width: 268px;
        height: 84px;
        background: url("~@/assets/imgs/img_bjgx@2x.png") no-repeat center
          center;
        background-size: 100%;
        margin: -18px 0 0 -20px;
        position: relative;

        .btnBg {
          position: absolute;
          left: 18px;
          top: 16px;
          width: calc(100% - 36px);
          height: calc(100% - 32px);
          border-radius: 10px;
          background-size: 200% auto;
          z-index: 1;
          animation: gradient 3s linear infinite;
          background-image: linear-gradient(
            90deg,
            #214e81,
            #506179,
            #ed5409,
            #ffcb67,
            #ffcb67,
            #ed5409,
            #506179,
            #214e81
          );
        }

        .btnCon {
          width: 226px;
          height: 46px;
          background: #000000;
          border-radius: 10px;
          margin: 19px 19px 19px 21px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;
          overflow: hidden;
          background: url("~@/assets/imgs/Comp_3.gif") #000 no-repeat top center;
          background-size: 101%;

          cursor: pointer;

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

        // .btnCon::before {
        //     position: absolute;
        //     content: "";
        //     height: 80px;
        //     width: 100%;
        //    // background-image: linear-gradient(90deg, #bdb7b7, #bdb7b7);
        //    background: url("~@/assets/imgs/Revealer-3.gif") no-repeat top center;
        //    background-size: 100%;
        //   //  transform: rotate(-45deg);

        //     left: 0;
        //     top: -15px;
        //     // z-index: -1;
        //     // transition: .3s;
        //     // -webkit-transition: .3s;
        //     // -moz-transition: .3s;
        //     // -ms-transition: .3s;
        //     // -o-transition: .3s;
        //     // animation: btnRorate 4s ease-in infinite ;
        //     //overflow-x: hidden;
        // }

        .btnCon::after {
          position: absolute;
          content: "";
          height: 100%;
          background: linear-gradient(
            120deg,
            #f37c30 0%,
            #ffe582 50%,
            #f37c30 100%
          );
          width: 0;
          right: 0;
          top: 0;
          z-index: -1;
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
        width: 181px;
        height: 37px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;

        .first {
          font-family: Montserrat;
          font-size: 15px;
          color: #f5b800;
          line-height: 22px;
        }

        .second {
          color: #f5b800;
        }
      }
    }

    .two {
      .btnGroup {
        display: flex;
        flex-direction: row;
        margin-top: 46px;
      }

      .btn {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 22px;
        color: #ffffff;
        line-height: 22px;
        border-radius: 21px;
        border: 1px solid #f5b800;
        text-align: center;
        line-height: 41px;
        width: 234px;
        position: relative;
        text-indent: 25px;
        cursor: pointer;

        img {
          width: 30px;
          position: absolute;
          left: 10px;
          top: 6px;
        }

        &:nth-child(1) {
          width: 170px;
          margin-right: 11px;
          text-indent: 15px;
        }

        span {
          color: #f5b800;
        }

        &:hover .star-6 {
          position: absolute;
          top: 5%;
          left: 60%;
          width: 5px;
          height: auto;
          filter: drop-shadow(0 0 10px #fffdef);
          fill: #fff;
          z-index: 2;
        }
      }

      .btn::after {
        position: absolute;
        content: "";
        height: 100%;
        background: linear-gradient(
          120deg,
          #f37c30 0%,
          #ffe582 50%,
          #f37c30 100%
        );

        width: 0;
        right: 0;
        top: 0;
        z-index: -1;
        // transition: .3s;
        // -webkit-transition: .3s;
        // -moz-transition: .3s;
        // -ms-transition: .3s;
        // -o-transition: .3s;
        border-radius: 21px;
      }

      .btn:hover::after {
        width: 100%;
        right: auto;
        left: 0;
      }

      .btn:hover {
        box-shadow: 2px 5px 20px rgba(59, 48, 1, 0.473);
        color: #000;

        span {
          color: #000;
        }
      }

      .intro {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 18px;
        text-align: center;
        width: 400px;
        margin-top: 10px;

        span {
          font-family: Montserrat;
          font-size: 15px;
          color: #f5b800;
          line-height: 22px;
        }
      }
    }
  }
}

.Tags {
  margin-top: 100px;

  .con {
    border-top: solid 1px rgba(255, 255, 255, 0.2);
    padding-top: 47px;
    overflow: hidden;

    .imgs {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 35px;
      img {
        display: block;
        height: 52px;
      }
    }
  }
}

.About {
  margin-top: 182px;

  .itemList {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 520px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 68px;

    .item {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
      flex: 1;
      cursor: pointer;

      &:hover {
        background: linear-gradient(90deg, #070503, #31250e) no-repeat left
          center;
        animation: backgroundSize 0.8s;
      }

      &:nth-child(1) {
        border-left: none;
      }

      img {
        width: 260px;
        margin: -28px 0 0 -41px;
      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 22px;
        color: #ffe683;
        background: linear-gradient(0deg, #ffe381 0.4150390625%, #fa7d32 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-top: -50px;
        margin-left: 50px;
        width: 292px;
      }

      .content {
        margin-left: 50px;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 21px;
        width: 323px;
        margin-top: 32px;
      }
    }
  }

  .btn {
    margin: 56px auto 0 auto;
    width: 262px;
    height: 76px;
    background: url("~@/assets/imgs/img_sta_fg@2x.png") no-repeat center center;
    background-size: 100%;
    padding: 20px;
    position: relative;

    .btnBg {
      position: absolute;
      left: 18px;
      top: 26px;
      width: calc(100% - 36px);
      height: 60px;
      border-radius: 10px;
      background-size: 200% auto;
      z-index: 1;
      animation: gradient 3s linear infinite;
      background-image: linear-gradient(
        90deg,
        #214e81,
        #506179,
        #ed5409,
        #ffcb67,
        #ffcb67,
        #ed5409,
        #506179,
        #214e81
      );
    }

    &.btn:hover .star-1 {
      position: absolute;
      top: -30%;
      left: -10%;
      width: 35px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    &.btn:hover .star-2 {
      position: absolute;
      top: -20%;
      left: 10%;
      width: 20px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    &.btn:hover .star-3 {
      position: absolute;
      top: 55%;
      left: 25%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    &.btn:hover .star-4 {
      position: absolute;
      top: 30%;
      left: 80%;
      width: 8px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    &.btn:hover .star-5 {
      position: absolute;
      top: 25%;
      left: 115%;
      width: 15px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    &.btn:hover .star-6 {
      position: absolute;
      top: 5%;
      left: 60%;
      width: 5px;
      height: auto;
      filter: drop-shadow(0 0 10px #fffdef);
      fill: #fff;
      z-index: 2;
    }

    .star-1 {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }

    .star-2 {
      position: absolute;
      top: 45%;
      left: 45%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-3 {
      position: absolute;
      top: 40%;
      left: 40%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-4 {
      position: absolute;
      top: 20%;
      left: 40%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-5 {
      position: absolute;
      top: 25%;
      left: 45%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    .star-6 {
      position: absolute;
      top: 5%;
      left: 50%;
      width: 0;
      height: auto;
      filter: drop-shadow(0 0 0 #fffdef);
      fill: #fff;
      z-index: -5;
      transition: all 0.8s ease;
    }

    .btnCon {
      position: relative;
      z-index: 2;
      width: 261px;
      height: 55px;
      background: #000000;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      cursor: pointer;

      img {
        position: relative;
      }

      .text {
        width: 190px;
      }
    }

    .btnCon::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 0;
      right: 0;
      top: 0;
      z-index: 3;
      transition: 0.3s;
      -webkit-transition: 0.3s;
      -moz-transition: 0.3s;
      -ms-transition: 0.3s;
      -o-transition: 0.3s;
      border-radius: 17px;
    }

    .btnCon:hover::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }

  .intro {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;

    span {
      color: #f5b800;
    }
  }

  .detail {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    line-height: 21px;
    text-align: center;
    margin: 20px auto 0 auto;
  }
}

.Features {
  margin-top: 147px;
  .itemList {
    margin-top: 83px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      border: 2px solid rgba(206, 187, 156, 0.2);
      width: 590px;
      height: 430px;
      border-radius: 20px;

      &:hover {
        background: url("~@/assets/imgs/img_key_eth@2x.png") no-repeat left
          center;
        background-size: 100%;
        animation: backgroundSize 0.8s;
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 22px;
      color: #ffffff;
      line-height: 22px;
      background: linear-gradient(0deg, #ffe381 0.4150390625%, #fa7d32 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 40px 0 0 46px;
      padding-bottom: 28px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      line-height: 21px;
      margin: 0 46px;
      margin-top: 27px;
    }
  }

  .itemTwoList {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      border: 2px solid rgba(206, 187, 156, 0.2);
      width: 386px;
      height: 310px;
      border-radius: 20px;
      cursor: pointer;

      &:hover {
        background: url("~@/assets/imgs/6.png") no-repeat left center;
        background-size: 100%;

        animation: backgroundSize 0.8s;
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 22px;
      color: #ffffff;
      line-height: 22px;
      height: 45px;
      margin: 32px 0 0 46px;
      padding-bottom: 28px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      line-height: 21px;
      margin: 0 46px;
      margin-top: 27px;
    }
  }

  .aboutBottom {
    margin: 57px auto 0 auto;
    text-align: center;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    line-height: 65px;
    width: 629px;
    height: 65px;
    border-radius: 33px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      margin-left: 20px;
      width: 227px;
      height: 72px;
      background: url("~@/assets/imgs/1.png") no-repeat center center;
      background-size: 100%;
      margin-left: 25px;
      position: relative;
      cursor: pointer;

      // overflow: hidden;
      .btnBg {
        position: absolute;
        left: 18px;
        top: 17px;
        width: calc(100% - 36px);
        height: 38px;
        border-radius: 25px;
        background-size: 200% auto;
        z-index: 1;
        animation: gradient 3s linear infinite;
        background-image: linear-gradient(
          90deg,
          #214e81,
          #506179,
          #ed5409,
          #ffcb67,
          #ffcb67,
          #ed5409,
          #506179,
          #214e81
        );
      }

      .btnCon {
        position: relative;
        z-index: 2;
        width: 186px;
        height: 34px;
        background: #000000;
        border-radius: 17px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 19px 20px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 14px;
        color: #ffb95b;
        line-height: 24px;
        overflow: hidden;

        img {
          width: 18px;
          margin-left: 8px;
          position: relative;
          z-index: 10;
        }
      }

      &.btn:hover .star-1 {
        position: absolute;
        top: -30%;
        left: -10%;
        width: 35px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      &.btn:hover .star-2 {
        position: absolute;
        top: -20%;
        left: 10%;
        width: 20px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      &.btn:hover .star-3 {
        position: absolute;
        top: 55%;
        left: 25%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      &.btn:hover .star-4 {
        position: absolute;
        top: 30%;
        left: 80%;
        width: 8px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      &.btn:hover .star-5 {
        position: absolute;
        top: 25%;
        left: 115%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      &.btn:hover .star-6 {
        position: absolute;
        top: 5%;
        left: 60%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 10px #fffdef);
        fill: #fff;
        z-index: 2;
      }

      .star-1 {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
      }

      .star-2 {
        position: absolute;
        top: 45%;
        left: 45%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
      }

      .star-3 {
        position: absolute;
        top: 40%;
        left: 40%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
      }

      .star-4 {
        position: absolute;
        top: 20%;
        left: 40%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
      }

      .star-5 {
        position: absolute;
        top: 25%;
        left: 45%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
      }

      .star-6 {
        position: absolute;
        top: 5%;
        left: 50%;
        width: 0;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        fill: #fff;
        z-index: -5;
        transition: all 0.8s ease;
      }

      // .btnCon:hover::after {
      //         position: absolute;
      //         content: "";
      //         height: 150%;
      //         width: 3px;
      //         background-image: linear-gradient(90deg, #fff, #fff, #fff, #fff, #fff, #fff, #fff, #fff);
      //         transform: rotate(-45deg);

      //         left: -20px;
      //         top: -10px;
      //         z-index: -1;
      //         transition: .3s;
      //         -webkit-transition: .3s;
      //         -moz-transition: .3s;
      //         -ms-transition: .3s;
      //         -o-transition: .3s;
      //         animation: btnRorate 1s ;
      //         overflow: hidden;
      //     }
    }
  }
}

.Tools {
  margin-top: 180px;

  .title {
    text-align: left;
  }

  .itemList {
    margin-top: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    .item {
      height: 290px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      position: relative;

      &:hover {
        background: url("~@/assets/imgs/img_xzzt@2x.png") no-repeat left center;
        background-size: 100%;
        animation: backgroundSize 0.8s;
      }

      &:nth-child(1) {
        border-top: none;
      }

      .img {
        width: 222px;
        margin-left: 22px;
      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 26px;
        color: #ffffff;
        line-height: 26px;
        margin-left: 86px;
      }

      .itemContent {
        position: absolute;
        right: 69px;
        top: 69px;
        display: flex;

        img {
          display: block;
          width: 14px;
          height: 14px;
          margin-right: 12px;
          margin-top: 4px;
        }

        div {
          font-family: Montserrat;
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
          line-height: 21px;
          width: 371px;
        }
      }
    }
  }
}

.Team {
  margin-top: 210px;

  .intro {
    width: 1099px;
    margin: 42px auto 0 auto;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    line-height: 21px;
    text-align: center;
  }

  .itemList {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .item {
      width: 350px;
      margin-top: 77px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .avtar-outer {
        position: relative;

        .tag {
          width: 40px;
          margin-left: 13px;
          vertical-align: middle;
          position: absolute;
          right: 30px;
          bottom: 2px;
        }
      }

      .avtar {
        width: 200px;
        position: relative;
      }

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 22px;
        color: #ffffff;
        line-height: 34px;
        margin-top: 25px;
        position: relative;
      }

      .content {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        line-height: 23px;
      }
    }
  }
}

.Events {
  margin-top: 180px;

  .intro {
    margin-top: 42px;
    text-align: center;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    line-height: 21px;

    span {
      color: #f5b800;
    }
  }

  .swiperOptions {
    overflow: hidden;
    margin-top: 45px;
  }

  .swiperSlide {
    display: flex;
    flex-direction: row;
  }

  .swiperCon {
    display: flex;
    flex-direction: row;
    margin-right: 16px;

    .left {
      margin-right: 16px;

      img {
        width: 362px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;

      .one {
        margin-bottom: 16px;
      }

      img {
        width: 261px;
      }
    }
  }
}

.Roadmap {
  margin-top: 180px;

  .itemList {
    margin-top: 88px;
    background: url("~@/assets/imgs/img_roadmap_zs@2x.png") no-repeat center top;
    background-size: 239px;
    height: 867px;
    position: relative;

    .item {
      width: 440px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 42px 28px;

      &:nth-child(2) {
        position: absolute;
        right: 0;
        top: 220px;
      }

      &:nth-child(3) {
        position: absolute;
        left: 0;
        top: 480px;
      }

      .name {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 22px;
      }

      .content {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 22px;
        color: #ffffff;
        line-height: 22px;
        margin-top: 18px;
      }

      .detail {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 21px;
      }
    }
  }
}

.Community {
  margin-top: 180px;

  .itemList {
    margin-top: 54px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      border: 2px solid rgba(206, 187, 156, 0.2);
      width: 590px;
      height: 256px;
      border-radius: 20px;

      &:hover {
        background: url("~@/assets/imgs/img_news_fg@2x.png") no-repeat left
          center;
        background-size: 100%;
        animation: backgroundSize 0.8s;
      }
    }

    .name {
      font-family: Montserrat;
      font-weight: bold;
      font-size: 22px;
      color: #ffffff;
      line-height: 22px;
      margin: 30px 0 0 32px;
      padding-bottom: 28px;
      border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    }

    .content {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      color: #ffffff;
      line-height: 21px;
      margin: 0 50px;
      margin-top: 27px;
    }
  }
}

.FAQ {
  margin-top: 180px;

  .itemList {
    margin-top: 46px;

    .item {
      border: solid 1px rgba(255, 255, 255, 0.2);
      padding: 49px;
      position: relative;
      cursor: pointer;

      .name {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 22px;
        color: #ffffff;
        line-height: 22px;
      }

      img {
        position: absolute;
        right: 49px;
        top: 49px;
        width: 24px;
      }

      .content {
        margin-top: 30px;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 21px;
      }
    }
  }
}

.bottom {
  margin-top: 180px;

  .con {
    display: flex;
    flex-direction: row;
    border-top: solid 1px rgba(255, 255, 255, 0.2);
    padding-top: 48px;
    .left {
      margin-right: 134px;

      img {
        width: 356px;
      }
    }

    .right {
      .itemList {
        display: flex;
        flex-direction: row;
        width: 600px;
        flex-wrap: wrap;
      }

      .item {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 18px;
        color: #ffffff;
        width: 120px;
        line-height: 45px;

        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}

.copyRight {
  border-top: solid 1px rgba(255, 255, 255, 0.2);
  margin-top: 50px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  line-height: 68px;
  text-align: center;
}
</style>
