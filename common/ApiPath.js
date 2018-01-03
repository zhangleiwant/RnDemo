import constants from './constants';


function getUrl(url) {
    return url;
}

function getMapUrl(url) {
    return url;
}

/*商品相关*/
//全部商品的分类
export const CATEGORY_PATH = getUrl('cat/list.ctrl');
//商品详情
export const PRODUCT_DETAIL_PATH = getUrl('product/detail.ctrl');
//商品分类全部商品
export const CATEGORY_LIST_PATH = getUrl('cat/products.ctrl');


/*订单相关*/
//订单列表（5种状态）
export const ORDER_LIST_PATH = getUrl('order/list.ctrl');
//订单详情
export const ORDER_DETAIL_PATH = getUrl('order/select.ctrl');
//删除订单
export const ORDER_DELETE_PATH = getUrl('order/del.ctrl');
//确认收货
export const ORDER_CONFIRM_PATH = getUrl('order/receive.ctrl');
//取消订单
export const ORDER_CANCEL_PATH = getUrl('order/cancel.ctrl');

//取消原因
export const CANCEL_REASON_PATH = getUrl('order/reason/cancel.ctrl');
//物流详情
export const DELIVERY_DETAIL_PATH = getUrl('order/delivery/detail.ctrl');

/*售后相关*/
//售后列表
export const SERVICE_LIST_PATH = getUrl('order/service/list.ctrl');

//商品售后详情
export const SERVICE_DETAIL_PATH = getUrl('order/service/detail.ctrl');

//申请售后上传图片()
export const UPLOAD_IMAGE_PATH = getUrl('order/service/uploadImage.ctrl');

//申请售后提交
export const APPLY_SERVICE_PATH = getUrl('order/service/apply.ctrl');
//售后原因
export const SERVICE_REASON_PATH = getUrl('order/reason/service.ctrl');



/*首页相关*/
//主页
export const HOME_PATH = getUrl('home/main.ctrl');
//全部商品
export const ALL_PRODUCT_PATH = getUrl('home/products.ctrl');
//主题活动
export const SUBJECT_PREFECTURE = getUrl('home/theme.ctrl');
//主题活动加载更多
export const SUBJECT_PREFECTURE_LOAD_MORE = getUrl('theme/refresh/type.ctrl');
//消息中心
export const MESSAGE_CENTER_LIST = getUrl('notify/centre.ctrl');
//单类型消息详情
export const MESSAGE_CENTER_LIST_INFO = getUrl('notify/list/type.ctrl');
//签到界面数据
export const CHECK_IN_STATS_INFO = getUrl('home/checkin/stats.ctrl');
//签到
export const CHECK_IN = getUrl('checkin/click.ctrl');
//xg绑定
export const BIND_XG = getUrl('member/bind/xg.ctrl');
//获取天气
export const GET_WEATHWE_INFO= getUrl('entertain/weather_1.ctrl');
//星座
export const GET_CONSTELLATION_INFO = getUrl('entertain/sign/all.ctrl');
//厨房列表
export const KITCHEN_LIST = getUrl('entertain/kitchen/list.ctrl');
//厨房详情
export const KITCHEN_INFO = getUrl('entertain/kitchen/detail.ctrl');
//旺年历
export const GET_CALENDAR_INFO = getUrl('entertain/calendar.ctrl');
//投票详情
export const POLLING_INFO = getUrl('questionnaire/question/detail.ctrl');
//投票结果
export const POLLING_RESULT_INFO = getUrl('/questionnaire/question/statistics.ctrl');
//投票
export const POLLING_SEND = getUrl('/questionnaire/question/answer.ctrl');
//试吃详情
export const GET_TRYEAT_DETAIL = getUrl('entertain/taste/detail.ctrl');
//试吃申请
export const TRYEAT_APPLY_PATH = getUrl('entertain/taste/apply.ctrl');
//旺运次数
export const FORTUNE_COUNT_PATH = getUrl('entertain/draw/stats.ctrl');
//旺运
export const FORTUNE_PATH = getUrl('entertain/draw/lucky.ctrl');

/* 购物车相关 */
//购物车同步
export const SHOPCART_SYNC = getUrl('cart/items/sync.ctrl');
//购物车刷新
export const SHOPCART_REFRESH = getUrl('cart/items/refresh.ctrl');

/* 订单结算 提交*/
//订单结算
export const ORDER_CHECKOUT = getUrl('order/checkout.ctrl');
//订单提交
export const ORDER_PLACE = getUrl('order/place.ctrl');
//订单优惠券
export const ORDER_COUPON_LIST = getUrl('coupon/list/avaliable.ctrl');
//订单支付
export const ORDER_PAY = getUrl('order/pay.ctrl');


/* 地址相关 */
//地址列表
export const ADRESS_LIST_PATH = getUrl('address/list.ctrl');
//添加地址
export const ADD_ADRESS_PATH = getUrl('address/add.ctrl');
//更新地址
export const UPDATE_ADRESS_PATH = getUrl('address/update.ctrl');
//删除地址
export const DELETE_ADRESS_PATH = getUrl('address/remove.ctrl');
//更新默认地址
export const UPDATE_DEFAULT_ADRESS_PATH = getUrl('address/updateDefault.ctrl');


