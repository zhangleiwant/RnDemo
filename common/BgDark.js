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

//背景蒙尘
export default class BgDark extends Component {
    render() {
        return (
            <Modal
                visible={this.props.visibility}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => this.setState({visibility: false})}>
                <View style={styles.container}>
                </View>
            </Modal>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    }
});