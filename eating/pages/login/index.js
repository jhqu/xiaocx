// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData:{
      qq:'',
      pswd:'',
      vcode:''
    },
    imgValidateCode:0
  },
  setImg(){
   this.setData({
     imgValidateCode:this.data.imgValidateCode+1
   })
  },
  formInputChange(e){
    //console.log(e)
    this.data.formData[e.currentTarget.dataset.field]=e.detail.value;
    this.setData({
      formData:this.data.formData
    })
   // console.log(this.data.formData)
  },
  //注册
  register(){
        wx.navigateTo({
          url: '/pages/register/index',
          success:function(){

          },
          fail:function(){

          }
        })
  },
  submitForm(){

    if(this.data.formData.qq==""||this.data.formData.pswd==""||this.data.formData.vcode==""){
      wx.showToast({
        title: '信息不全',
        icon: 'error',
        duration: 2000})
    }else{
      wx.request({
        method:"POST",
        url: 'https://test.zhaoxiedu.net/api/Login/CheckLogin', //仅为示例，并非真实的接口地址
        data: {
          qq: this.data.formData.qq,
          pwd: this.data.formData.pswd,
          validateString:this.data.formData.vcode
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success (res) {
          console.log(res)
          if(res.statusCode==214){
            wx.setStorage({
              key:"zx",
              data:"abc"
            })
            wx.showToast({
              title: res.data,
              icon: 'error',
              duration: 2000})
          }else{
            wx.setStorage({
              key:'zx',
              data:'abc'
            })
          }
        }

      })
    }
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

  }
})