Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    selectItem:{
      type:Object,
      value:{}
    }
  },
  data: {
    buttonText:'去领奖品'
  },
  methods:{
    toGetPrize(){
      wx.navigateTo({
        url:'/pages/prize/prize'
      })
    }
  }
})