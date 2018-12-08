/**
 * Created by she on 2018/11/19.
 */
import * as types from './mutations.config'
export default {
  upManData({commit}, data){
    commit(types.UP_BOOK_DATA, data)
  },
  upShelf({commit}, data){
    commit(types.UP_SHELF_DATA, data)
  },
 async upAdmisSion({commit},axios){
    let data = await axios.get('/api/admission')
    let man = data.data.data.man
    let girl = data.data.data.girl
    commit(types.UP_ADMISSION,{man,girl})
  },
  upMoreData({commit},data){
    commit(types.UP_MORE_DATA,data)
  },
  moreShow({commit},show){
    commit(types.MORE_SHOW,show)
  },
  detailsShow({commit},show){
    commit(types.DETAILS_SHOW,show)
  },
  upDetailsData({commit},data){
    commit(types.DETAILS_DATA,data)
  },
  rankingMan({commit},data){
    commit(types.RANKINGMAN_DATA,data)
  },
  rankingGirl({commit},data){
    commit(types.RANKINGGIRL_DATA,data)
  },
  rankingClassic({commit},data){
    commit(types.RANKINGCLASSIC_DATA,data)
  },
  manTop({commit},data){
    commit(types.MAN_TOP,data)
  },
  girlTop({commit},data){
    commit(types.GIRL_TOP,data)
  },
  classicTop({commit},data){
    commit(types.CLASSIC_TOP,data)
  },
  rankShow({commit},show){
    commit(types.RANK_SHOW,show)
  },
  rankBookData({commit},data){
    commit(types.RANK_BOOK_DATA,data)
  },
  inpSHow({commit},show){
    commit(types.INPSHOW,show)
  },
  readShow({commit},show){
    commit(types.READSHOW,show)
  },
  pushBook({commit},data){
    commit(types.PUST_BOOKREDS,data)
  },
  deleteBook({commit},data){
    commit(types.DELETE_BOOK,data)
  }
}
