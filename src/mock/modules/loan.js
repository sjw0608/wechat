import Mock from 'mockjs'

const getIndex = Mock.mock({
  resultCode: 2000,
  resultMsg: 'OK',
  data: {
    loanAmount: '@float(10000, 99999, 2, 2)',
    loanTotalAmount: '@float(10000, 99999, 2, 2)',
    loanNum: '@integer(0, 100)',
    myLoanAmount: '@float(10000, 99999, 2, 2)',
    authCode: 3,
    authMsg: '@pick(["已认证","未认证","认证过期"])',
    headimg: '@img(80x80)',
    offlineMsgCount: 50,
    annceCount: 10,
    orderNoticeCount: 10
  }
})

export default {
  index: config => getIndex
}
