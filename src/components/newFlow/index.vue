<template>
  <div class="login_cont111">
        <img src="@/assets/login.jpeg" alt="">
        <div class="login_infor">
            <el-button type="primary"  @click="helloFn">点我1</el-button>
            <el-button type="primary"  @click="usernameFn">点我2</el-button>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            helloErr:'',
            usrErr:'', 
        }
    },
    methods:{
        helloFn(){
             this.$axios({
                method:"get",
                url:this.Constant.API.hello,
                headers: {
                "Authorization": this.$store.state.newFlowController.token
                },
            }).then((res)=>{
                this.$message({
                    message: res.data.message,
                    type: 'warning'
                });
            }).catch((res) => {
               this.helloErr = res.data.message
                this.$message({
                    message: this.helloErr,
                    type: 'warning'
                });  
			});
        },
        usernameFn(){
            this.$axios({
                method:"get",
                url:this.Constant.API.currentUser,
                headers: {
                "Authorization": this.token1
                },
            }).then((res)=>{
                this.$message({
                    message: res.data.message,
                    type: 'warning'
                });
            }).catch((res) => {
                this.usrErr = res.data.message     
                 this.$message({
                    message: this.usrErr,
                    type: 'warning'
                });   
			});
        }
    }
}
</script>
<style scoped>
    .login_cont111{
        position: relative;
        text-align: center;
    }
    .login_cont111 img {
        width: 100%;
        height: 100%;
        opacity: .5;
    }
    .login_infor{
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
    .form_cont h3{
        font-size: 28px;
        line-height: 100px;
    }
  
</style>