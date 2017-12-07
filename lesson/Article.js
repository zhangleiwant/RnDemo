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
    ScrollView
} from 'react-native';

//自己写组件，文章浏览列表
{/*<View>*/}
{/*<List name="React-native 指南" author="张磊" date='2017-10-10'/>*/}
{/*<List name="android 指南" author="张磊" date='2017-10-10'/>*/}
{/*<List name="React 指南" author="张磊" date='2017-10-10'/>*/}
// {/*</View>*/}
class List extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.name_style}>{this.props.name}</Text>
                <Text style={styles.normal_style}>{this.props.author}</Text>
                <Text style={styles.normal_style}>{this.props.date}</Text>
            </View>
        );
    }
}

export default class App extends Component<{}> {


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data : [
                {name:"React-native 指南", author:"张磊" ,date:'2017-10-10'},
                {name:"React 指南", author:"张磊" ,date:'2017-10-10'},
                {name:"native 指南", author:"张磊" ,date:'2017-10-10'}
            ]
        };
      }
    render() {
        return (
        <ScrollView>
            {this.state.data.map(function (list) {
                return <List  name={list.name} author={list.author} date={list.date}/>
            })}
        </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:40,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth:0.5,
        borderBottomColor:'#333'
    },
    name_style: {
        textAlign: 'center',
        color: 'red',
        fontSize: 15,
    },
    normal_style: {
        textAlign: 'center',
        fontSize: 12,
    },

});
