<template>
  <div>
    <!-- <TypeNav></TypeNav> -->
    <!-- 大写变小写  在中间添加- -->
    <type-nav></type-nav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import Brand from './Brand'
import Floor from './Floor'
import Like from './Like'
import ListContainer from './ListContainer'
import Rank from './Rank'
import TodayRecommend from './TodayRecommend'


export default {

  name: 'Home',
  components:{
    Brand,
    Floor,
    Like,
    ListContainer,
    Rank,
    TodayRecommend
  }

}
</script>

<style lang="less" scoped>
  .home {
    color: red;
  }
</style>
