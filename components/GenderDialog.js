import React, {Component} from 'react';
import {} from 'react-native';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    Modal,
    Dimensions,
    Image,
    ListView,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//性别的对话框
export default class GenderDialog extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = ({});
    }


    render() {
        return (
            <Modal
                visible={this.props.visibility}
                transparent={true}
                animationType={'fade'}
                onRequestClose={() => this.setState({visibility: false})}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'flex-end',
                }}>
                    <View style={styles.container}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
                            <Image source={require('../../img/dialog_close.png')} style={{width: 0, height: 0}}/>
                            <Text style={{fontSize: 15}}>选择性别</Text>
                            <TouchableWithoutFeedback onPress={this.props.dialogClose}>
                                <View>
                                    <Image source={require('../../img/dialog_close.png')}
                                           style={{width: 20, height: 20, resizeMode: 'contain'}}/>

                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                        <View style={{height: 1, backgroundColor: '#ccc'}}/>
                        <TouchableWithoutFeedback onPress={this.props.choseM}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('../../img/person/gender_man.png')}
                                           style={{width: 20, height: 20, marginRight: 4}}/>
                                    <Text style={{textAlign: 'center'}}>男</Text>
                                </View>
                                <View>
                                    {this.props.select ?
                                        <Image source={require('../../img/orderImage/pay_selected.png')}
                                               style={{width: 20, height: 20}}/> :
                                        <Image source={require('../../img/orderImage/pay_unselected.png')}
                                               style={{width: 20, height: 20}}/>
                                    }
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        <View style={{height: 1, backgroundColor: '#ccc'}}/>
                        <TouchableWithoutFeedback onPress={this.props.choseF}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 12}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('../../img/person/gender_woman.png')}
                                           style={{width: 20, height: 20, marginRight: 4}}/>
                                    <Text style={{textAlign: 'center'}}>女</Text>
                                </View>
                                <View>
                                    {this.props.select ?
                                        <Image source={require('../../img/orderImage/pay_unselected.png')}
                                               style={{width: 20, height: 20}}/>:
                                        <Image source={require('../../img/orderImage/pay_selected.png')}
                                               style={{width: 20, height: 20}}/>

                                    }
                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={this.props.genderCommit}>
                            <View style={styles.containerStyle}>
                                <Text style={styles.btn_style}>确定</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Modal>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    containerStyle: {
        backgroundColor: '#FA6155',
        marginTop: 50,
        marginBottom: 25,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#FA6155'
    },
    btn_style: {
        color: '#fff',
        textAlign: 'center',
        padding: 8,
        fontSize: 14
    },

});