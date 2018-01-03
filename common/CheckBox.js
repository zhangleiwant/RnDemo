/**
 * Created by shuaizhitao on 2017/10/19.
 */
import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

class CheckBox extends React.Component {

    static PropTypes = {
        name:PropTypes.string,
        selected:PropTypes.bool,
        onPress: PropTypes.func,
        textStyle:Text.propTypes.style,
        disabled:PropTypes.bool
    };

    render() {
        return (
            <TouchableOpacity  onPress={ this.props.onPress} disabled={this.props.disabled}>
                <View style={styles.container}>
                    {
                            this.props.selected ?
                            <Image source={require('../img/ShopCart/btn_select.png')} resizeMode='contain' style={styles.imageStyle}/> :
                            <Image source={require('../img/ShopCart/btn_unselect.png')} resizeMode='contain' style={styles.imageStyle}/>
                    }
                    <Text style={this.props.textStyle ? this.props.textStyle : styles.textStyle}>
                        {this.props.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:25
    },
    imageStyle:{
        width:17,
        height:17
    },
    textStyle:{
        marginLeft:10
    }
});

export default CheckBox;
