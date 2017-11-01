/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    DatePickerAndroid,
    DatePickerIOS,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

//默认点击文本根据不同平台会提示不同的日期对话框 ，另外一个框架应用是热react-native-picker

export default class App extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            result: 'default',
            today: new Date(),
            ios: new Date(),
            theMaxDate: new Date(),
            isRefresh: false
        };
        option = {
            date: this.state.today,
            maxDate: this.state.theMaxDate,

        };
    }

    showDatePicker = () => {
        DatePickerAndroid.open(option).then(
            result => {
                if (result.action === DatePickerAndroid.dismissedAction) {
                    this.setState({
                            result: '用户没有选择日期',
                        }
                    );

                } else {
                    this.setState({
                            result: '用户选择了' + result.year + '年' + (result.month + 1) + '月' + result.day + '日',
                        }
                    );

                }


            }
        ).catch(
            error => {
                console.log('出错了:' + error);

            }
        );
    };

    onDateChangeIOS(date) {
        this.setState({
            ios: date,
        });
    }

    _click = () => {
        this.setState({
            ios: date,
        });
    };

    render() {
        return (

            <View style={{marginTop: 50}}>
                <Text onPress={() => this.setState({isRefresh: !this.state.isRefresh})}>{this.state.result}</Text>
                {this.state.isRefresh ? this._renderIos() : null}
            </View>
        );
    }

    _renderIos() {
        if (Platform.OS === 'android') {

            DatePickerAndroid.open(option).then(
                result => {
                    if (result.action === DatePickerAndroid.dismissedAction) {
                        this.setState({
                                result: '用户没有选择日期',
                            }
                        );

                    } else {
                        this.setState({
                                result: '用户选择了' + result.year + '年' + (result.month + 1) + '月' + result.day + '日',
                            }
                        );

                    }
                }
            ).catch(
                error => {
                    console.log('出错了:' + error);

                }
            );
        } else {
            return (
                <View style={{position: 'absolute', top: 50, width: 300, height: 300, backgroundColor: 'red'}}>
                    <DatePickerIOS
                        date={this.state.ios}
                        mode="date"
                        onDateChange={d => this.onDateChangeIOS(d)}
                    />
                    <Text style={{marginTop: 30}} onPress={d => this.onDateChangeIOS(d)}>确认</Text>

                </View>

            );
        }
    }

    // _renderAndroid() {
    //     return (
    //         <View>
    //             <Text
    //                 onPress={this.showDatePicker}>{this.state.result}</Text>
    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
