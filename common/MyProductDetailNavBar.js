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

class MyOrderDetailNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // leftTitle和leftImage 优先判断leftTitle (即 文本按钮和图片按钮优先显示文本按钮)
        const {title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction, style, titleStyle} = this.props;
        return (
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
                                        <View style={{alignItems: 'center'}}>
                                            <Image style={{width: 9.5, height: 16.3, resizeMode: 'center'}}
                                                   source={leftImage}/>
                                        </View>
                                    </TouchableOpacity>
                                    : null
                            )
                    }
                    {
                        title ?
                            <Text style={[styles.title, titleStyle]}>{title || ''}</Text>
                            : null
                    }
                    {
                        rightTitle ?
                            <TouchableOpacity style={styles.rightNav} onPress={() => {
                                rightAction()
                            }}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.barButton}>{rightTitle}</Text>
                                </View>
                            </TouchableOpacity>
                            : (rightImage ?
                                <TouchableOpacity style={styles.rightNav} onPress={() => {
                                    rightAction()
                                }}>
                                    <View style={{alignItems: 'center'}}>
                                        <Image style={{width: 20, height: 20, resizeMode: 'center'}}
                                               source={rightImage}/>
                                    </View>
                                </TouchableOpacity>
                                : null
                            )
                    }

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    barView: {
        height: Platform.OS === 'android' ? 44 : DeviceInfo.getModel() === 'iPhone' ? 84 : 64,
        backgroundColor: 'transparent',
    },
    showView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: Platform.OS === 'android' ? 0 : DeviceInfo.getModel() === 'iPhone' ? 40 : 20,
        height: 44,
    },
    title: {
        color: 'black',
        fontSize: 18.0,
    },
    leftNav: {
        position: 'absolute',
        top: 8,
        bottom: 8,
        left: 13,
        justifyContent: 'center',
    },
    rightNav: {
        position: 'absolute',
        right: 8,
        top: 8,
        bottom: 8,
        justifyContent: 'center',
    },
    barButton: {
        color: 'white',
        fontSize: 18
    },
})


export default MyOrderDetailNavBar