<template>
     <div class="right-area" :class="!rightShow?'right-area-shou':''">
    <i class="right_close" v-if="rightShow" @click="rightShowChange()"></i>
    <i class="right_open" v-else @click="rightShowChange()"></i>
    <!-- <template v-if="currentCompConfig != ''">
      <template v-if="currentCompID == '' && currentComplexComp == ''">
        <view-Config></view-Config>
      </template>
      <template v-if="currentCompID == '' && currentComplexComp != ''">
        <complex-Comp></complex-Comp>
      </template>
      <template v-if="currentCompConfig != undefined && currentCompConfig.hasOwnProperty('compType')">
        <component :is="currentCompConfig.compType" :currentCompConfig="currentCompConfig" :key=currentCompConfig.compID></component>
      </template>
    </template> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      rightShow:true,
    }
  },
  methods:{
      rightShowChange(){
        this.rightShow = !this.rightShow
        this.$emit("compconfigevent")
    },
  }
}
</script>
<style lang="less">
.right-area-shou {
  width: 0!important;
  transition: all 0.2s;
}
.edit-container .right-area {
  position: absolute;
  right: 0;
  top: 51px;
  bottom: 0;
  width: 336px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  &>i{
      position: absolute;
      display: inline-block;
      height: 50px;
      top: calc(50% - 25px);
      cursor: pointer;
      width: 8px;
      left: -8px;
  }
  .right_close{
      background: url("../../assets/right_close.png") no-repeat;
  }
  .right_open{
      background: url("../../assets/right_open.png") no-repeat;
  }
  &>div{
    height: 100%;
  }
}
</style>