/*************个人中心**************/
//密码登录
export const PASSWORD_LOGIN_PATH = getUrl('member/login/mobile.ctrl');
//微信登录
export const WECHAT_LOGIN = getUrl('member/login/weixin.ctrl');
//绑定微信
export const WECHAT_BIND = getUrl('member/bind/weixin.ctrl');
//个人中心主页信息
export const Main_USERINFO = getUrl('personal/main.ctrl');
//发票列表
export const INVOICELIST_PATH = getUrl('invoice/list.ctrl');
//添加发票
export const ADDINVOICE_PATH = getUrl('invoice/add.ctrl');
//删除发票
export const REMOVEINVOICE_PATH = getUrl('invoice/remove.ctrl');
//更新发票
export const UPDATEINVOICE_PATH = getUrl('invoice/update.ctrl');
//设置默认发票
export const SETDEFAULT_INVOICE_PATH = getUrl('invoice/updateDefault.ctrl');
//请求Vip
export const VIP_PATH = getUrl('personal/center.ctrl');
//旺币/优惠券
export const WB_PATH = getUrl('personal/privilege.ctrl');
//刷新or加载更多旺币
export const REFRESH_WB_PATH = getUrl('personal/privilege/refresh.ctrl');
//更新个人信息
export const RESETINFO_PATH = getUrl('personal/info/update.ctrl');
//更改头像
export const UPLOADIMAGE_PATH = getUrl('personal/info/uploadImage.ctrl');
//退出登录
export const USER_LOGINOUT_PATH = getUrl('member/logout.ctrl');

//获取短信验证码
export const SMS_VALIDATIONCODE_PATH = getUrl('sms/validationCode.ctrl');
//注册登录
export const REGISTERORLOGIN_PATH = getUrl('member/registerOrLogin.ctrl');
//修改密码
export const RESET_PASSWORD_PATH = getUrl('member/resetPassword.ctrl');
//常见问题
export const QUESTION_PATH = getUrl('personal/qna/list.ctrl');
//提成明细
export const WALLETDETAIL_PATH = getUrl('rmb/record/list.ctrl');
//我的钱包
export const WALLET_PATH = getUrl('personal/wallet.ctrl');
//微信解绑
export const WX_UNBIND_PATH = getUrl('member/unbind/weixin.ctrl');
//提现
export const WALLET_OUT_PATH = getUrl('rmb/withdraw.ctrl');
//获取个人信息
export const GETUSERINFO_PATH = getUrl('personal/info/get.ctrl');
//常见问题详情
export const QUESTION_DETAIL_PATH = getUrl('personal/qna/select.ctrl');
//微信登录图标是否显示
export const WX_LOGO_PATH = getUrl('home/trigger.ctrl');

/*************地图相关**************/
//战队信息
export const MAP_TEAM_INFO_PATH = getMapUrl('wm/team/info.ctrl');
//加入战队
export const MAP_JOIN_TEAM_PATH = getMapUrl('wm/team/join.ctrl');
//退出战队
export const MAP_QUIT_TEAM_PATH = getMapUrl('wm/team/leave.ctrl');
//战队邀请码
export const MAP_TEAM_INVITE_PATH = getMapUrl('wm/team/invite.ctrl');
//更新战队名称
export const MAP_SET_TEAM_NAME_PATH = getMapUrl('wm/team/update.ctrl');
//个人积分
export const MAP_USER_POINT_PATH = getMapUrl('wm/records/personl.ctrl');
//队伍积分
export const MAP_TEAM_POINT_PATH = getMapUrl('wm/team/points/list.ctrl');
//战队排行榜
export const MAP_TEAM_RANK_PATH = getMapUrl('wm/records/team.ctrl');
//活动公告
export const MAP_ACTIVITY_PATH = getMapUrl('wm/prize/record/current.ctrl');
//历史中奖纪录
export const MAP_DIS_WIN_PATH = getMapUrl('wm/prize/record/past.ctrl');

//
export const MAP_MAIN_PATH = getMapUrl('wm/main.ctrl');
//地图旺点
export const MAP_POINT_PATH = getMapUrl('wm/point/generate.ctrl');
//地图旺点
export const MAP_POINT_STATUS_PATH = getMapUrl('wm/point/status.ctrl');
//解锁特殊点
export const MAP_UNLOCK_SPECIAL_PATH = getMapUrl('wm/point/unlock.ctrl');
//查看亚朵是否解锁
export const MAP_CHECK_ATOUR_PATH = getMapUrl('wm/point/check/atour.ctrl');
//点击旺点
export const MAP_CLICK_POINT_PATH = getMapUrl('wm/point/click.ctrl');
//活动规则
export const MAP_ACTIVITY_RULE_PATH = getMapUrl('wm/rule.ctrl');

//中奖记录
export const MAP_PRIZE_RECORD_PATH = getMapUrl('wm/prize/draw/list.ctrl');
//奖品详情
export const MAP_PRIZE_DETAIL_PATH = getMapUrl('wm/prize/draw/detail.ctrl');
//领取奖品
export const MAP_PRIZE_RECEIVE_PATH = getMapUrl('wm/prize/claim.ctrl');
