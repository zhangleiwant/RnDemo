import React from 'react';
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    ImageBackground,
} from 'react-native';

import constants from '../common/constants';

export default class ProductItem extends React.Component{
    static PropTypes = {
        productIcon: PropTypes.number.isRequired,       // 商品图片
        productName: PropTypes.string,                  // 商品名
        productWeight: PropTypes.string,                // 商品重量
        productDescription: PropTypes.string,           // 商品描述
        productCurrentPrice: PropTypes.string,          // 现价
        productOriginalPrice: PropTypes.string,         // 原价
        shoppingCartIcon: PropTypes.number.isRequired,  // 购物车图片
        shoppingTag: PropTypes.string,                  // 购物车Tag
        itemTag: PropTypes.string,                      // 商品tag ''为普通 'B'为爆款 'T'推荐
        onShoppingCartClick: PropTypes.func,            // 购物车回调函数
        tag: PropTypes.string,                          // 整体tag
        onClick: PropTypes.func,                        // 整体回调
        buttonDis: PropTypes.bool,
    }

    constructor(props){
        super(props);
        this._onShoppingCartClick = this._onShoppingCartClick.bind(this);   // 需要在回调函数中使用this，必须使用bind（this）来绑定
        this._onClick = this._onClick.bind(this);
    }

    _onShoppingCartClick(){
        if(this.props.onShoppingCartClick){                     // 设置了回调的情况
            this.props.onShoppingCartClick(                     // 回调根据需要添加
                this.props.productName,
                this.props.shoppingTag
            );
        }
    }

    _onClick(){
        if(this.props.onClick){                     // 设置了回调的情况
            this.props.onClick(                     // 回调Title和tag
                this.props.productName,
                this.props.tag
            );
        }
    }

    _isProductDescription(){
        if (this.props.productDescription)
            return (
                <View style = {styles.textViewCenter1}>
                    <Text style = {styles.weight}>
                        {this.props.productWeight}
                    </Text>
                    <Text style = {styles.description}>
                        {this.props.productDescription}
                    </Text>
                </View>
            );
        else
            return (
                <View style = {styles.textViewCenter2}>
                    <Text style = {styles.weight}>
                        {this.props.productWeight}
                    </Text>
                </View>
            );
    }

    render(){
        return(
            <View style = {[styles.backgroundView, this.props.productDescription ? {height: 300} : {height: 260}]}>
                <TouchableWithoutFeedback onPress = {this._onClick} disabled = {this.props.buttonDis}>
                    <View style = {{flex: 1}}>
                        <View style = {styles.imageView}>
                            <Image
                                resizeMode='contain'
                                style = {styles.image}
                                source = {this.props.productIcon}
                            />
                        </View>
                        <View style = {styles.textView}>
                            <View style = {styles.textViewUp}>
                                <Text style = {styles.name} numberOfLines = {1}>
                                    {this.props.productName}
                                </Text>
                            </View>
                            {this._isProductDescription()}
                            <View style = {[styles.textViewBottom, this.props.productDescription ? {marginBottom: 0} : {marginBottom: 40}]}>
                                <Text style = {styles.currentPrice}>{this.props.productCurrentPrice}</Text>
                                <Text style = {styles.originalPrice}>{this.props.productOriginalPrice}</Text>
                                <View style = {styles.buttonView}>
                                    <View style = {{flex: 1}}>
                                        <TouchableWithoutFeedback onPress = {this._onShoppingCartClick} disabled = {this.props.buttonDis}>
                                            <View style={{width: 50, height: 30, alignItems: 'center'}}>
                                                <Image
                                                    style = {styles.shoppingImage}
                                                    source = {this.props.shoppingCartIcon}
                                                />
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <ImageBackground
                            style = {styles.itemTagImage}
                            source = {
                                this.props.itemTag === '3' ? require('../img/baokuan.png') :
                                    this.props.itemTag === '2' ? require('../img/tuijian.png') : null
                            }
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundView: {
        width: constants.window.width/2-5,
        backgroundColor: 'white',
        borderRadius: 0.5,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        marginLeft: 2.5,
        marginRight: 2.5,
        marginTop: 2.5,
        marginBottom: 2.5,
        alignItems: 'center',
    },
    itemTagImage: {
        position:'absolute',
        height: 22,
        width: 38,
        marginLeft: 2.5,
    },
    imageView: {
        height: 174,
        width: constants.window.width/2-5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 174,
        width: constants.window.width/2-10,
    },
    textView: {
        height: 126,
        width: constants.window.width/2-5,
    },
    textViewUp: {
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    name: {
        fontSize: 14,
        color: '#333333',
    },
    textViewCenter1: {
        flex: 2.5,
        justifyContent: 'space-around',
        marginLeft: 5,
        marginRight: 5,
    },
    textViewCenter2: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    weight:{
        flex: 1,
        fontSize: 13,
        color: '#666666',
    },
    description: {
        flex: 2,
        fontSize: 12,
        color: '#999999',
    },
    textViewBottom: {
        flex: 2,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentPrice: {
        lineHeight: 15,
        textAlign: 'center',
        fontSize: 16,
        color: '#f95c4f',
    },
    originalPrice: {
        lineHeight: 15,
        marginLeft: 5,
        textAlign: 'center',
        fontSize: 14,
        textDecorationLine: 'line-through',
        textDecorationColor: '#999999',
        color: '#999999',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    shoppingImage: {
        width: 26,
        height: 26,
    }
});