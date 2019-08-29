<template lang="pug">
    .page1
      button(@click='goPage1') 返回Page1
      | This is {{title}}
      button(@click='goPage3') 进入Page3
</template>
<script>
  export default {
    computed: {
      title () {
        return this.$route.name
      }
    },
    methods: {
      goPage1 () {
        this.$router.push({
          path: '/page1'
        })
      },
      goPage3 () {
        this.$router.push({
          path: '/page3'
        })
      }
    }
  }
</script>