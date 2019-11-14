// import answerPic from '../../asset/images/bookPic.jpg'
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    
  },
  data: {
    currentTab:0,
    selectedList:[],
    questionList:[
      {
        quesid:0,
        qustion:'你更害怕哪种场景？',
        answerType:0,//0 图片  1 文字
        answerList:[
          {
            quesid:0,
            ansid:1,
            answer:"/asset/images/forest.jpg"
          },{
            quesid:0,
            ansid:2,
            answer:"/asset/images/darkHouse.jpg"
          }
        ]
      },
      {
        quesid:1,
        qustion:'不考虑其他因素，你想在下面哪一种环境下读书呢？',
        answerType:0,
        answerList:[
          {
            quesid:1,
            ansid:1,
            answer:"/asset/images/bookRoom.jpg"
          },{
            quesid:1,
            ansid:2,
            answer:"/asset/images/balcony.jpg"
          }
        ]
      },
      {
        quesid:2,
        qustion:'您多久读完一本书？',
        answerType:1,
        answerList:[
          {
            quesid:2,
            ansid:1,
            answer:'7天'
          },{
            quesid:2,
            ansid:2,
            answer:'5天'
          }
        ]
      },
      {
        quesid:3,
        qustion:'您一般过着什么样的生活？',
        answerType:1,
        answerList:[
          {
            quesid:3,
            ansid:1,
            answer:'自由'
          },{
            quesid:3,
            ansid:2,
            answer:'循规蹈矩'
          }
        ]
      },
      {
        quesid:4,
        qustion:'你是个自信的人吗？',
        answerType:1,
        answerList:[
          {
            quesid:4,
            ansid:1,
            answer:'是'
          },{
            quesid:4,
            ansid:2,
            answer:'不是'
          }
        ]
      }
    ]
  },
  methods:{
    selectAnswer(e){
      let ansid=e.currentTarget.dataset.ansid;
      let quesid=e.currentTarget.dataset.quesid;
      // debugger
      let {questionList}=this.data;
      if(questionList&&questionList.length>0){
        
        let selectedList=questionList[quesid].answerList.find(item =>{
          return item.ansid == ansid
        })
        this.setData({
          selectedList
        })
        let newCurrent;
        if(this.data.currentTab+1==questionList.length){
          // wx.navigateTo({
          //   url:'/pages/result/result'
          // })
          wx.redirectTo({
            url:'/pages/result/result'
          })
        }else{
           newCurrent=this.data.currentTab+1;
        }
        this.setData({
          currentTab:newCurrent
        })
      }
    },
    catchTouchMove(){
      return false
    }
  }

})