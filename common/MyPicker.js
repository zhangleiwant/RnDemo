import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    Animated,
    Easing,
    Dimensions,
    Picker,
    TouchableOpacity,
} from 'react-native';
import regionAPI from '../pages/addresspages/regionAPI';

const {width, height} = Dimensions.get('window');
const [aWidth, aHeight] = [width, 300];
const [left, top] = [0, 0];

export default class MyPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: new Animated.Value(0),
            opacity: new Animated.Value(0),
            hide: true,
            selectedProvince: this.props.selectedProvince,
            selectedCity: this.props.selectedCity,
            selectedArea: this.props.selectedArea,
            provinces: [],
            citys: [],
            areas: []
        };
        this._filterAllProvinces = this._filterAllProvinces.bind(this);
        this._filterCitys = this._filterCitys.bind(this);
        this._filterAreas = this._filterAreas.bind(this);
        this._handleProvinceChange = this._handleProvinceChange.bind(this);
        this._handleCityChange = this._handleCityChange.bind(this);
        this._handleAreaChange = this._handleAreaChange.bind(this);
    }
    componentDidMount() {
        regionAPI().then((area) => {
             console.log('area', area);

            this._regionAllData = area;

            const provinces = this._filterAllProvinces();
             console.log('provinces', provinces);

            const citys = this._filterCitys(this.state.selectedProvince);

            const areas = this._filterAreas(this.state.selectedProvince, this.state.selectedCity);

            this.setState({
                provinces:provinces,
                citys:citys,
                areas:areas
            });
        });
    }
    _filterAllProvinces() {
        return this._regionAllData.map((item) => {
            return item.name;
        });
    }
    _filterCitys(province) {
        const provinceData = this._regionAllData.find(item => item.name === province);
        return provinceData.city.map(item => item.name);
    }
    _filterAreas(province, city) {
        const provinceData = this._regionAllData.find(item => item.name === province);
        const cityData = provinceData.city.find(item => item.name === city);
        return cityData.area;
    }
    componentWillUnMount(){
        this.timer && clearTimeout(this.timer);
    }

    render() {
        if(this.state.hide){
            return (<View />)
        } else {
            return (
                <View style={styles.container} >
                    <Animated.View style={ styles.mask } >
                    </Animated.View>

                    <Animated.View
                        style={[styles.tip , {transform: [{
                        translateY: this.state.offset.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, (height-aHeight)]
                         })
                        }]
                    }]}>
                        <View style={styles.tipTitleView} >
                            <Text style={styles.cancelText} onPress={this.cancel.bind(this)}>取消</Text>
                            <Text style={styles.okText} onPress={this.ok.bind(this)} >确定</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Picker
                                style={styles.itemPicker}
                                onValueChange={this._handleProvinceChange}
                                selectedValue={this.state.selectedProvince}
                            >
                                {
                                    this.state.provinces.map((province, index) => {
                                        return (
                                            <Picker.Item value={province} label={province} key={index} />
                                        );
                                    })
                                }
                            </Picker>
                            <Picker
                                style={styles.itemPicker}
                                onValueChange={this._handleCityChange}
                                selectedValue={this.state.selectedCity}
                            >
                                {
                                    this.state.citys.map((city, index) => {
                                        return (
                                            <Picker.Item value={city} label={city} key={index} />
                                        );
                                    })
                                }
                            </Picker>
                            <Picker
                                style={styles.itemPicker}
                                onValueChange={this._handleAreaChange}
                                selectedValue={this.state.selectedArea}

                            >
                                {
                                    this.state.areas.map((area, index) => {
                                        return (
                                            <Picker.Item value={area} label={area} key={index} />
                                        );
                                    })
                                }
                            </Picker>
                        </View>
                    </Animated.View>
                </View>
            );
        }
    }
//<Picker
//style={styles.picker}
//mode={Picker.MODE_DIALOG}
//itemStyle={styles.itempicker}
//selectedValue={this.state.choice}
//onValueChange={choice => this.setState({choice: choice})}>
//{this.options.map((aOption) =>  <Picker.Item color='#b5b9be' label={aOption} value={aOption} key={aOption} /> )}
//</Picker>

    //显示动画
    in() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0.8,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 1,
                }
            )
        ]).start();
    }

    //隐藏动画
    out(){
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0
                }
            )
        ]).start();

        this.timer = setTimeout(
            () => this.setState({hide: true}),
            500
        );
    }

    //取消
    cancel() {
        if(!this.state.hide){
            this.out();
        }
        if(this.props.onCancel){
            this.props.onCancel();
        }
    }

    //确定
    ok() {
        if(!this.state.hide){
            this.out();
        }
        if(this.props.onSubmit){
            this.props.onSubmit({
                province: this.state.selectedProvince,
                city: this.state.selectedCity,
                area: this.state.selectedArea
            });
        }
    }
    _handleProvinceChange(province) {
        const city = this._filterCitys(province);
        const areas = this._filterAreas(province, city[0]);
        this.setState({
            selectedProvince: province,
            selectedCity: city[0],
            selectedArea: areas[0],
            citys:city,
            areas:areas
        });
    }
    _handleCityChange(city) {
        const areas = this._filterAreas(this.state.selectedProvince, city);
        this.setState({
            selectedCity: city,
            selectedArea: areas[0],
            areas:areas
        });
    }
    _handleAreaChange(area) {
        this.setState({
            selectedArea: area
        });
    }
    show() {
        if(this.state.hide){
            this.setState({ hide: false}, this.in);
        }
    }
}
MyPicker.propTypes = {
    selectedProvince: PropTypes.string,
    selectedCity: PropTypes.string,
    selectedArea: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    androidPickerHeight: PropTypes.number
};

MyPicker.defaultProps = {
    selectedProvince: '北京',
    selectedCity: '北京',
    selectedArea: '东城区',
    onSubmit: () => {},
    onCancel: () => {},
    androidPickerHeight: 50
};
const styles = StyleSheet.create({
    container: {
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top
    },
    mask: {
        justifyContent:"center",
        backgroundColor:"#383838",
        opacity:0.8,
        position:"absolute",
        width:width,
        height:height,
        left:left,
        top:top
    },
    tip: {
        width:aWidth,
        height:aHeight,
        backgroundColor:"#fff",
        alignItems:"center"
    },
    tipTitleView: {
        height:44,
        width:aWidth,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderColor:"#f0f0f0"
    },
    cancelText:{
        color:"#999999",
        fontSize:16,
        paddingLeft:30
    },
    okText:{
        //color:"#e6454a",
        color:'#F95C4F',
        fontSize:16,
        paddingRight:27,
        fontWeight:'bold'
    },
    picker:{
        justifyContent:'center',
        //height: 216,//Picker 默认高度
        width:aWidth
    },
    itemPicker:{
        flex:1
    }
});