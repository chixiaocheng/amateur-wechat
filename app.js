//app.js
App({
    // 开发者设置:
    runOnLocal: 1, //是否本地运行




    // 全局数据
    globalData: {
        site: 'https://amateur.wx243.com', //服务器
        ikey: wx.getStorageSync('ikey'), //身份秘钥
    },


    // 注册内容
    onLaunch: function() {
        // 提示等待
        wx.showLoading({
            title: 'Loading',
        })

        // 获取系统状态栏信息（ColorUI需要）
        wx.getSystemInfo({
            success: e => {
                //console.log(e)
                this.globalData.StatusBar = e.statusBarHeight;
                let custom = wx.getMenuButtonBoundingClientRect();
                this.globalData.Custom = custom;
                let extra = (e.system.substring(0, 3) == 'iOS') ? e.statusBarHeight : 0; //单独适配iOS系统
                this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight + extra;
            }
        })


        //开发者函数
        if (this.runOnLocal == 1) {
            this.globalData.site = 'http://amateur.web';
        }
    }
});