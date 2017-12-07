import React, {Component} from 'react';
import {} from 'react-native';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Modal,
} from 'react-native';

//对话框
export default class NDialog extends Component {
    render() {
        return (
            <Modal
                visible={this.props.visibility}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => this.setState({visibility: false})}>
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        {this.props.title ? <Text style={styles.modalTitle}>{this.props.title}</Text> : <View/>}
                        {this.props.message ? <Text style={styles.modalMessage}>{this.props.message}</Text> : <View/>}
                        {this.props.notice ? <Text style={styles.notice}>{this.props.notice}</Text> : <View/>}
                        <View style={styles.horizonLine}/>
                        <View style={styles.row}>
                            <TouchableHighlight style={styles.leftBn} onPress={this.props.onLeftPress}
                                                underlayColor={'#C5C5C5'}>
                                <Text style={styles.leftBnText}>确定</Text>
                            </TouchableHighlight>
                            <View style={styles.verticalLine}/>
                            <TouchableHighlight style={styles.rightBn} onPress={this.props.onRightPress}
                                                underlayColor={'#C5C5C5'}>
                                <Text style={styles.rightBnText}>取消</Text>
                            </TouchableHighlight>
                        </View>
                    </View>


                </View>

            </Modal>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: 'center',
    },
    modalTitle: {
        color: '#000000',
        fontSize: 16,
        marginTop: 10,
    },
    notice: {
        color: '#8a8a8a',
        fontSize: 14,
        margin: 10,
    },
    modalMessage: {
        color: '#000000',
        fontSize: 14,
        margin: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    horizonLine: {
        backgroundColor: '#9f9fa3',
        height: 0.5,
        alignSelf: 'stretch'
    },
    verticalLine: {
        backgroundColor: '#9f9fa3',
        width: 1,
        alignSelf: 'stretch'
    },
    leftBn: {
        borderBottomLeftRadius: 3,
        padding: 7,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftBnText: {
        fontSize: 16,
        color: '#00A9F2',
    },
    rightBn: {
        borderBottomRightRadius: 3,
        padding: 7,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightBnText: {
        fontSize: 16,
        color: '#8a8a8a'
    }
})