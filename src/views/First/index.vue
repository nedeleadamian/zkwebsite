<template>
  <div></div>
</template>
<script>
export default {
  name: "LatheBufferGeometry",
  mounted() {
    if (
      navigator.userAgent.match(
        /(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i
      )
    ) {
      this.$router.push({ path: "/page" });
    } else {
      this.$router.push({ path: "/page" });
    }
  },
};
</script>
