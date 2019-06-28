const f = require("../../utils/function.js"); //自定义函数
function check(globalData){
    // 提示等候
    wx.showLoading({
        title: 'Loading',
    })

    f.GET({
        model: 'login-wx',
        act: 'check',
        data: {
            ikey:''
        },
        success: (res) => {
            console.log('sussess', res.data)
        }
    })
}

module.exports = {
    check:check
};