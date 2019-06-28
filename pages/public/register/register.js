// pages/public/login/login.js
const app = getApp();
const f = require("../../../utils/function.js"); //自定义函数

Page({

    data: {

    },

    onLoad: function(options) {
        f.GET({
            model: 'login-wx',
            act:'register',
            data: '',
            success: (res) => {
                console.log('sussess', res.data)
            }
        })
    },

})