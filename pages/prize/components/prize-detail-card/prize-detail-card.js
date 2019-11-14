Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    selectedObj:{
      type:Object,
      value:{}
    },
    showDetail:{
      type:Boolean,
      value:false
    }
  },
  data: {
    
  },
  lifetimes:{
    attached() {

    }
  },
  methods:{
    // 关闭弹窗
    hidePop(){
      this.setData({
        showDetail:false
      })
    },
    stopMove (e)  {
      
    },
  }
})