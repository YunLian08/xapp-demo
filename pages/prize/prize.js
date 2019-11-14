const app = getApp()

Page({
  data: {
    selectedObj:{},
    showDetail:false,
    showInformation:false,
    phoneNumber:0,
    prizeList:[
      {
        prizeid:0,
        prizeImg:"/asset/images/bainiangudu.jpg",
        name:'百年孤独',
        explain:'参与测评即可领取',
        prizeStatus:1, //0 不显示   1 可领取   2 已发完   3 发放中   4 显示num
        prizeNum:'snm283782',
        convertStatus:0,//0 兑换成功   1 每日领取太多  2 此次活动领取太多  
      },
      {
        prizeid:1,
        prizeImg:"/asset/images/laorenyuhai.jpg",
        name:'老人与海',
        explain:'一个人可以被毁灭，但不能被打败。一个人并不是生来要被打败的，你尽可以把他消灭掉，可就是打不败他。',
        prizeStatus:1, //0 不显示   1 可领取   2 已发完   3 发放中   4 显示num
        prizeNum:'snm283782',
        convertStatus:1,//0 兑换成功   1 每日领取太多  2 此次活动领取太多  
      },
      {
        prizeid:2,
        prizeImg:"/asset/images/booktwo.jpg",
        name:'红楼梦',
        explain:'《红楼梦》是一部具有世界影响力的人情小说，举世公认的中国古典小说巅峰之作，中国封建社会的百科全书，传统文化的集大成者。',
        prizeStatus:1, //0 不显示   1 可领取   2 已发完   3 发放中   4 显示num
        prizeNum:'snm283782',
        convertStatus:2,
      },
      {
        prizeid:3,
        prizeImg:"/asset/images/gelintonghua.jpg",
        name:'格林童话',
        explain:'世界童话的经典之作',
        prizeStatus:3, //0 不显示   1 可领取   2 已发完   3 发放中   4 显示num
        prizeNum:'snm283782',
        convertStatus:1,
      },
      {
        prizeid:4,
        prizeImg:"/asset/images/sanguoyanyi.jpg",
        name:'三国演义',
        explain:'中国古典四大名著之一',
        prizeStatus:4, //0 不显示   1 可领取   2 已发完   3 发放中   4 显示num
        prizeNum:'snm283782',
        convertStatus:0,
      },
    ],//奖品列表
  },
  onLoad(options){
    
  },
  getSelectedObj(prizeid){
    // let {prizeid}=e.currentTarget.dataset;
    let {prizeList}=this.data;
    let selectedObj = prizeList.find(item => {
      return item.prizeid == prizeid
    });
    this.setData({
      selectedObj
    })
  },
  // 显示奖品详情弹窗
  showPrizeDetail(e){
    let {prizeid}=e.currentTarget.dataset;
    this.getSelectedObj(prizeid);
    this.setData({
      showDetail:true
    })
  },
  // 获取手机号
  getPhone(e){
    let {prizeid}=e.currentTarget.dataset;
    this.getSelectedObj(prizeid);
    if(e.detail.encryptedData){
      console.log(wx.cloud)
      wx.cloud.callFunction({
        name: 'getPhoneNumber',
        data: {
          data: wx.cloud.CloudID(e.detail.cloudID)
        }
      }).then(res=>{
        this.setData({
          phoneNumber:res.result.data.data.phoneNumber,
          showInformation:true
        },()=>{
          
        })
      })
    }
    this.setData({
      showInformation:true
    })
  },
  
})