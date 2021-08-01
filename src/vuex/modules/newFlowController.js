import Vue from "vue";
import Constant from "../data/API.js";
import Axios from "axios";
// import qs from 'qs'
// import * as types from "../mutation-types.js";
// import localforageHandler from "../../public/localforageHandler.js";
import router from "../../router/index.js"
const state = {
    currentComplexComp:' ',
    currentView: '',
    canvasScaleNum:30,
    token:'',
    reportData: {
        id:'',
        version:'1.0.0',
        viewFrameConfig:{},
        viewList: {},
        complexCompList: {},
        indexView:"",
        appSetStatus:false,
        pageSetStatus:false,
        display_dp:true,
        saveStatus: false,
        viewWidth:"1366",
        viewHeight:"768",
        clipBoard:"",
        copyStatus:false,
        cutStatus:false,
        pasteStatus:false,
        fontFamily:"",
        pageAttrs: {
          // frequency:{
          //   value:5,
          //   desc:"",
          //   valueType:"simple" 
          // }
        }
      },
}
const getters = {
    currentComplexComp: state => state.currentComplexComp,
    canvasScaleNum: state => state.canvasScaleNum,
    token: state => state.token,
    viewWidth: state => state.currentView != '' && state.reportData['viewList'][state.currentView].hasOwnProperty('viewSizeFlag') && state.reportData['viewList'][state.currentView]['viewSizeFlag'] == false ? state.reportData['viewList'][state.currentView].viewWidth : state.reportData.viewWidth,
}
const actions = {
  setToken(state,data){
    Axios({
	    method:"post",
	    url:Constant.API.token,
	    headers: {
		  "Content-Type": "application/x-www-form-urlencoded"
	    },
	    withCredentials:true,
	    data:data
	}).then((res)=>{
        let token = res.data.data.token;
        state.commit('Token',token);
        })
  },
}
const mutations = {
  Token(state,data){
    Vue.set(state,'token',data);
    router.push({path:`/index`});   
  }
}
export default { 
    state,
    getters,
    actions,
    mutations
}