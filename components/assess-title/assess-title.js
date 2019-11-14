let app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  properties:{
    testTitle:{
      type:String,
      value:''
    },
    titlePic:{
      type:String,
      value:''
    },
    isResult:{
      type:Boolean,
      value:false
    }
  }
})