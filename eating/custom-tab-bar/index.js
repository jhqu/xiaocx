Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#F60A0A",
    backgroundColor: "#EBBCBC",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/img/1.png",
      selectedIconPath: "/img/1.png",
      text: "首页"
    }, {
      pagePath: "/pages/about/index",
      iconPath: "/img/2.png",
      selectedIconPath: "/img/2.png",
      text: "关于我们"
    },
    {
      pagePath: "/pages/home/index",
      iconPath: "/img/3.png",
      selectedIconPath: "/img/3.png",
      text: "课程中心"
    },
    {
      pagePath: "/pages/work/index",
      iconPath: "/img/4.png",
      selectedIconPath: "/img/4.png",
      text: "诚聘英才"
    },
    {
      pagePath: "/pages/personel/index",
      iconPath: "/img/5.png",
      selectedIconPath: "/img/5.png",
      text: "个人中心"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})