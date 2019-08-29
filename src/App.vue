<template lang="pug">
  #app
    .back-btn-container
      back-btn
    transition(:name="transitionName")
      router-view(class="router-view")
</template>
<script>
  import BackBtn from './components/BackBtn'

  export default {
    name: 'app',
    components: {
      BackBtn
    },
    data () {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route (to, from) {
        if (from.meta.index) {
          switch (to.meta.index >= from.meta.index) {
            case true: 
              this.transitionName = "slide-left"
              break
            case false: 
              this.transitionName = "slide-right"
          }
        } 
      }
    }
  }
</script>
<style lang="stylus">
  *
    margin: 0
    padding: 0
  html, body 
    width: 100%
    height: 100%
  #app 
    width: 100%
    height: 100%
    font-family: 'Avenir, Helvetica, Arial, sans-serif'
    -webkit-font-smoothing: antialiased
    text-align: center
  .router-view 
    display flex
    position: absolute
    width: 100%
    height: 100%
    flex-direction column
    align-items center
    justify-content center
    overflow-x: hidden
    will-change: transform
    transition: all .3s ease
    -webkit-overflow-scrolling: touch
  button 
    display: block
    width: 200px
    height: 42px
    margin: 10px auto
    border-radius: 21px
    -webkit-tap-highlight-color: transparent
    -webkit-appearance: none
    -webkit-touch-callout: none
    -webkit-user-select: none
    border: none
    outline: none
    color: #fff
    background: -moz-linear-gradient(left, #ff5c77 0, #ff953f 100%)
    background: -webkit-linear-gradient(left, #ff5c77, #ff953f)
    background: linear-gradient(90deg, #ff5c77, #ff953f)
  .back-btn-container
    position: fixed
    top: 0
    z-index: 9
    width: 100%
    height: 50px
    line-height: 50px
    color: #fff
    background: -moz-linear-gradient(left,#ff5c77 0,#ff953f 100%)
    background: -webkit-linear-gradient(left,#ff5c77,#ff953f)
    background: linear-gradient(90deg,#ff5c77,#ff953f)
  .back-btn
    position: absolute 
    left: 30px
    top: 14px
  .slide-left-enter,
  .slide-right-leave-active 
    opacity: 0
    transform: translate3d(80%, 0, 0)
  .slide-right-enter,
  .slide-left-leave-active 
    opacity: 0
    transform: translate3d(-80%, 0, 0)
</style>
