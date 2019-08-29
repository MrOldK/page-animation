<template lang="pug">
    .page1
      button(@click='goPage2') 进入Page2
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
      goPage2 () {
        this.$router.push({
          path: '/page2'
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