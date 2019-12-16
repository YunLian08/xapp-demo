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
  },

  //改变数组对象某一属性值
  // progressList.forEach((item,index,attr)=>{
  //   var allItem="progressList["+index+"].isPass";
  //   this.setData({
  //     [allItem]:"false"
  //   })
  //   if(index==selectLevelid){
  //     this.setData({
  //       [allItem]:"true"
  //     })
  //   }
  // })
  
})