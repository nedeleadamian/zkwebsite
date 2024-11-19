<template>
    <div class="home">
        
            <!-- <top-bar v-if="permission.length===0" /> -->
            <router-view class="home-body" />
   
    </div>
</template>

<script>
export default {
    name: 'Home',

}
</script>
<style lang="scss">
    .home {
        width: 100%;
         //overflow-x: hidden;
        .home-content {
            width: calc(100% - 140px);
            position: relative;
            flex-grow: 1;
            .home-body{
                background: #F8F9FC;
                width: 100%;
                overflow-x: hidden;
            }
        }
    }
</style>