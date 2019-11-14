const app = getApp()

Page({
  data: {
    testTitle:'',
    titlePic:'/asset/images/ceping.png',
    isResult:false
  },
  onLoad(options){
    this.setData({
      testTitle:app.globalData.testTitle,
    })
  }
  
})