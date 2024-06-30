<template>
   <div class="wrapper">
    <h1>体检预约-登录</h1>
     <section>
       <div class="input-box">
         <i class="fa fa-user-o" aria-hidden="true" ></i>
         <input type="text" v-model="user.userid" placeholder="输入手机号"
                style="position: relative; left: 1.5vw;"/>
       </div>
       <div class="input-box">
         <i class="fa fa-lock" aria-hidden="true"></i>
         <input type="password" v-model="user.password" placeholder="输入登录密码"
                style="position: relative; left: 15px;"/>
       </div>
       <div class="reg-box">
         <p @click="toRegister()">注册</p>
         <p>忘记密码？</p>
       </div>
       <div class="button-box" @click="login">登录</div>
     </section>
    <footer>
      <div>
        <div class="line"></div>
        <p>有疑问请联系客服</p>
        <div class="line"></div>
      </div>
      <p>4008-889-333</p>
    </footer>
  </div>
</template>
<script>

export default {
  data() {
    return {
          title: '体检预约-登录',
          user: {
            userid: '',
            password: '',
          }
    }
  },
  methods: {
    login() {
      if (this.user.userid == '') {
        this.$message({
          showClose: true,
          message: '用户手机号不能为空',
          type: 'error', //success/warning/info/error
        })
        console.log('用户手机号不能为空')
        return; //跳出该函数，后面代码就不执行了
      }
      if (this.user.password == '') {
        this.$message({
          showClose: true,
          message: '密码不能为空',
          type: 'error', //success/warning/info/error
        })
        console.log('密码不能为空')
        return;
      }
      let url='/users/login';
      this.$axios.post(url, this.user).then((response) => {
        console.log(response.data);
        if (response.data.code == 200) {
          this.$setSessionStorage("token",response.data.data)
          this.$message({
            showClose: true, //是否显示关闭按钮
            message: '登录操作成功',
            type: 'success', //success/warning/info/error
            onClose: () => { //关闭消息框回调。
              this.$router.push({path: '/'});
            },
          })
          console.log(response.data.msg)
        }
        else
        {
          this.$message({
            showClose: true,
            message: "登录失败",
            type: 'error', //success/warning/info/error
          })
          this.$removeSessionStorage("token",response.data.data)
        }
      }).catch((error) => {
        console.log(error);
      });

      console.log('登录操作成功')
    },
    toRegister() { //跳转至注册界面
      this.$router.push({path: '/register'});
    },
  }
}
</script>
<style src="../assets/css/Login.css" scoped></style>
<style scoped>
</style>