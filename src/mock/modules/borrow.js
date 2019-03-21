import Mock from 'mockjs'

const saveInfoData = Mock.mock({
  resultCode: 2000,
  resultMsg: 'OK',
  data: {}
})

const cancel = Mock.mock({
  resultCode: 2000,
  resultMsg: 'OK',
  data: {}
})
export default {
  saveInfo: config => saveInfoData,
  cancel: config => cancel
}
