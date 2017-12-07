import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import constants from './constants'

console.log(" model", DeviceInfo.getModel());
console.log("getDeviceName", DeviceInfo.getDeviceName());

class MyNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        const {title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction, style,rightTitleStyle} = this.props;
        return (
            <ImageBackground
                style = {{height: Platform.OS === 'android' ? 44 : DeviceInfo.getModel() === 'iPhone' ? 84 : 64, width: constants.window.width, backgroundColor: 'transparent',}}
                source={require('../img/M_ColorBg.png')}
            >
                <View style={[styles.barView, style]}>
                    <View style={styles.showView}>
                        {
                            leftTitle
                                ?
                                <TouchableOpacity style={styles.leftNav} onPress={() => {
                                    leftAction()
                                }}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.barButton}>{leftTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                                :
                                (
                                    leftImage
                                        ?
                                        <TouchableOpacity style={styles.leftNav} onPress={() => {
                                            leftAction()
                                        }}>
                                            <View style={{width: 22, height: 22, alignItems: 'center'}}>
                                                <Image style={{width: 12, height: 22}} source={leftImage}/>
                                            </View>
                                        </TouchableOpacity>
                                        : null
                                )
                        }
                        {
                            title ?
                                <Text style={[styles.title, this.props.titleStyle]}>{title || ''}</Text>
                                : null
                        }
                        {
                            rightTitle ?
                                <TouchableOpacity style={styles.rightNav} onPress={() => {
                                    rightAction()
                                }}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={[styles.barButton,rightTitleStyle]}>{rightTitle}</Text>
                                    </View>
                                </TouchableOpacity>
                                : (rightImage ?
                                    <TouchableOpacity style={styles.rightNav} onPress={() => {
                                        rightAction()
                                    }}>
                                        <View style={{alignItems: 'center'}}>
                                            <Image source={rightImage} style={styles.img}/>
                                        </View>
                                    </TouchableOpacity>
                                    : null
                                )
                        }
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    barView: {
        height: Platform.OS === 'android' ? 44 : DeviceInfo.getModel() === 'iPhone' ? 84 : 64,
        //navbar 对应IPhoneX的判断为高度84
        // height: Platform.OS === 'android' ? 44 : 84,
        // backgroundColor: 'red',
    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : DeviceInfo.getModel() === 'iPhone' ? 40 : 20,
        //navbar title 对应IPhoneX的判断为上边距40
        // marginTop: Platform.OS === 'android' ? 0 : 40,
        height: 44,
    },
    title: {
        color: 'white',
        fontSize: 18.0
    },
    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 8,
        justifyContent: 'center'
    },
    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center'
    },
    barButton: {
        color: 'white',
        fontSize: 18
    },
    img: {
        width: 20,
        height: 20
    }
});


export default MyNavBar