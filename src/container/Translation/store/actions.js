import axios from '../../../request'
import {SET_TRANSLATION_LIST} from './contants'

const setTranslationList = (list) => ({
  type: SET_TRANSLATION_LIST,
  payload: list
})

export const getTranslationList = () => async (dispatch) => {

  try {
    const {data: res} = await axios.get('/api/trans')
    console.log('trans?????', res)
    if (!res.success) return
    dispatch(setTranslationList(res.list))
  } catch (e) {
    console.log('0------', e)
  }
}
