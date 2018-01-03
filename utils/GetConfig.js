import {
    Platform,
    DeviceEventEmitter
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import resIpData from '../common/ResIpData'

let data = new resIpData();

const getConfig =() => {
    var url = "http://www.hotkidclub.com/res/store/config_server/Group.txt";
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        body: null
    })
        .then((response) => response.json())
        .then((responseData) => {
            var version = DeviceInfo.getVersion();
            var iphoneFrom = Platform.OS === 'android' ? 'android' : 'ios';
            var nowCon = '';
            console.log('123123:' + responseData.object.length);
            for(let i = 0; i<responseData.object.length; i++)
            {
                var item = responseData.object[i];
                if(item.version === version)
                {
                    if(item.plateform === iphoneFrom)
                    {
                        nowCon = item;
                    }
                }
            }
            var groupUrl = 'http://www.hotkidclub.com/res/store/config_server/'+nowCon.group+'.txt';
            console.log('groupUrl:  ' + groupUrl);
            fetch(groupUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                body: null
            })
                .then((response) => response.json())
                .then((responseData) => {
                    console.log('server_ip:' + responseData.object.server_ip);
                    console.log('activity_map:' + responseData.object.activity_map);
                    console.log('activity_map_share:' + responseData.object.activity_map_share);
                    console.log('res_ip:' + responseData.object.res_ip);

                    data.setServer_Ip(responseData.object.server_ip);
                    data.setActivity_Map(responseData.object.activity_map);
                    data.setActivity_Map_Share(responseData.object.activity_map_share);
                    data.setRes_Ip(responseData.object.res_ip);
                    DeviceEventEmitter.emit('refresh','刷新界面');
                    return true;
                })
                .catch((err) => {
                    console.log('err:', url, err);     //网络请求失败返回的数据;
                    return false;
                })
                .done();
        })
        .catch((err) => {
            console.log('err:', url, err);     //网络请求失败返回的数据
            return false;
        })
        .done();
};

export default getConfig;