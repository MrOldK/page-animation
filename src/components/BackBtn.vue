<template lang="pug">
  .back-btn(@click="goBack")
</template>
<script>
  export default {
    methods: {
      goBack () {
        this.$router.back()
      }
    }
  }
</script>
<style lang="stylus">
  .back-btn
    width 22px
    height 22px
    background-image url('../assets/arrow.png') 
    background-repeat no-repeat
    background-position center
    background-size 100% 100%
</style>