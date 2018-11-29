/**
 * Created by she on 2018/11/19.
 */
import * as types from './mutations.config'
export default {
   [types.UP_BOOK_DATA](state,data){
     state.data = data
   },
  [types.ADD_BROAD_SHOW](state,show){
     state.brodShow = show
  },
  [types.UP_SHELF_DATA](state,data){
    state.shelf = data
  },
  [types.UP_ADMISSION](state,data){
    state.admisSion =data
  },
  [types.UP_MORE_DATA](state,data){
    state.moreData = data
  },
  [types.MORE_SHOW](state,show){
    state.moreShow = show
  },
  [types.DETAILS_SHOW](state,show){
    state.detailsShow = show
  },
  [types.DETAILS_DATA](state,data){
    state.detailsData = data
  },
  [types.RANKINGMAN_DATA](state,data){
    state.rankingMan = data
  },
  [types.RANKINGGIRL_DATA](state,data){
    state.rankingGirl = data
  },
  [types.RANKINGCLASSIC_DATA](state,data){
    state.rankingClassic = data
  },
  [types.MAN_TOP](state,data){
    state.manTop = data
  },
  [types.GIRL_TOP](state,data){
    state.girlTop = data
  },
  [types.CLASSIC_TOP](state,data){
    state.classicTop = data
  },
  [types.RANK_SHOW](state,show){
    state.rankBookShow = show
  },
  [types.RANK_BOOK_DATA](state,data){
    state.rankBookData = data
  }
}
