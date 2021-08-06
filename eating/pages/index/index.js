// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    dots:true,
    background:[],
    baseurl:"https://www.zhaoxiedu.net",
    titel_1:{ 
      t1:"天道酬勤",
      t2:"勤能补拙",
      ds:"春风陌上惊微尘，游人初乐岁华新" },
      addus:[]

  
  },
  
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    let _this = this;
    wx.request({
      url: 'https://www.zhaoxiedu.net/static/json/public.json', //仅为示例，并非真实的接口地址
      data:"",
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        _this.setData({
          background:res.data
        })
          _this.background = res.data;
        console.log(res.data)
      }
    })
    wx.request({
      url: 'https://www.zhaoxiedu.net/static/json/recruitSmall.json', //仅为示例，并非真实的接口地址
      data:"",
      method:"get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        _this.setData({
          addus:res.data
        })
          
        console.log(res.data)
      }
    })
  },
  onShow(){
    if(typeof this.getTabBar=="function" && this.getTabBar()){
      this.getTabBar().setData({
        selected: 0,
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
