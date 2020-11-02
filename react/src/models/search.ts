import {ITsSearch,ITsAction} from '@/types/index'
import {getLists,getListsAsync} from '@/service/search'

export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists(state: ITsSearch, action: ITsAction) {
      return {
        ...state,
        lists: Array(10).fill(action.payload)
      }
    }
  },
  // 异步
  effects: {
    *getListAsync({payload}: {payload: string}, {call, put}: {call: (func: (value: string) => Promise<object> , payload: string) => void, put: (action: ITsAction) => void}){
      const res = yield call(getListsAsync, payload)
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
};
