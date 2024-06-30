<template>
    <!-- 总容器 -->
    <div class="wrapper">
        <header>
            <i class="fa fa-angle-left" ></i>
            <p>注册</p>
            <div></div>
        </header>
        <div class="top-ban"></div>
        <h1>欢迎注册</h1>
        <table>
            <tr>
                <td>手机号码</td>
                <td><input type="text"  placeholder="请输入手机号码" /></td>
            </tr>
            <tr>
                <td>真实姓名</td>
                <td><input type="text"  placeholder="真实姓名便于查看体检报告" /></td>
            </tr>
            <tr>
                <td>生日</td>
                <td><input type="date"  /></td>
            </tr>
            <tr>
                <td>性别</td>
                <td>
                    <input type="radio"  value="1" />男
                    <input type="radio"  value="0" />女
                </td>
            </tr>
            <tr>
                <td>身份证号</td>
                <td><input type="text"  placeholder="请输入身份证号" /></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="password"  placeholder="请输入密码" /></td>
            </tr>
            <tr>
                <td>确认密码</td>
                <td><input type="password"  placeholder="请再次输入密码" /></td>
            </tr>
        </table>
        <div class="btn" @click="submit()">完成</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      password2:'',
      user:{
        userid:'',
        realname:'',
        password:'',
        sex:1,
        identitycard:'',
        birthday:''
      }
    }
  },
  methods:{
    toBack(){
      this.$router.back();
    },
    submit(){
      if(this.user.password != this.password2){
        this.$message({
          showClose: true,
          message: '两次输入的密码不一致',
          type: 'error',
        })
        return;
      }
      let url ="/users/register"
      this.$axios.post(url,this.user).then(repseonse=>{
        if(repseonse.data.code==200){
          this.$message({
            showClose: true,
            message: '注册用户成功',
            type: 'success',
          });
          this.$router.push({path:"/login"});
        }else{
          this.$message({
            showClose: true,
            message: repseonse.data.msg,
            type: 'error',
          })
        }
      }).catch(e=>{
        console.log(e);
        this.$message({
          message: '请求失败，请检查网络连接',
          type: 'error',
        })
      })
    }
  }
}
</script>
<style src="@/assets/css/Register.css" scoped></style>
<style scoped>
</style>