import axios from '../../../request'
import {CHANGE_HOME_LIST} from './contants'

const changeList = (list) => ({
  type: CHANGE_HOME_LIST,
  payload: list
})

export const getHomeList = () => async (dispatch) => {

  const {data: list} = await axios.get('/api/news')
  console.log(list)
  dispatch(changeList(list))
}
