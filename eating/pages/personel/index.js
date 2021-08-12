// pages/personel/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      classarr:[[],[],[]],
      baseurl:'https://www.zhaoxiedu.net',
      token:''
  },

  login(e){
    wx.navigateTo({
      url: '/pages/login/index',
      success:function(data){
        //console.log(data)
      },
      fail:function(data){
       console.log(data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'https://test.zhaoxiedu.net/api/Resource/GetResourceList/', //仅为示例，并非真实的接口地址
      data:"",
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        _this.setData({
      
          'classarr[0]':res.data.filter(item =>{
         
            return item.type == 1;
          
          }),
          'classarr[1]':res.data.filter(item =>{
         
            return item.type == 2;
          
          }),
          'classarr[2]':res.data.filter(item =>{
         
            return item.type == 3;
          
          })
        })
        //console.log(_this.data.classarr)
       
      }
    })
    
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
    let _this = this;
   if(typeof this.getTabBar=="function" && this.getTabBar()){
      this.getTabBar().setData({
        selected: 4,
      })
    }
    wx.getStorage({
      key: 'zx',
      success (res) {
        //console.log(res.data)
      _this.setData({
        token:res.data
      })
      console.log(_this.data.token)
      }
      })
   
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