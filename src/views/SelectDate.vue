<template>
    <!-- 总容器 -->
    <div class="wrapper">
        <header>
            <i class="fa fa-angle-left"></i>
            <p>选择体检日期</p>
            <div></div>
        </header>
        <div class="top-ban"></div>

        <section>
            <div class="date-box">
                <i class="fa fa-angle-left"></i> 
                <p>2024年7月</p>
                <i class="fa fa-angle-right" ></i> 
            </div>
            <table>
                <tr>
                    <th>日</th>
                    <th>一</th>
                    <th>二</th>
                    <th>三</th>
                    <th>四</th>
                    <th>五</th>
                    <th>六</th>
                </tr>
            </table>
          <ul>
            <li v-for="(c,index) in checkAvailability.days" :key="index">
              <p >
                {{ c.date!=null?new Date(c.date).getDate():'' }}
              </p>
              <p class="count">
                {{index%7==0 && c.date!=null?'':c.open == true && c.remainingSlots!=0?'余'+c.remainingSlots:"0"  }}
              </p>
              <p class="none">
                {{ index%7==0 && c.date!=null?'休息':''}}
              </p>
            </li>
          </ul>
        </section>

        <div class="bottom-btn">
            <div></div>
            <div>下一步</div>
        </div>


      <div class="bottom-ban"></div>
      <Footer></Footer>
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default{
    data () {
        return{
          checkAvailability:{
            hpId:1,  //值从上一个组件界面获得
            smId:1,  //值从上一个组件界面获得
            year:null,
            month:null,
            days:[],
            selectDay:"",
          }

        }
    },
    created(){ //Vue组件创建完毕钩子函数，在这里请求服务器数据。
      this.initDate();
      this.loadOrdersData()
    },
    methods:{
      initDate(){
        let getTime = new Date().getTime();  //当前时间戳
        let d = new Date(getTime);
        this.checkAvailability.year = d.getFullYear();
        this.checkAvailability.month = (d.getMonth() +1);
      },
      //得到当前日期参数值：
      getCalendarDate(){
        let year = this.checkAvailability.year;
        let month = this.checkAvailability.month+'';
        month = month.padStart(2,'0');
        let day = '01';
        //2024-07-02
        return `${year}-${month}-${day}`;  //模版字符串 ES6
      },
      //加载日历和预约订单量
      loadOrdersData(){
        let url="/orders/checkAvailability";
        this.$axios.post(url,
          {
            smId:this.checkAvailability.smId,
            hpId:this.checkAvailability.hpId,
            startDate:this.getCalendarDate(),
          }).then(response=>{
          this.checkAvailability.days = response.data.data.days;

          for(let i=0;i<this.checkAvailability.days.length;i++){
            if(this.checkAvailability.days[i].date!=null){
              this.checkAvailability.days[i].day =
                  this.checkAvailability.days[i].date.substring(8);
            }
          }
        }).catch(e=>{console.log(e);});
      }
    },
    components: {
        //注册子组件   使用名字:导入名字
        Footer,
    },
}
</script>
<style src="@/assets/css/SelectDate.css" scoped></style>
<style scoped>
</style>
