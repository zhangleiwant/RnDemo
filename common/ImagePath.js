import constants from './constants';
import store from 'react-native-simple-store';
import config from '../utils/GetConfig';
import ResIpData from '../common/ResIpData';


//商品分类角标  'http://dev.hotkidclub.com/res/store/product/category/cat1_1.png'
export const CATEGORY_TAG_PATH = getUrl('product/category/');

//商品列表图片  'http://dev.hotkidclub.com/res/store/product/category/cat1_1.png'
export const CATEGORY_CATEGORY_LIST_PATH = getUrl('product/items/');

//售后详情图片  'http://dev.hotkidclub.com/res/order/service/17112130000056/cat1_1.png'
export const SERVICE_DETAIL__PATH = getUrl('order/service/');

//首页banner  'http://dev.hotkidclub.com/res/store/banner/.......'
export const HOME_BANNER_PATH = getUrl('banner/');

//厨房菜图  'http://dev.hotkidclub.com/res/store/kitchen/.......'
export const KITCHEN_LIST_PATH = getUrl('kitchen/');

//投票banner  'http://dev.hotkidclub.com/res/store/questionnaire/banner.......'
export const POLL_BANNER_PATH = getUrl('questionnaire/banner/');

//投票相关  'http://dev.hotkidclub.com/res/store/questionnaire/question/1.......'
export const POLL_DETAIL_PATH = getUrl('questionnaire/question/');

//天气相关 'http://dev.hotkidclub.com/res/store/icon/weather/0.png'
export const WEATHER_DETAIL_PATH = getUrl('icon/weather/');


//商品详情的banner  'http://dev.hotkidclub.com/res/store/product/template/.......'
export const PRODUCT_BANNER_PATH = getUrl('product/template/');

//商品详情图  'http://dev.hotkidclub.com/res/store/product/items/.......'
export const PRODUCT_DETAIL_LIST_PATH = getUrl('product/items/');

//系统消息通知  'http://dev.hotkidclub.com/res/store/notification/system/.......'
export const NOTIFICATION_SYSTEM_PATH = getUrl('product/items/');

//促销消息通知  'http://dev.hotkidclub.com/res/store/notification/promo/.......'
export const NOTIFICATION_PROMO_PATH = getUrl('product/items/');

//订单消息通知  'http://dev.hotkidclub.com/res/store/notification/order/.......'
export const NOTIFICATION_ORDER_PATH = getUrl('notification/order/');

//首页任务  'http://dev.hotkidclub.com/res/store/mission/.......'
export const HOME_MISSION_PATH = getUrl('mission/');

//消息  'http://dev.hotkidclub.com/res/store/message/.......'
export const XXX_PATH = getUrl('message/');

//XX  'http://dev.hotkidclub.com/res/store/freq/.......'
export const XXXX_PATH = getUrl('freq/');

//XX  'http://dev.hotkidclub.com/res/store/config_server/.......'
export const XXXXX_PATH = getUrl('config_server/');

//活动相关图片  'http://dev.hotkidclub.com/res/store/campaign/.......'
export const ACTIVE_BANNER_PATH = getUrl('campaign/');

//任务相关图片  'http://dev.hotkidclub.com/res/store/campaign/.......'
export const MISSION_BANNER_PATH = getUrl('mission/');

//试吃
export const TRYEAT_PATH = getUrl('taste/');

//个人中心
//头像(自定义)
export const USER_HEADER_PATH = getUrl('headImage/');
//头像（默认）
export const USER_DEFAULT_PATH = getUrl('icon/headImage/');
//常见问题详情
export const QUESTION_DETAIL_PATH = getUrl('qna/');

//获取图形验证码
export const CAPTCHA_PATH = getUrl('./captcha/code.ctrl');
//会员
export const USER_VIP_PATH = getUrl('privilege/');


//使用方法
// import {GetImageList,PRODUCT_DETAIL_LIST_PATH} from '../common/ImagePath';
// let imageList = [];
// let key1='0';
// imageList = GetImageList(PRODUCT_DETAIL_LIST_PATH,key1,'','1.jpg,2.jpg,3.jpg,4.jpg']);

let resData = new ResIpData();

//获得单张图片url
export let GetImage = (path = '', key1 = '', key2 = '', name = '') => {

    let arr = new Array();
    if (path !== '') {
        path = resData.getRes_Ip() + path;
        arr.push(path);
    }
    if (key1 !== '') {
        arr.push(key1 + '/');
    }
    if (key2 !== '') {
        arr.push(key2 + '/');
    }
    if (name !== '') {
        arr.push(name);
    }
    let url = arr.join("");

    return url;

};


// 获得图片url集合
export let GetImageList = (path = '', key1 = '', key2 = '', names = '') => {
    let ImageList = [];
    let arr = new Array();
    if (path !== '') {
        path = resData.getRes_Ip() + path;
        arr.push(path);
    }
    if (key1 !== '') {
        arr.push(key1 + '/');
    }
    if (key2 !== '') {
        arr.push(key2 + '/');
    }
    let url = arr.join("");
    let images = [];
    if (names.length > 0) {
        images = names.split(',');
    }

    for (let i = 0; i < images.length; i++) {
        ImageList.push(
            getSingleImageUrl(url, images[i])
        );
    }

    return ImageList;

};

//获取验证码
export let GetImgCode = (path = '', key1 = '', key2 = '', name = '') => {

    let arr = new Array();
    if (path !== '') {
        path = resData.getServer_Ip() + path;
        arr.push(path);
    }
    let url = arr.join("");

    return url;

};

function getUrl(url) {
    return url;
}

function getSingleImageUrl(url, name) {
    return url + name + '';
}

