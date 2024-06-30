<template>
  <!-- app导航栏页脚 -->
  <!-- 语义化标签，作用和div是一样的，就是看到标签名就知道现实内容是什么 -->
  <footer>
    <ul>
      <!-- 事件绑定 -->
      <li @click="toHome()">
        <i class="fa fa-hospital-o" aria-hidden="true"></i>
        <p>云医院</p>
      </li>
      <li>
        <i class="fa fa-opencart" aria-hidden="true"></i>
        <p>商城</p>
      </li>
      <li>
        <i class="fa fa-search" aria-hidden="true" ></i>
        <p>发现</p>
      </li>
      <li @click="toUserInfo()">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <p>我的</p>
      </li>
    </ul>
  </footer>
</template>
<script>
export default{
  data () {
    return {
//组件界面定义变量
    }
  },
  methods:{
    toHome(){
    //使用路由跳转至首页。
      this.$router.push({path:"/"});
    },
    toUserInfo(){
      this.$router.push({path:"/login"});
    }
  },
}
</script>
<style scoped>
footer{
  width: 100%;
  height: 14.2vw;
  /* 视口单位 viewport */
  background-color:#fff;
  position: fixed; /*使用坐标定位*/
  left:0;
  bottom: 0;
  border-top:0.3vw solid #e9e9e9;
  box-sizing: border-box;
}
footer ul{
  width:100%;
  height: 14.2vw;
  display: flex; /* 弹性布局 */
  align-items: center;
  justify-content: space-around;
}
footer ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  color:#666;
}
</style>
