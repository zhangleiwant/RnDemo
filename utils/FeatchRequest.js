/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */

import {
    DeviceEventEmitter,
    Platform,
} from 'react-native';

import store from 'react-native-simple-store';
import ResIpData from '../common/ResIpData';
import config from  '../utils/GetConfig';

function timeout_fetch(fetch_promise, timeout = 5000) {
    let timeout_fn = null;

    //这是一个可以被reject的promise
    let timeout_promise = new Promise(function (resolve, reject) {
        timeout_fn = function () {
            reject('timeout promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);

    setTimeout(function () {
        timeout_fn();
    }, timeout);

    return abortable_promise;
}

let common_url = 'http://dev.hotkidclub.com/api/store/';  //服务器地址
let token = '';
let resData = new ResIpData();
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
const fetchRequest = (url, method, params) => {
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken": token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    // console.log('request url:' + url + '  request params:' + JSON.stringify(params));  //打印请求参数



    if (params === null) {   //如果网络请求中没有参数
        return new Promise(function (resolve, reject) {

            if(url.indexOf('wm/') >= 0)
            {
                url = resData.getActivity_Map()+url;
                console.log('===='+url);
                timeout_fetch(fetch(url, {
                    method: method,
                    headers: header
                }))
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:', url, responseData);  //网络请求成功返回的数据
                        if (responseData.Response.code === '40000') {
                            // alert(res.Response.sub_msg);
                            DeviceEventEmitter.emit('GoToLogin', '去登录');

                        } else if (responseData.Response.code === 10001) {
                            resolve(responseData);

                        } else {
                            resolve(responseData);
                            // alert(responseData.Response.code);
                        }
                    })
                    .catch((err) => {
                        config();
                        console.log('err:', url, err);     //网络请求失败返回的数据
                        reject(err);
                    });
            }
            else
            {
                url = resData.getServer_Ip() + url;
                console.log('===='+url);
                timeout_fetch(fetch(url, {
                    method: method,
                    headers: header
                }))
                    .then((response) => response.json())
                    .then((responseData) => {
                        console.log('res:', url, responseData);  //网络请求成功返回的数据
                        if (responseData.Response.code === '40000') {
                            // alert(res.Response.sub_msg);
                            DeviceEventEmitter.emit('GoToLogin', '去登录');

                        } else if (responseData.Response.code === 10001) {
                            resolve(responseData);

                        } else {
                            resolve(responseData);
                            // alert(responseData.Response.code);
                        }
                    })
                    .catch((err) => {
                        config();
                        console.log('err:', url, err);     //网络请求失败返回的数据
                        reject(err);
                    });
            }
        });
    }
    else {   //如果网络请求中有参数
        return new Promise(function (resolve, reject) {

            if(url.indexOf('wm/') >= 0)
            {
                url = resData.getActivity_Map()+url;
                console.log('===='+url);
                timeout_fetch(fetch(url, {
                    method: method,
                    headers: header,
                    body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
                })).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res1:', url, responseData);   //网络请求成功返回的数据
                        if (responseData.Response.code === '40000') {
                            // alert(responseData.Response.code);
                            DeviceEventEmitter.emit('GoToLogin', '去登录');

                        } else if (responseData.Response.code === 10001) {
                            resolve(responseData);

                        }else {
                            resolve(responseData);
                            // alert(responseData.Response.code);
                        }
                    })
                    .catch((err) => {
                        config();
                        console.log('err1:', url, err);   //网络请求失败返回的数据
                        reject(err);
                    });
            }
            else
            {
                url = resData.getServer_Ip()+url;
                console.log('===='+url);
                timeout_fetch(fetch(url, {
                    method: method,
                    headers: header,
                    body: JSON.stringify(params)   //body参数，通常需要转换成字符串后服务器才能解析
                })).then((response) => response.json())
                    .then((responseData) => {
                        console.log('res1:', url, responseData);   //网络请求成功返回的数据
                        if (responseData.Response.code === '40000') {
                            // alert(responseData.Response.code);
                            DeviceEventEmitter.emit('GoToLogin', '去登录');

                        } else if (responseData.Response.code === 10001) {
                            resolve(responseData);

                        }else {
                            resolve(responseData);
                            // alert(responseData.Response.code);
                        }
                    })
                    .catch((err) => {
                        config();
                        console.log('err1:', url, err);   //网络请求失败返回的数据
                        reject(err);
                    });
            }
        });
    }
};

export default fetchRequest;


// 使用案例
// fetchRequest('app/book','GET')
//     .then( res=>{
//         //请求成功
//         if(res.header.statusCode == 'success'){
//             //这里设定服务器返回的header中statusCode为success时数据返回成功
//
//         }else{
//             //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
//             console.log(res.header.msgArray[0].desc);
//         }
//     }).catch( err=>{
//     //请求失败
// })
//
// let params = {
//     username:'admin',
//     password:'123456'
// }
// fetchRequest('app/signin','POST',params)
//     .then( res=>{
//         //请求成功
//         if(res.header.statusCode == 'success'){
//             //这里设定服务器返回的header中statusCode为success时数据返回成功
//
//         }else{
//             //服务器返回异常，设定服务器返回的异常信息保存在 header.msgArray[0].desc
//             console.log(res.header.msgArray[0].desc);
//         }
//     }).catch( err=>{
//     //请求失败
// })

