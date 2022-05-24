<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    //异步获取三级分类列表
    /* getCategoryList().then(result=>{
      console.log('result',result)
    }).catch(error=>{
      console.log(error)
    }) */

    
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')

  }
}
</script>

<style>

</style>


