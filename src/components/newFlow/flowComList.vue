<template>
 <div class="chart-div">
  <div class="comp-list">
    <b>组件
        <InputText type="text" v-model="searchKey" placeholder="请输入组件名称"  class="search-key"/>
        <!-- <el-input v-model="searchKey" clearable  placeholder="请输入组件名称" class="search-key" suffix-icon="iconfont iconsearch" @input="searchHandler"></el-input> -->
    </b>
    <div style="height: calc(100% - 40px);overflow: auto;" class="myScollStyle">
        <template v-if="searchKey === ''">
            <div v-for="(type,index) in componentsList"  class="sss">
                <template v-if="currentComplexComp == '' || (currentComplexComp != '' && type.typeNode != '9')">
                    <div v-if="configOptionValue === type.typeNode || configOptionValue==='All'" class="components-list-container-div" >
                            <p :class="type.expandFlag?'components-type-tab current':'components-type-tab'" @click="setExpandFlag(index)"  >
                            <span style="float:left;color:#333;margin-right: 4px">
                                <i :class="type.expandFlag === true?'fa fa-caret-down':'fa fa-caret-right'"></i>
                            </span>
                            <span style="float:left;color:#333">{{type.typeName}}</span>
                            </p>
                            <ul v-show="type.expandFlag">
                            <li v-for="(component,subindex) in type.components" class="iot-report-comp" draggable="true" @dragstart="setComptype(component)" :class="{'sel-li':component.dataType === currentSelectedCompType}">
                                <img :src="component.imgSrc" class="componentimgSrc"/>
                                <span class="label">{{component.label}}</span>
                                </li>
                            </ul>
                    </div>
                </template>
            </div>
        </template>
        <div v-else >
            <ul v-if="searchResultArray.length>0">
                <li v-for="(component,subindex) in searchResultArray" class="iot-report-comp" draggable="true" @dragstart="setComptype(component)"  :class="{'sel-li':component.dataType === currentSelectedCompType}">
                    <img :src="component.imgSrc" class="componentimgSrc"/>
                    <span class="label">{{component.label}}</span>
                </li>
            </ul>
            <div v-else class="nothingserch">
                暂未搜索到任何结果 请尝试其他关键词
            </div>
        </div>
    </div>
    
  </div>
 </div>
  
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'chartCompList',
  data () {
    return {
      searchKey:'',
      configOptionValue: 'All',
      searchResultArray:[],
      componentsList: [
                {
                    typeName: '图表',
                    components: [
                        {
                            label: '折线图',
                            key: '折线图',
                            dataType: 'lineChart',
                            imgSrc: require('../../assets/flowIconCont/chart/lineChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '纵向柱图',
                            key: '',
                            dataType: 'barChart',
                            imgSrc: require('../../assets/flowIconCont/chart/barChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '纵向堆叠柱图',
                            key: '',
                            dataType: 'barChartStack',
                            imgSrc: require('../../assets/flowIconCont/chart/barChartStack.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                         {
                            label: '横向柱图',
                            key: '',
                            dataType: 'barChartHeng',
                            imgSrc: require('../../assets/flowIconCont/chart/barChartHeng.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '横向堆叠柱图',
                            key: '',
                            dataType: 'barChartHengStack',
                            imgSrc: require('../../assets/flowIconCont/chart/barChartHengStack.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
        
                        {
                            label: '饼图',
                            key: '',
                            dataType: 'pieChart',
                            imgSrc: require('../../assets/flowIconCont/chart/pieChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '多维度饼图',
                            key: '',
                            dataType: 'pieMuitiChart',
                            imgSrc: require('../../assets/flowIconCont/chart/pieMuitiChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '玫瑰图',
                            key: '',
                            dataType: 'pieAreaChart',
                            imgSrc: require('../../assets/flowIconCont/chart/pieAreaChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '仪表盘',
                            key: '',
                            dataType: 'gaugeChart',
                            imgSrc: require('../../assets/flowIconCont/chart/gaugeChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '多维度仪表盘',
                            key: '',
                            dataType: 'multiGaugeChart',
                            imgSrc: require('../../assets/flowIconCont/chart/multiGaugeChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '横向刻度尺',
                            key: '',
                            dataType: 'scaleGaugeChart',
                            imgSrc: require('../../assets/flowIconCont/chart/scaleGaugeChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '纵向刻度尺',
                            key: '',
                            dataType: 'scaleGaugePChart',
                            imgSrc: require('../../assets/flowIconCont/chart/scaleGaugePChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '混合柱状图',
                            key: '',
                            dataType: 'barlineChart',
                            imgSrc: require('../../assets/flowIconCont/chart/barlineChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '多Y轴混合图',
                            key: '',
                            dataType: 'lineMoreChart',
                            imgSrc: require('../../assets/flowIconCont/chart/lineMoreChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },  
                        {
                            label: '状态时长图',
                            key: '状态时长图',
                            dataType: 'stateChart',
                            imgSrc: require('../../assets/flowIconCont/chart/stateChart.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                    ],
                    expandFlag: true,
                    typeNode: '2'
                },
                 {
                    typeName: '表格',
                    components: [
                         {
                            label: '普通表格',
                            key: '',
                            dataType: 'tableComp',
                            imgSrc: require('../../assets/flowIconCont/chart/tableComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },      
                        {
                            label: '复合表格',
                            key: '',
                            dataType: 'tableView',
                            imgSrc: require('../../assets/flowIconCont/chart/viewTable.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                    ],
                    expandFlag: true,
                    typeNode: '7'
                },
                {
                    typeName: '网页',
                    components: [
                        {
                            label: '时间',
                            key: '',
                            dataType: 'dateTimes',
                            imgSrc: require('../../assets/flowIconCont/control/dateTimes.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '水平菜单',
                            key: '',
                            dataType: 'menuComp',
                            imgSrc: require('../../assets/flowIconCont/control/menuComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '垂直菜单',
                            key: '',
                            dataType: 'menuVerComp',
                            imgSrc: require('../../assets/flowIconCont/control/menuVerComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '树组件',
                            key: '',
                            dataType: 'treeComp',
                            imgSrc: require('../../assets/flowIconCont/control/treeComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '一级标题',
                            key: '',
                            dataType: 'h1Text',
                            imgSrc: require('../../assets/flowIconCont/control/h1Text.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '二级标题',
                            key: '',
                            dataType: 'h2Text',
                            imgSrc: require('../../assets/flowIconCont/control/h2Text.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '文本框',
                            key: '',
                            dataType: 'inputText',
                            imgSrc: require('../../assets/flowIconCont/control/inputText.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '多行文本框',
                            key: '',
                            dataType: 'textareaText',
                            imgSrc: require('../../assets/flowIconCont/control/textareaText.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        // {
                        //     label: '文本编辑器',
                        //     key: '',
                        //     dataType: 'textEditor',
                        //     imgSrc: require('../../assets/flowIconCont/control/textEditor.svg'),
                        //     title: '',
                        //     content: '',
                        //     icon: 'icon-dandianweijieru'
                        // },
                        {
                            label: '下拉框',
                            key: '',
                            dataType: 'selectComp',
                            imgSrc: require('../../assets/flowIconCont/control/selectComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '按钮',
                            key: '',
                            dataType: 'defaultButton',
                            imgSrc: require('../../assets/flowIconCont/control/defaultButton.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '主要按钮',
                            key: '',
                            dataType: 'majorButton',
                            imgSrc: require('../../assets/flowIconCont/control/majorButton.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '文字按钮',
                            key: '',
                            dataType: 'textButton',
                            imgSrc: require('../../assets/flowIconCont/control/textButton.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '单选框',
                            key: '',
                            dataType: 'radioComp',
                            imgSrc: require('../../assets/flowIconCont/control/radioComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '多选框',
                            key: '',
                            dataType: 'checkboxComp',
                            imgSrc: require('../../assets/flowIconCont/control/checkboxComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '图片',
                            key: '',
                            dataType: 'pictures',
                            imgSrc: require('../../assets/flowIconCont/control/pictures.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        //{
                            //label: 'tab页签',
                            //key: '',
                            //dataType: 'tabComp',
                            //imgSrc: require('../../assets/flowIconCont/controltabComp.svg'),
                            //title: '',
                            //content: '',
                            //icon: 'icon-dandianweijieru'
                       // },
                        {
                            label: 'iframe',
                            key: '',
                            dataType: 'iframes',
                            imgSrc: require('../../assets/flowIconCont/control/iframes.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '边框',
                            key: '',
                            dataType: 'borderComp',
                            imgSrc: require('../../assets/flowIconCont/control/border.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },                        
                        {
                            label: '文字列表',
                            key: '',
                            dataType: 'textList',
                            imgSrc: require('../../assets/flowIconCont/control/textList.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '分页',
                            key: '',
                            dataType: 'pagination',
                            imgSrc: require('../../assets/flowIconCont/control/pagination.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '直线',
                            key: '',
                            dataType: 'lineComp',
                            imgSrc: require('../../assets/flowIconCont/control/line.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },
                        {
                            label: '弹窗',
                            key: '',
                            dataType: 'dialogComp',
                            imgSrc: require('../../assets/flowIconCont/control/dialogComp.svg'),
                            title: '',
                            content: '',
                            icon: 'icon-dandianweijieru'
                        },                                                                         
                    ],
                    expandFlag: true,
                    typeNode: '1'
                },
                //{
                    //typeName: '重复组件',
                    //components: [
                         //{
                            //label: '重复内联框架',
                           // key: '',
                           // dataType: 'iframeRepeat',
                           // imgSrc: require('../../assets/flowIconCont/control/iframes.svg'),
                            //title: '',
                            //content: '',
                            //icon: 'icon-dandianweijieru'
                        //},
                    //],
                    //expandFlag: false,
                    //typeNode: '9'
                //}, 
                 {
                     typeName: '组件容器',
                     components: [
                          {
                             label: '复合组件容器',
                             key: '',
                             dataType: 'complexCompContainer',
                             imgSrc: require('../../assets/flowIconCont/control/complexCompContainer.svg'),
                             title: '',
                             content: '',
                             icon: 'icon-dandianweijieru'
                         },
                     ],
                     expandFlag: false,
                     typeNode: '9'
                 },               
            ],
    }
  },
  computed: {
    ...mapGetters(['currentComplexComp']),
  },
  components: {

  },
  created: function () {

  },
  mounted () {

  },

  methods: {
      setExpandFlag(index) {
            this.componentsList[index].expandFlag = !this.componentsList[index].expandFlag
      },
      searchHandler() {
            if (this.searchKey !== '') {
                let that = this
                this.searchResultArray.splice(0, this.searchResultArray.length)
                this.componentsList.forEach(function(type) {
                    type.components.forEach(function(component) {
                        if (component.label.toLowerCase().indexOf(that.searchKey.toLowerCase()) > -1) {
                            console.log(component)
                            console.log(that.currentComplexComp)
                            if(that.currentComplexComp != ""){
                                if(component.dataType !='complexCompContainer'){
                                    that.searchResultArray.push(component)
                                }
                            }else{
                                that.searchResultArray.push(component)
                            }
                            
                        }
                    })
                })
                if (this.searchResultArray.length > 1) {
                    this.searchResultArray.sort(function(a, b) {
                        return a.label.localeCompare(b.label)
                    })
                }
            }
        },
      setComptype(component){
          console.log(component)
          this.$store.commit(this.types.SET_REPORT_META_DATA, { key: 'currentSelectedCompType', value: component.dataType });
          this.$store.commit(this.types.SET_REPORT_META_DATA, { key: 'currentSelectedCompName', value: component.label });
      }
  }
}
</script>
<style>
.comp-list .iconsearch{
    font-size: 14px;
    font-weight: 100;
}
</style>

<style  scoped>
.nothingserch{
    padding: 55px;
    color: #666;
}
.chart-div{
    height: 100%;
}
.comp-list {
  font-size: 14px;
  height: 100%;
}
.comp-list b{
  padding: 0px 0px 0 16px;
  display: block;
  border-bottom:1px solid #CDD1D6;
  line-height: 32px;
}
.search-key{
    margin: 0 2px;
    width:80%;
}
.search-key >>>.el-input__inner{
  border:none;
  /* border-bottom:1px solid #CDD1D6; */
  width:99%;
  padding:0 14px;
  padding-right: 25px;
  font-size:12px
}
.search-key >>>.el-input__suffix{
    right:5px
}
.comp-list ul{
  overflow: hidden;
  clear: both;
  border-bottom:1px solid #CDD1D6
}
.comp-list li{
    cursor: move;
    float: left;
    width: 75px;
    height: 70px;
    margin: 10px 0px 5px 5px;
    border: 1px solid #fff;
    border-radius: 4px;
    text-align: center;
    color:#666;
}
.comp-list li:hover{
  border:1px solid #4090F7;
  background:#ECF4FE
}
/* .comp-list li.sel-li{
     border:1px solid #4090F7;
     background:#ECF4FE
} */
.comp-list li img {
    width: 40px;
    height: 40px;
    margin-top: 4px;
}
.comp-list li span{
  font-size: 12px;
  text-align: center;
  display: block
}
.components-type-tab {
    padding: 0 19px;
    height: 39px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    font-size: 12px;
    clear: both;
}
.current{
  border-bottom: none;
}
.componentimgSrc{

}
</style>
