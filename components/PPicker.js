import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import ChinaArea from './china_area_data.json';
import Picker from 'react-native-picker';
import BgDark from './BgDark';

//const pickerTypes = {
//    ADDRESS:'address',
//    DATE:'date'
//};

export  default class PPicker extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            bindVisibility: false //遮罩层是否显示
        };
      }

    static propTypes = {
        onPickerCancel: PropTypes.func,
        onPickerConfirm:PropTypes.func,
        onPickerSelect:PropTypes.func,
        pickerTitle:PropTypes.string,
        pickerDATEType:PropTypes.bool,
        selectedValue:PropTypes.array,
        minDate:PropTypes.number,
        maxDate:PropTypes.number
    };

    static defaultProps = {
        pickerDATEType:true,
        pickerTitle:'',
        minDate:1901,
        maxDate:(new Date()).getFullYear()
    };

    show = () => {
        this.setState({
            bindVisibility: true
        });
        //alert(selectedValue[0]);
        Picker.init({
            pickerData: this.props.pickerDATEType ? this._createDateData() : this._createAreaData(),
            pickerToolBarFontSize: 16,
            pickerFontSize: 16,
            pickerConfirmBtnText: '确认',
            pickerCancelBtnText: '取消',
            pickerTitleText: this.props.pickerTitle,
            selectedValue:this.props.selectedValue,
            pickerConfirmBtnColor: [249, 92, 79, 1],
            pickerCancelBtnColor: [51, 51, 51, 1],
            pickerTitleColor: [51, 51, 51, 1],
            pickerFontColor: [51, 51, 51, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                this.setState({
                    bindVisibility: false
                });
                this.props.onPickerConfirm({
                    province: pickedValue[0],
                    city: pickedValue[1],
                    area: pickedValue[2]
                });
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                this.setState({
                    bindVisibility: false
                })
            },
            onPickerSelect: (pickedValue, pickedIndex) => {

            }
        });
        Picker.show();
    };

    hide = () => {
        Picker.hide();
    };

    render() {
        return (
            <View >
                <BgDark visibility={this.state.bindVisibility}></BgDark>
            </View>
        );
    }
    _createDateData = () => {
        let date = [];
        for (let i = this.props.minDate; i <= this.props.maxDate; i++) {
            let month = [];
            for (let j = 1; j < 13; j++) {
                let day = [];
                if (j === 2) {
                    for (let k = 1; k < 29; k++) {
                        day.push(k + '日');
                    }
                    //Leap day for years that are divisible by 4, such as 2000, 2004
                    if (i % 4 === 0) {
                        day.push(29 + '日');
                    }
                }
                else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
                    for (let k = 1; k < 32; k++) {
                        day.push(k + '日');
                    }
                }
                else {
                    for (let k = 1; k < 31; k++) {
                        day.push(k + '日');
                    }
                }
                let _month = {};
                _month[j + '月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i + '年'] = month;
            date.push(_date);
        }
        return date;
    };
    _createAreaData = () => {
        let data = [];
        let area = ChinaArea.address;
        for (let i = 0; i < area.length; i++) {
            let city = [];
            for (let j = 0, cityLen = area[i]['city'].length; j < cityLen; j++) {
                let _city = {};
                let areas = area[i]['city'][j]['district'].map((item) => {
                    return item.name;
                });
                _city[area[i]['city'][j]['name']] = areas;
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    };
}
