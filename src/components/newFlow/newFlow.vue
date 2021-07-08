<template>
<div>
    <div class="Menubar">
      <!-- <img src="" alt=""> -->
      <Avatar icon="pi pi-search" size="large"/>
    </div>
    <div class="edit-container">
        <div class="left-container">
                <div class="component-wrap" id="config-Graph" :class="!componentShow?'component-shou':''">
                <i class="left_close" v-if="componentShow" @click="closeChange()"></i>
                <i class="left_open" v-else @click="closeChange()"></i>
                <div v-if="!componentShow" class="expend-comp" @click="closeChange()"> <i class="el-icon-s-unfold"></i> </div>
                <div style="overflow: hidden;height: 100%;" v-if="componentShow">
                    <div class="component-top"  :style="'height:'+topAreaHeight+'px'">
                            <component is="viewList"></component>
                    </div>
                    <p class="config-table-height" @mousedown="topAreaHandlers"  :style="'top:'+(topAreaHeight - 10)+'px'"  id="config-table-height"></p>
                    <div class="component-bottom">
                        <component is="flowComList"></component>
                        <!-- <component is="htmlCompList"></component> -->
                    </div>
                </div>
                
            </div>
        </div>
          <div class="middle-area" style=" z-index: 0;" :style="{ 'width' : middleWidth }"
            @click="clearCurrentComp" :class="componentShow?'middle-area-shou':''" id="canvasContainer">
                    <work-Boards @setMouseMoveFlag="setMouseMoveFlag"></work-Boards>  
                <!-- <template v-if="currentComplexComp != ''">
                    <complex-Boards @setMouseMoveFlag="setMouseMoveFlag"></complex-Boards>
                </template>
                <template v-else>
                    <work-Boards></work-Boards>
                </template> -->
        </div>
         <list-Config ref="mycompconfig" @compconfigevent='rightChange()'></list-Config>
    </div>
    </div>
</template>
<script>
import{ mapGetters } from 'vuex'
import viewList from '@/components/newFlow/viewList'
import flowComList from '@/components/newFlow/flowComList'
import listConfig from '@/components/newFlow/listConfig'
import workBoards from '@/components/newFlow/workBoards'
// import workBoards from '@/components/newReport/workBoards'

export default {
    components: {
        viewList,
        flowComList,
        listConfig,
        workBoards
    },
    data(){
        return{
            componentShow:true,
            topAreaHeight:200,
            middleWidth:"calc(100% - 586px)",
            mouseMoveFlag:false
        }
    },
    computed: {
        ...mapGetters(['currentComplexComp'])
    },
    created: function (){
        console.log(this.currentComplexComp);
    },
    methods: {
        closeChange(){

        },
        topAreaHandlers(){

        },
        clearCurrentComp(){

        },
        rightChange(){
            if(!this.componentShow){
                if(this.$refs.mycompconfig.rightShow){
                    this.middleWidth = "calc(100% - 380px)"
                }else{
                    this.middleWidth = "calc(100% - 45px)"
                }
                
            }else{
                if(this.$refs.mycompconfig.rightShow){
                    this.middleWidth = "calc(100% - 586px)"
                }else{
                    this.middleWidth = "calc(100% - 250px)"
                }
            }
            
        },
        setMouseMoveFlag(val){
            this.mouseMoveFlag = val
        },
    }
}
</script>
<style>
.left-container{
    width: 250px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 51px;
    background-color: #fff;
    -webkit-transition: all .2s;
    transition: all .2s;
    border-right: 1px solid #ccc;
}
</style>

