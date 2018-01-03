let instance = null;

var server_ip = 'http://www.hotkidclub.com/api/store/11';
var activity_map = 'http://www.hotkidclub.com/api/cpn/11';
var activity_map_share = 'http://h0w.co/cpn/w/?c=11';
var res_ip = 'http://www.hotkidclub.com/res/store/11';
var share_ip = 'http://www.hotkidclub.com/store/11';


export default class Singleton {

    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }

    setServer_Ip(ip){
        server_ip = ip;
    }

    getServer_Ip(){
        return server_ip;
    }

    setActivity_Map(ip){
        activity_map = ip;
    }

    getActivity_Map(){
        return activity_map;
    }

    setRes_Ip(ip){
        res_ip = ip;
    }

    getRes_Ip(){
        return res_ip;
    }

    setActivity_Map_Share(ip){
        activity_map_share = ip;
    }

    getActivity_Map_Share(){
        return activity_map_share;
    }
}