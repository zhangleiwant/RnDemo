import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

export default class MenuButton extends React.Component {
    static propTypes = {
        renderIcon: PropTypes.number.isRequired,    // 图片，加入.isRequired即为比填项
        showText: PropTypes.string,                 // 显示标题／文字
        tag: PropTypes.string,                      // Tag
        onClick: PropTypes.func,                    // 回调函数
        showTextStyle: Text.propTypes.style,
        imageIconStyle: Image.propTypes.style,
        buttonDis: PropTypes.bool,
        orderStatus: PropTypes.string,//订单数量
        orderVisible:PropTypes.bool,//角标是否可见
    };

    constructor(props){
        super(props);
        this._onClick = this._onClick.bind(this);   // 需要在回调函数中使用this，必须使用bind（this）来绑定
    }

    _onClick(){
        if(this.props.onClick){                     // 设置了回调的情况
            this.props.onClick(                     // 回调Title和tag
                this.props.showText,
                this.props.tag
            );
        }
    }

    render(){
        return(
            <TouchableOpacity style = {{flex:1}} onPress = {this._onClick} disabled = {this.props.buttonDis}>
                <View style = {styles.backgroundView}>
                    <Image
                        style = {this.props.imageIconStyle ? this.props.imageIconStyle : styles.iconImage}
                        source = {this.props.renderIcon}
                        resizeMode={this.props.resizeMode}
                    />
                    <Text
                        style = {this.props.showTextStyle ? this.props.showTextStyle : styles.showText}
                    >
                        {this.props.showText ? this.props.showText : ''}
                    </Text>
                </View>
                {
                   this.props. orderVisible?
                    <View style={{position:'absolute',height:18,width:18,top:5,left:43, backgroundColor:'#F94E42',borderRadius:9,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff',backgroundColor:'transparent',textAlign:'center',fontSize:10}}>{this.props.orderStatus}</Text>
                    </View>: <View/>
                }
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    iconImage: {
        width: 34,
        height: 34,
        marginBottom: 2
    },
    showText: {
        fontSize: 14,
        color: '#582601'
    }
});