const app = getApp()

Page({
  data: {
    testTitle:'',
    titlePic:'/asset/images/cepingjieguo.png',
    isResult:true,
    selectItem:{},
    // hasPrize:true,//是否有奖品
    resultList:[
      {
        resultid:0,
        hasPrize:true,
        resultDes:'您更喜欢中国文学。中国文学有数千年悠久历史，以特殊的内容、形式和风格构成了自己的特色，有自己的审美理想，有自己的起支配作用的思想文化传统和理论批判体系。它以优秀的历史、多样的形式、众多的中国作家、丰富的作品、独特的风格、鲜明的个性、诱人的魅力而成为世界文学宝库中光彩夺目的瑰宝。'
      },
      {
        resultid:1,
        hasPrize:true,
        resultDes:'您更喜欢外国文学。在外国文学中，作家们注重表达对世界的独特思考，例如博尔赫斯，喜欢表现时间，梦幻，死亡，宇宙，形而上学的主题，他不仅仅停留在形而下，因为，人有思想，客观世界之外，还有主观世界。另一方面外国文学注重对表现方法的探索，例如新小说，克劳德.西蒙把电影的手法引入小说里；而福克纳则探索真实的实质，几个人讲述一件事，他的《喧哗与骚动》就是这样一部作品。'
      },
      {
        resultid:2,
        hasPrize:false,
        resultDes:'您更喜欢童话类书籍。童话是儿童文学的一种。这种作品通过丰富的想象、幻想和夸张来塑造形象,反映生活,对儿童进行思想教育。语言通俗、生动,故事情节往往离奇曲折,引人入胜。童话又往往采用拟人的方法,举凡鸟兽虫鱼,花草树木,整个大自然以及家具、玩具都可赋予生命,注入人的思想感情,使它们人格化。'
      },
      {
        resultid:3,
        hasPrize:false,
        resultDes:'您更喜欢哲学类书籍。哲学关于世界观和方法论的理论体系。世界观是关于世界的本质、发展的根本规律、人的思维与存在的根本关系的认识，方法论是人类认识世界的根本方法。方法论是世界观的功能，世界观决定方法论。哲学是有严密逻辑系统的宇宙观，它研究宇宙的性质、宇宙内万事万物演化的总规律、人在宇宙中的位置等等一些很基本的问题。'
      },
    ]
  },
  onLoad(options){
    let resultList = this.data.resultList;
    let selectItem=resultList[this.selectFrom(0,resultList.length-1)];
    console.log(app)
    this.setData({
      testTitle:app.globalData.testTitle,
      selectItem:selectItem
    })
  },
  // 随机选择列表中一项
  selectFrom(minNum,maxNum){
    let selectNum=maxNum-minNum+1;
    return Math.floor(Math.random()*selectNum +minNum);
  }
  
})