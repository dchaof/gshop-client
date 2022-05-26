<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <a href="###">登录</a>
            <a href="###" class="register">免费注册</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <!-- <a class="logo" title="尚品汇" href="###" target="_blank"> </a>-->
        <!-- 声明式导航 -->
        <router-link to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model.trim="keyword"
          />
          <!-- 编程式导航 -->
          <!-- .prevent取消默认行为 -->
          <button class="sui-btn btn-xlarge btn-danger"  @click.prevent='tosearch'>
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      keyword:''
    }
  },
  methods:{
    tosearch(){
      //参数字符串形式
      // this.$router.push('/search/' + this.keyword + '?keyword2=' + this.keyword.toUpperCase())

      let location = {
        name:'search',
        query:this.$route.query//将当前已有的query参数携带上
      }
      if(this.keyword){
        location.params = {keyword:this.keyword}
        // location.query = {keyword2:this.keyword.toUpperCase()}
      }

      // this.$router.push(location)
      /* 
        1.从其他页面跳转到搜索页面用replace
        2.从search跳转到search用push
        */
       if(this.$route.name == 'search'){
        this.$router.replace(location);
       }else{
        this.$router.push(location);
       }

      /* 
      router.push(location, onComplete?, onAbort?)
      router.push(location).then(onComplete).catch(onAbort)
      */

     //解决方案  添加回调函数 
    //  this.$router.push(location,()=>{})
    //方法二： 添加catch回调
    // this.$router.push(location).catch(()=> {})
    }
  },
  mounted(){
    //在Header中绑定自定义事件监听，在回调函数中进行清除数据
    this.$bus.$on('removeKeyword',()=>{
      this.keyword = ''
    })
  },
  beforeDestroy(){
    this.$bus.$off('removeKeyword')
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
