<template>
<!-- 总容器 -->
  <div class="wrapper">

  <!-- 头部 -->
  <header>
      <div class="header-content">
          <div class="header-content-left">
              <h1>上海海洋大学</h1>
              <i class="fa fa-chevron-down" aria-hidden="true" ></i>
          </div>
          <i class="fa fa-envelope-o" aria-hidden="true" ></i>
      </div>
      <div class="header-bottom"></div>
  </header>

  <div class="top-ban"></div>
  <!-- 导航部分 -->
  <nav>
      <div class="logo-img">
          <img src="@/assets/img/logo.png">
      </div>
      <ul>
          <li>
              <img src="@/assets/img/menu01.png">
              <div class="nav-item-text">
                  <h3>免费咨询</h3>
                  <p>新型冠状病毒肺炎</p>
              </div>
          </li>
          <li>
              <img src="@/assets/img/menu02.png">
              <div class="nav-item-text">
                  <h3>网络问诊</h3>
                  <p>图文视频网络咨询</p>
              </div>
          </li>
          <li>
              <img src="@/assets/img/menu03.png">
              <div class="nav-item-text">
                  <h3><span class="menu03-h3-span">e</span>心门诊</h3>
                  <p>复旦医科大学专家</p>
              </div>
          </li>
          <li>
              <img src="@/assets/img/menu04.png">
              <div class="nav-item-text">
                  <h3>慢病管理</h3>
                  <p>血压血糖健康管理</p>
              </div>
          </li>
          <li>
              <img src="@/assets/img/menu05.png">
              <div class="nav-item-text">
                  <h3>上门护理</h3>
                  <p>网上购买上门服务</p>
              </div>
          </li>
          <li>
              <img src="@/assets/img/menu06.png">
              <div class="nav-item-text">
                  <h3>团检预约</h3>
                  <p>团体体检套餐定制</p>
              </div>
          </li>
      </ul>
  </nav>

  <!-- 我的健康报告 -->
  <div class="report">
      <div class="item-title">
          <p>我的健康报告</p>
      </div>
      <div class="report-content">
          <p>随时随地查看体检报告</p>
          <div>立即查看</div>
      </div>
  </div>

  <!-- 推荐医生 -->
  <div class="doctor">
      <div class="item-title">
          <p>推荐医生</p>
      </div>
    <ul>
        <!-- key给到的值，要不重复。 -->
        <li v-for="(item) in doctorList" :key="item.id">
          <img :src="item.img">
          <h3>{{item.name}}</h3>
          <p>{{item.job}}</p>
        </li>
    </ul>
  </div>

  <!-- 健康评估 -->
  <div class="assess">
      <div class="item-title">
          <p>健康评估</p>
          <span>更多</span>
      </div>
      <div class="assess-content">
          <div class="scroll-box" id="scrollBox">
              <ul id="scrollBar">
                  <li><img src="@/assets/img/assess1.png"></li>
                  <li><img src="@/assets/img/assess2.png"></li>
                  <li><img src="@/assets/img/assess3.png"></li>
                  <li><img src="@/assets/img/assess4.png"></li>
                  <li><img src="@/assets/img/assess5.png"></li>
                  <li><img src="@/assets/img/assess6.png"></li>
              </ul>
          </div>
      </div>
  </div>

  <!-- 健康咨询 -->
  <div class="info">
      <div class="item-title">
          <p>健康咨询</p>
      </div>
      <ul>
          <li>
              <img src="@/assets/img/info1.png">
              <div>
                  <h3>查出肺结核，我是不是要得肺癌了？</h3>
                  <span>肺结核一定会导致肺癌吗？</span>
                  <p><i class="fa fa-commenting-o"></i>3699</p>
              </div>
          </li>
          <div class="middle-ban"></div>
          <li>
              <img src="@/assets/img/info2.png">
              <div>
                  <h3>体检发现甲状腺结节，怎么办？</h3>
                  <span>日常需注意什么？</span>
                  <p><i class="fa fa-commenting-o"></i>4256</p>
              </div>
          </li>
      </ul>
  </div>

  <div class="bottom-ban"></div>
      <Footer>
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
          <i class="fa fa-search" aria-hidden="true"></i>
          <p>发现</p>
        </li>
        <li @click="toUserInfo()">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <p>我的</p>
        </li>
        </ul>
      </Footer>
  </div>
</template>
<script>
 import Footer from '../components/Footer.vue'
 export default{
    data () {
        return {
          isLogin:this.$getSessionStorage('token')!=null?true:false,
          doctorList:[
            {id:1,name:'刘长胜',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:2,name:'孙鹿',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:3,name:'吕文达',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:4,name:'李若辰',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=18&f=JPEG?w=400&h=419'},
            {id:5,name:'张石梵',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:6,name:'赵桂锋',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:7,name:'李文',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
            {id:8,name:'吴晓梦',job:'主任医院',img:'https://img1.baidu.com/it/u=798357057,1094340818&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=419'},
          ]
        }
    },
    methods:{
    },
    components: {
        //注册子组件   使用名字:导入名字
        Footer,
    },
 }
</script>
<style src="@/assets/css/Home.css" scoped></style>
<style scoped>

</style>