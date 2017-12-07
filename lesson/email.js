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
    View
} from 'react-native';

//自己写组件，落款邮件签名
class Email extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name_style}>{this.props.name}</Text>
                <Text style={styles.email_style}>{this.props.email}</Text>
            </View>
        );
    }
}

export default class App extends Component<{}> {
    render() {
        return (
            <View>
                <Email name="张磊" email="www.baidu.com"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    name_style: {
        textAlign: 'center',
        color: '#333',
        fontSize: 15
    },
    email_style: {
        textAlign: 'center',
        color: 'red',
        fontSize: 12,
    }
});
