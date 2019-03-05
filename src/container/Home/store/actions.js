import axios from 'axios'
import {CHANGE_HOME_LIST} from './contants'
export const getHomeList = () => async (dispatch) => {
  const {list} = await axios.get('/api/news')
  console.log(list)
  dispatch({
    type: [CHANGE_HOME_LIST],
    payload: list
  })
}
