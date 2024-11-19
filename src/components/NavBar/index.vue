<template>
    <nav
        id="page-left"
        :class="{ en: type === 'en'}">
        <div :class="{con: true, sub:origin !== 'page'}">
            <div class="logo">
                <img
                    src="@/assets/imgs/logo@2x.png"
                    alt="">
            </div>
            <div
                class="list">
                <div
                    v-for="(item, index) in bars"
                    :key="index"
                    :class="{current: barsIndex === index}"
                    class="item"
                    @click="handleRoute(index, item.path)">
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
    props:{
        origin:{
            type: String,
            default:'page'
        },
    },
    data() {   
        return {
            bars: [{
                path:'#Home',
                cn:'Home',
                en: 'Home',
            },{
                path:'#About',
                cn:'About',
                en: 'About',
            },{
                path:'#Features',
                cn:'Features',
                en: 'Features',
            },{
                path:'#Tools',
                cn:'Tools',
                en: 'Tools',
            },{
                path:'#Team',
                cn:'Team',
                en: 'Team',
            },{
                path:'#Events',
                cn:'Events',
                en: 'Events',
            },{
                path:'#Community',
                cn:'Community',
                en: 'Community',
            },{
                path:'#FAQ',
                cn:'FAQ',
                en: 'FAQ',
            },{
                path:'#Roadmap',
                cn:'Roadmap',
                en: 'Roadmap',
            }],
            list:[{
                name:'English',
                type:"en"
            },{
                name:'中文简体',
                type:"cn"
            }],
            barsIndex: 0,
            type: 'en'
        };
    },
    watch:{
        $route:{
            handler(val,oldval){
                console.log(val);//新路由信息
                console.log(oldval);//老路由信息
            },
            // 深度观察监听
            deep: true
        }
    },
    created(){
        this.path = this.$route.path;
        this.type = localStorage.getItem('language') || 'en';
    },
    methods: {
        selectIndex(path){
            this.path = path;
            this.$router.push(path)
        },
        hanleChangeLanguage(){
            const type = localStorage.getItem('language') === 'en' ? 'cn' : 'en';
            this.type = type;
            localStorage.setItem('language',type)
            this.$emit('changeLanguage', type)
        },
        handleRoute(index,path){
          console.info(path, "00000000000000")
            this.barsIndex= index;
            this.$router.push({path: path});
        }
    }
};
</script>

<style lang="scss">
    nav {
        height: 110PX;
        line-height: 110PX;
        // position: fixed;
        // left:0;
        // top:0;
        width: 100%;
        z-index: 100088888888;
        position: relative;
        .con{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 1300px;
            margin: 0 auto;;
            height: 110PX;
            &.sub{
                justify-content: space-between;
            }
            .logo{
                img{
                    width:176PX;
                    margin-top:38PX;
                }
            }
            .list{
                line-height: 110PX;
                height: 110PX;
                display: flex;
                flex-direction: row;
                margin-left: 20PX;
                .item{
                    padding:0 25PX;
                    cursor: pointer;
                    a{
                        text-decoration:none;
                        font-family: Montserrat;
                        font-weight: 500;
                        font-size: 18px;
                        color: #FFFFFF;
                    }
                    &.current, &:hover{
                        a{
                           img{
                                transform: rotate(90deg);
                           }
                        }
                    }
                }
                .WALLET{
                    padding:0 25PX;
                    cursor: pointer;
                    .el-dropdown-link{
                        text-decoration:none;
                        font-family: Montserrat;
                        font-weight: bold;
                        color: #14212B;
                        text-transform: uppercase;
                        position: relative;
                        height: 180PX;
                        display: inline-block;
                        font-size: 20PX;
                        span{
                            margin-left: 10PX;
                        }
                    }
                    &.current, &:hover{
                        a{
                           img{
                                transform: rotate(90deg);
                           }
                        }
                    }
                }

            }
        }
        &.status{
            box-shadow: 0PX 2PX 48PX 0PX rgba(0,0,0,0.06);
        }
        &.en{
            a{
                font-family: Montserrat;
            }
        }
    }
    .el-dropdown-menu{
      margin-top: -70PX !important;
      width: 140PX !important;
      li{
        a{
          text-decoration:none;
          font-family: Montserrat;
          font-weight: bold;
          color: #14212B;
          position: relative;
          height: 60PX;
          line-height: 60PX;
          display: inline-block;
          font-size: 20PX;
        }
      }
    }
</style>
