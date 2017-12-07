import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import Proptypes from 'prop-types';
import Buttom from '../../common/Buttom';

const propTypes = {
    leftImage: Proptypes.number,//左侧图标
    rightIcon: Proptypes.number,//右侧图片
    maxLength: Proptypes.number,//限制最大输入字符
    onChangeText: Proptypes.func,//文本框变化调用
    onEndEditing: Proptypes.func,//文本输入结束调用
    secureTextEntry: Proptypes.bool,//密码隐藏
    underlineColorAndroid: Proptypes.string,//android下划线设置透明
    placeholder: Proptypes.string,//提示字符
    rightText: Proptypes.string,//右侧文本    
    containerStyle: Proptypes.style,//右侧view样式
    style: Proptypes.style,//右侧文字样式
    onPress: Proptypes.func,
    keyboardType: Proptypes.enum,
    value: Proptypes.string,
    onfocus: Proptypes.func,//焦点
    captchaPress: Proptypes.func,//图形验证码
    disabled: Proptypes.bool,
    leftImgStyle: Proptypes.style,//左侧图片样式
    isRightExst: Proptypes.bool,//是否存在右侧图片或者按钮
};

//通用的输入框
const PInput = ({
                    leftImage,
                    rightIcon,
                    rightButton,
                    maxLength,
                    onChangeText,
                    onEndEditing,
                    secureTextEntry,
                    placeholder,
                    underlineColorAndroid,
                    rightText,
                    containerStyle,
                    style,
                    onPress,
                    keyboardType,
                    value,
                    onfocus,
                    captchaPress,
                    disabled,
                    leftImgStyle,
                    isRightExst
                }) => (
    <View style={{flexDirection: 'row', margin: 8, height: 40, alignItems: 'center'}}>
        <View style={{marginRight: 8}}>
            <Image source={leftImage} style={leftImgStyle ? leftImgStyle : styles.leftimg_style}
                   resizeMode={'contain'}/>
        </View>
        <TextInput placeholder={placeholder} maxLength={maxLength} onChangeText={onChangeText}
                   onEndEditing={onEndEditing} secureTextEntry={secureTextEntry}
                   underlineColorAndroid='transparent' style={{flex: 1, fontSize: 13, height: 35}}
                   keyboardType={keyboardType} value={value} onFocus={onfocus}
                   blurOnSubmit={true}
                   clearButtonMode={'while-editing'}/>
        <View style={{justifyContent: 'center'}}>
            {isRightExst ?
                (rightText ?
                    < TouchableWithoutFeedback onPress={onPress} disabled={disabled}><View style={containerStyle}>
                        <Text style={style}>{rightText}</Text></View></TouchableWithoutFeedback> :
                    <TouchableWithoutFeedback onPress={captchaPress}>
                        <Image source={rightIcon}
                               style={{alignSelf: 'center', width: 40, height: 20, marginRight: 10}}/>
                    </TouchableWithoutFeedback>) : <View/>
            }

        </View>

    </View>
);

const styles = StyleSheet.create({
    leftimg_style: {
        width: 17,
        height: 24,
        marginRight: 8,
        alignSelf: 'center'
    },
});

export default PInput;