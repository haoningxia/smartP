  
<template>
    <div class="login_cont">
        <img src="../assets/login.jpeg" alt="">
        <div class="login_from">
            <div class="opacity"></div>
            <div class="form_cont">
                 <h3>test</h3>
                 <form ref="from1">
                       <input type="text" v-model="loginFrom.username" value="macro">

                       <input type="text" v-model="loginFrom.password" value="123456">
                 </form>
                 <el-button type="primary"  @click="onlogin">提交</el-button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'login',
  data() {
      return {
          loginFrom: {
            username: 'macro',
            password: '123456',
            client_secret:'123456',
            client_id:'client-app',
            grant_type:'password'
          }
      }
  },
  mounted() {
  },
  methods: {
      onlogin () {
      let formData = new FormData();
      for(var key in this.loginFrom){
        formData.append(key,this.loginFrom[key]);
      }
    this.$store.dispatch('setToken',formData);
    }
}
}
</script>
<style scoped>
    .login_cont{
        position: relative;
        text-align: center;
    }
    .login_cont img {
        width: 100%;
        height: 100%;
    }
    .login_from{
        position: absolute;
        left:34%;
        top:20%;
        width: 450px;
        height: 400px;
    }
    .opacity{
        position: absolute;
        left: 0;
        top: 0;
        background: #ccc;
        opacity: .7;
        width: 100%;
        height: 100%;
    }
    .form_cont{
        position: absolute;
        left:0;
        top:0;
        width: 88%;
        height: 88%;
        margin:25px;
    }
    .form_cont input{
        width: 100%;
        height: 30px;
        border: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 10px;
        padding:0 10px
    }
    .form_cont h3{
        font-size: 28px;
        line-height: 100px;
    }
  
</style>
<style>
  .el-input__inner{
        background: none!important;
        border:1px solid #888;
    }
</style>