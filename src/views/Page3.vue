<template lang="pug">
    .page1
      button(@click='goPage1') 返回Page1
      | This is {{title}}
      button(@click='goPage2') 返回Page2
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
      goPage2 () {
        this.$router.push({
          path: '/page2'
        })
      }
    }
  }
</script>