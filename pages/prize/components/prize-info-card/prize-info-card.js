Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    // 选中的礼品
    selectedObj:{
      type:Object,
      value:{}
    },
    // 手机号
    phoneNumber:{
      type:Number,
      value:0
    },
    // 是否显示填写信息弹框
    showInformation:{
      type:Boolean,
      value:false
    }
  },
  data: {
    motionEvent:true,//是否执行事件
    showToastPop:false,//提示弹窗
    postAddress:'',//邮寄地址
    infoList:[
      {
        placeText:'真实姓名'
      },
      {
        placeText:'邮箱'
      },
      {
        placeText:'微信号'
      },
      // {
      //   isAddress:true,
      //   placeText:'邮寄地址'
      // },
      // {
      //   isphoneNum:true,
      //   placeText:'手机号'
      // },
      // {
      //   hascode:true,
      //   placeText:'验证码'
      // },
    ]
  },
  lifetimes:{
    ready() {
      setTimeout(() => {
        console.log(this.globalData)
      }, 3000);
    }
  },
  methods:{
    // 确认
    infoConfirm(){
      this.setData({
        showInformation:false,
        showToastPop:true
      })
    },
    // 隐藏弹框
    hidePop(){
      this.setData({
        showInformation:false,
        showToastPop:false
      })
    },
    //禁止滑动
    stopMove (e)  {
      
    },
    /**
     * 获取收货地址
     */
    getLocaltion() {
      let that = this;
      this.authCheck('scope.address', !wx.hasChecked).then(() => {
        if(this.data.motionEvent){
          wx.chooseAddress({
            success(res) {
              that.setData({
                postAddress: res.provinceName + res.cityName + res.detailInfo,
                motionEvent:false
              })
            },
            fail(){
              console.log('----1----',111)
              // that.setData({
              //   motionEvent:false
              // })
            }
          })
        }
        
      }).catch(() => { //用户拒绝授权  用wx标记本次会话的授权状态
        wx.hasChecked = true;
      })
    },

    /**
     * 权限检查
     * @param {需要检查的权限code} authCode 
     * @param {是否需要再次询问} askAgain 
     */
    authCheck(authCode, askAgain = true) {
      return new Promise((resolve, reject) => {
        wx.getSetting({
          success(res) {
            let checkResult = res.authSetting[authCode];
            //如果从未授权或者授权访问 resolve
            if (typeof checkResult === "undefined" || true === checkResult) {
              resolve();
            } else {
              if (!askAgain) { //如果传入无需再次询问，则直接reject
                reject()
              } else { //需要询问，则openSetting
                let content = '';
                switch (authCode) { //根据不同的权限code定义不同的提示内容
                  case 'scope.address':
                    content = '为了提供更好的用户体验，建议您打开通讯地址的权限';
                    break;
                  default:
                    break;
                }
                wx.showModal({
                  title: '提示',
                  content,
                  confirmText: '前往打开',
                  cancelText: '暂时不用',
                  success(res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success(result) {
                          checkResult = result.authSetting[authCode];
                          if (true === checkResult) { //此处无需在判断undefined 因为这里肯定是在第二次访问的时候进入的
                            resolve();
                          } else {
                            reject();
                          }
                        }
                      })
                    } else if (res.cancel) {
                      reject();
                    }
                  }
                })
              }
            }
          }
        })
      })
    }
  }
})