<template>
  <div>
    <p>search页面</p>
    <p>路由params参数：{{$route.params.keyword}}</p>
    <p>路由queryt参数：{{$route.query.keyword2}}</p>
    <p>路由params参数：{{keyword3}}</p>
    <p>路由query参数：{{keyword4}}</p>

  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword3','keyword4']
}
</script>

<style lang="less" scoped>

</style>
