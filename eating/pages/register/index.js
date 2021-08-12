// pages/register/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgValidateCode:0,
    formData:{
      NickName:'',
      Sex:1,
      qq:'',
      PhoneNum:'',
      Pwd:'',
      Pwd2:'',
      validateString:''
     
    },
    sexArr:['男','女','其他'],
  },
  setImg(){
    this.setData({
      imgValidateCode:this.data.imgValidateCode+1
    })
   },
   formInputChange(e){
    this.data.formData[e.currentTarget.dataset.field]=e.detail.value;
    this.setData({
      formData:this.data.formData
    })
   

   },  
   submitForm(){
     for (const key in this.data.formData) {
        const element = this.data.formData[key];
        if(!element){
          wx.showToast({
            title: '信息不全',
            icon: 'error',
            duration: 2000})
        }
      
       }
       wx.request({
        method:"POST",
        url: 'https://test.zhaoxiedu.net/api/User/AddUser/', //仅为示例，并非真实的接口地址
        data:this.data.formData,
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        success (res) {
          console.log(res)
         
        }

      })
   },
   register(){
    wx.navigateTo({
      url: '/pages/login/index',
      success:function(){

      },
      fail:function(){

      }
    })
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