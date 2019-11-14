//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    testTitle:'',
    titlePic:'/asset/images/ceping.png',
    isResult:false,
    buttonText:'开始测评',
    testDes:'活动介绍：书籍是人类进步和文明的重要标志之一。跨入20世纪，书籍已成为传播知识、科学技术和保存文化的主要工具之一。随着科学技术日新月异地发展，传播知识信息手段，除了书籍、报刊外，其他工具也逐渐产生和发展起来。但书籍的作用，是其他传播工具或手段所不能代替的。在当代，无论是中国，还是其他国家，书籍仍然是促进社会政治、经济、文化发展必不可少的重要传播工具。'
  },
  onLoad(options){
    this.setData({
      testTitle:app.globalData.testTitle,
    })
  },
  // 跳到测试问题页
  toTestQuestion (){
    wx.navigateTo({
      url:'/pages/question/question'
    })
  }
  
})
