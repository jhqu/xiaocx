// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      about:[],
      workerData:['1','2'],
      baseurl:"https://www.zhaoxiedu.net"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let _this = this;
      if(typeof this.getTabBar == "function"&&this.getTabBar()){
        this.getTabBar().setData({
          selected: 1,
        })
      }

      wx.request({
        url: 'https://www.zhaoxiedu.net/static/json/about.json', //仅为示例，并非真实的接口地址
        data:"",
        method:"get",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          _this.setData({
            about:res.data
          })
            
          console.log(res.data)
        }
      }),
      wx.request({
        url: 'https://www.zhaoxiedu.net/static/json/workers.json', //仅为示例，并非真实的接口地址
        data:"",
        method:"get",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
          _this.setData({
            workerData:res.data
          })
            
          console.log(_this.workerData)
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