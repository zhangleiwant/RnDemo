let token = '';
// //上传多张图片
// export default uploadImage = (url, params) => {
//     return new Promise(function (resolve, reject) {
//         console.log('上传的图片集合' + JSON.stringify(params.files));
//         let formData = new FormData();
//         for (var i = 0; i < params.files.length; i++) {//传多张图，params.files中files为传参字段，集合中每一个元素均为uri
//             var a = params.files[i];//获取每张图片的uri
//             var arr = a.split('/');//拆分获取图片名
//             let file = {uri: a, type: 'multipart/form-data', name: arr[arr.length - 1]};
//             formData.append('file', file);
//             console.log('uri:' + a);
//         }
//         console.log('formdata:', formData);
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             },
//             body: formData,
//         }).then((response) => response.json())
//             .then((responseData) => {
//                 console.log('uploadImage', responseData);
//                 resolve(responseData);
//             })
//             .catch((err) => {
//                 console.log('err', err);
//                 reject(err);
//             });
//     });
//
// };

//上传单图图片

import ResIpData from '../common/ResIpData';
import config from '../utils/GetConfig';


export default uploadImage = (url, params) => {
    let resData = new ResIpData();
    url = resData.getServer_Ip() + url;
    console.log('url:' + url);
    return new Promise(function (resolve, reject) {
        let formData = new FormData();
        for (var key in params) {
            formData.append(key, params[key]);
        }
        var arr = params.files.split('/');
        let file = {uri: params.files, type: 'multipart/form-data', name: arr[arr.length - 1]};
        formData.append("files", file);//这个地方要和接口传参的字段对应
        console.log("file:" + JSON.stringify(file));
        console.log("formdata:" + JSON.stringify(formData));
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('uploadImage', responseData);
                resolve(responseData);
            })
            .catch((err) => {
                config();
                console.log('err', err);
                reject(err);
            });
    });

};