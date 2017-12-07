import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Proptypes from 'prop-types';

export default class LableText extends React.Component {
    static PropTypes = {
        leftImage: Proptypes.number.isRequired,
        rightImage: Proptypes.number.isRequired,
        rightIcon: Proptypes.number.isRequired,
        leftText: Proptypes.string,
        rightText: Proptypes.string,
        onPress: Proptypes.func,
        leftstyle: Text.propTypes.style,
        rightstyle: Text.propTypes.style,
        auterstyle: Image.propTypes.style,
        timeOut:Proptypes.bool,
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} disabled={this.props.timeOut}>
                <View style={styles.label_container}>
                    <View style={styles.left_container}>
                        <View>
                            <Image
                                source={this.props.leftImage ? this.props.leftImage : null}
                                style={this.props.leftImage ? styles.img : {width: 0, height: 0}}/>
                        </View>
                        <Text
                            style={this.props.leftstyle ? this.props.leftstyle : styles.leftnormaltext}>{this.props.leftText}</Text>
                    </View>


                    <View style={styles.right_container}>
                        <View>
                            <Image source={this.props.rightImage ? this.props.rightImage : null} resizeMode={'contain'}
                                   style={this.props.rightImage ? styles.arrowImg : {width: 0, height: 0}}/>

                        </View>

                        <View>
                            <Image source={this.props.rightIcon ? this.props.rightIcon : null}
                                   style={this.props.auterstyle ? this.props.auterstyle : (this.props.rightIcon ? styles.img : {
                                       width: 0,
                                       height: 0
                                   })} />

                        </View>

                        <Text
                            style={this.props.rightstyle ? this.props.rightstyle : styles.rightnormaltext}> {this.props.rightText}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    label_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 8,
        justifyContent: 'space-between'
    },
    left_container: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center'
    },
    right_container: {
        flexDirection: 'row-reverse',
        marginTop: 4,
        alignItems: 'center'
    },
    img: {
        width: 20,
        height: 20,
        margin: 4,
    },
    arrowImg:{
        width:11.5,
        height:20,
        margin:4
    },
    leftnormaltext: {
        fontSize: 14,
        color: '#333',
        marginLeft: 14
    },
    rightnormaltext: {
        fontSize: 12,
        color: '#666',
    },

});

// export default LableText;