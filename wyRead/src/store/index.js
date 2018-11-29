/**
 * Created by she on 2018/11/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  data:{},
  admisSion:{
    man:{},
    girl:{}
  },
  moreData:{},
  moreShow:false,
  brodShow:false,
  detailsShow:false,
  rankBookShow:false,
  detailsData:[],
  shelf:{},
  nav:[
    {name:"| 男生小说",self:["都市","玄幻","悬疑","灵异","历史","军事","科幻","同人","短篇"]},
    {name:"| 女生小说",self:["现言","官斗","穿越","古言","灵异","短篇","校园","仙侠","种田","同人"]},
    {name:"| 图书书库",self:["小说作品","人文社科","品质生活","两性感情","成功励志","经济管理","文学作品","文学艺术","自然科学","亲子少儿","计算机","考试培训","杂志期刊","外文外语"]}
  ],
  rankingMan:[],
  rankingGirl:[],
  rankingClassic:[],
  manTop:{},
  girlTop:{},
  classicTop:{},
  rankBookData:{}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
