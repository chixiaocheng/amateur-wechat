// /utils/function.js
const app = getApp();

// 自定义GET类型请求
function GET(e) {
    let module = (e.module) ? e.module : 'index';
    let url = app.globalData.site + '/' + module + '.php?tt=wechat&m=' + e.model + '&act=' + e.act + '&ikey=' + app.globalData.ikey;
    wx.request({
        url: url,
        data: e.data,
        header: {},
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: e.success,
        fail: e.fail,
        complete: e.complete
    })
}

// 自定义POST类型请求
// function POST(e) {
//     var showingPath = getCurrentPages()[getCurrentPages().length - 1].route;
//     var url = app.site + '/api.php?path=' + showingPath + '&ikey=' + app.ikey;
//     Object.keys(e.GETdata).forEach((key) => {
//         url += '&' + key + '=' + e.GETdata[key];
//     });
//     wx.request({
//         url: url,
//         data: e.POSTdata,
//         header: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         method: 'POST',
//         dataType: 'json',
//         responseType: 'text',
//         success: function(res) {
//             checkData(res, e.success)
//         },
//         fail: e.fail,
//         complete: e.complete
//     })
// }

// 函数输出
module.exports = {
    GET: GET,
    //POST: POST,
};