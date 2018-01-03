//正则匹配

//手机号码
export const regexPhoneNumber = '1[34578]\\d{9}';
//用户名 字母数字下划线汉字，匹配任意一个字母或下划线
export const regexNickName = '^[\u4e00-\u9fa5_a-zA-Z0-9]+$';
//发票抬头
export const regexChniseOnly = '^[\u4e00-\u9fa5a-zA-Z0-9]+$';
//只能输入数字
export const regexNum = '^[0-9]*$';
//字母和数字不包含下划线
export const regexShuiNum = '^[A-Za-z0-9]+$';
//地址 字母和数字中文，。（） !
export const regexReceiveAddress = '^[\u4e00-\u9fa5a-zA-Z0-9\(\)\,\.\!\_\-\。\，\！]+$';
//接收人姓名中文加字母下划线
export const regexReceiveName = '^[\u4e00-\u9fa5a-zA-Z0-9]+$';
//电话号码
export const regexphone = '^[0-9\-]*$';
//输入框过滤空格
export const trim = /(^\s*)|(\s*$)/g;
export const trim1 = /\s+/g;

//邮箱
export const regexEmail = '\w+@[a-zA-Z0-9]+(.[a-zA-Z]{2,4}){1,2}';
//ip地址
export const regexIp = '^([1-9]|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5]).((\d|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5]).){2}(\d|[1-9]\d|1\d\d|2[0-4][0-9]|25[0-5])$';
//身份证号
export const regexPersonCard = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
// export const regexPersonCard =  '(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)';
//日期
export const regexDate = '([12]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|((1|2)[0-9])|30|31)$';