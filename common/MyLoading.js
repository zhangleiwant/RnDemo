/**
 * Created by shuaizhitao on 2017/11/23.
 */

import React, {Component} from 'react';
import {} from 'react-native';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Modal
} from 'react-native';
import Loading from './Loading';

//背景蒙尘
export default class MyLoading extends Component {
    render() {
        return (
            <Modal
                visible={this.props.visibility}
                transparent={true}
                animationType={'fade'}>
                <View style={styles.container}>
                    <Loading />
                </View>
            </Modal>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
});