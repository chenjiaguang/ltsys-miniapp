// pages/usuallycontacts/usuallycontacts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    genderRange: [
      {title: '男', value: '1'},
      {title: '女', value: '2'}
    ],
    gender_text: {
      1: '男',
      2: '女'
    },
    contacts: [
      {
        name: '张三',
        gender: '1',
        idcard: '460026478390987878'
      },
      {
        name: '李四',
        gender: '2',
        idcard: '460026478398475643'
      }
    ],
    new_contacts: [
      {
        name: '',
        gender: '',
        idcard: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  valueInput: function (e) {
    console.log('valueInput', e)
    const {value} = e.detail
    const {type, idx, key} = e.currentTarget.dataset
    let contacts = ''
    if (type === '1') {
      contacts = 'contacts'
    } else if (type === '2') {
      contacts = 'new_contacts'
    }
    let _obj = {}
    _obj[contacts + '[' + idx + '].' + key] = value
    this.setData(_obj)
  },

  genderChange: function (e) {
    console.log('genderChange', e)
    let { value } = e.detail
    value = parseInt(value)
    const { type, idx } = e.currentTarget.dataset
    let contacts = ''
    if (type === '1') {
      contacts = 'contacts'
    } else if (type === '2') {
      contacts = 'new_contacts'
    }
    let _obj = {}
    _obj[contacts + '[' + idx + '].gender'] = this.data.genderRange[value].value
    console.log('_obj', _obj)
    this.setData(_obj)
  },

  deleteTap: function (e) {
    console.log('deleteTap', e)
  }
})