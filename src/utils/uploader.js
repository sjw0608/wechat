import axios from 'axios'
import qs from 'qs'
import store from '../store'
import { getToken, getUserId, removeToken, removeUserId, removeUserInfo } from './auth'
import { UPDATE_LOADING } from '../store/mutation-type'
import signUtil from './sign'

const uploader = (url, file, successCb, errorCb) => {
  let timestamp = +new Date()
  let sign = signUtil({
    merchantId: 1,
    timestamp: timestamp,
    userToken: getToken(),
    userId: getUserId()
  })
  axios
    .post(url, qs.stringify(file), {
      headers: {
        osType: 'h5',
        merchantId: 1,
        appVersion: 1.0,
        userToken: getToken(),
        userId: getUserId()
      },
      params: {
        sign: sign,
        timestamp: timestamp
      }
    })
    .then(res => {
      console.log(res.data)
      if (res.data.resultCode === 4003) {
        removeToken()
        removeUserId()
        removeUserInfo()
      }
      store.commit(UPDATE_LOADING, { isLoading: false })
      successCb && successCb(res.data)
    })
    .catch(err => {
      console.log(err)
      store.commit(UPDATE_LOADING, { isLoading: false })
      errorCb && errorCb(err)
    })
}

export default uploader
