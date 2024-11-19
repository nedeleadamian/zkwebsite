<template>
    <div class="activity">
        <img src="@/assets/img/activity.png">
        <div class="con">
            Blind Box Event
        </div>
        <a
            class="btn"
            href="">
            ENTER
        </a>
    </div>
</template>

<script>

export default {
    name: "NavBar",

    data() {
        return {
        };
    },

};
</script>

<style lang="scss">
    .activity{
        position: fixed;
        right: 32px;
        top:50%;
        margin-top: -103px;
        .con{
            position: absolute;
            left:60px;
            top:90px;
            background: linear-gradient(0deg, #5BD3FF 0%, #9200FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 16px;
            font-family: 'Alibaba PuHuiTi';
            font-weight: 600;
        };
        .btn{
            position: absolute;
            left:67px;
            top:123px;
            width: 102px;
            height: 32px;
            background: #FFFFFF;
            border-image: linear-gradient(0deg, #B9ECFF, #E7C8FF) 10 10;
            border-radius: 15px;
            font-size: 12px;
            font-family: 'Alibaba PuHuiTi';
            font-weight: 400;
            color: #8D13FF;
            line-height: 24px;
            text-align: center;
            line-height: 32px;
            display: block;
            text-decoration: none;
        }
    }
</style>
