import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    SectionList,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import NavigationBar from '../../common/MyNavBar';
import {connect} from 'react-redux';
import {QuestionAction} from "../../actions/UserAction";
import Loading from "../../common/Loading";

var width = Dimensions.get('window').width;

// 常见问题
class Question extends React.Component {

    static navigationOptions = () => ({
        header: null
    });

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            refreshing: false,//当前的刷新状态
        };
    }

    _onPressleft() {
        this.props.navigation.goBack();
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(QuestionAction());
    }


    render() {
        const {UserReducer} = this.props;
        return (
            <View style={styles.base}>
                <NavigationBar
                    leftImage={require('../../img/product_navbar_back.png')}
                    leftAction={this._onPressleft.bind(this)}
                    title={'常见问题'}
                    titleStyle={styles.title_style}
                    style={{backgroundColor: '#fff'}}
                />
                {UserReducer.qaLoading ? <Loading/> : <View style={{flex: 1}}>
                    <SectionList
                        renderSectionHeader={this._sectionHeader}
                        renderItem={this._renderItem}
                        sections={UserReducer.qaData}
                        keyExtractor={(item, index) => ("index" + index + item)}
                        ItemSeparatorComponent={this._separatorCom}
                        onRefresh={this._onRefresh}
                        refreshing={this.state.refreshing}
                    />
                </View>
                }

            </View>
        );
    }

    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        const timer = setTimeout(() => {
            const {dispatch} = this.props;
            dispatch(QuestionAction());
            this.setState({
                refreshing: false,
            });
        }, 1500);
    };

    _separatorCom() {
        return (
            <View style={{height: 1, width: width, marginLeft: 10, marginRight: 10, backgroundColor: '#f2f2f2'}}></View>
        )
    }

    _sectionHeader = (info) => {
        var txt = info.section.title;
        console.log("info:" + JSON.stringify(info));
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text
                    style={{
                        paddingLeft: 10,
                        height: 46,
                        paddingTop: 14,
                        paddingBottom: 14,
                        backgroundColor: '#f2f2f2',
                        color: '#666',
                        fontSize: 14
                    }}>{txt}</Text>
            </View>
        );
    };

    _renderItem = (info) => {
        var txt = '  ' + info.item.title;
        var code = '' + info.item.code;
        return (
            <TouchableOpacity onPress={this._onClick.bind(this, code, txt)}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text
                        style={{
                            marginLeft: 10,
                            height: 40,
                            backgroundColor: "#fff",
                            color: '#5C5C5C',
                            fontSize: 14,
                            paddingTop: 10,
                            paddingBottom: 10,
                        }}>{txt}</Text>
                    <Image source={require('../../img/person/forward_arrow.png')}
                           style={{height: 11.5, width: 20, alignSelf: 'center'}}
                           resizeMode={'contain'}/>
                </View>
            </TouchableOpacity>
        );
    };

    _onClick(code, txt) {
        const {navigation} = this.props;
        navigation.navigate('QuestionDetail', {code: code,title:txt});
    }
}


const styles = StyleSheet.create({
    base: {
        flex: 1, backgroundColor: "#fff"
    },
    img: {
        width: 332,
        height: 168,
        alignSelf: 'center',
        margin: 8
    },
    title_style: {
        fontSize: 17,
        color: '#333',
    },
    order_question_container: {
        backgroundColor: '#F2F2F2'
    },
    order_q_text: {
        fontSize: 14,
        padding: 8,
        marginLeft: 14
    },
});

const mapStateToProps = (state) => {
    const {UserReducer} = state;
    return {
        UserReducer
    }
};
export default connect(mapStateToProps)(Question);
