/**
 * Created by zhangzuohua on 2018/1/22.
 */
import React, {Component} from 'react';
import {
    Platform,
    View,
    I18nManager,
    TouchableOpacity,
    Easing,
    StatusBar,
    Animated,
    DeviceEventEmitter,
    Image,
} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import Detail from './pages/Detail';
import BiaoqingDetail from './pages/BiaoqingDetail';
import web from './pages/web';
import Home from './pages/Home';
import ScrollTabView from './pages/ScrollTabView';
import ScrollTabViewRand from './pages/ScrollTabViewRand';
import ScrollTabViewBiaoqing from './pages/ScrollTabViewBiaoqing';
import ScrollTabViewTouxiang from './pages/ScrollTabViewTouxiang';
import ScrollTabViewJoke from './pages/ScrollTabViewJoke';
import ScrollTabViewAdd from './pages/ScrollTabViewAdd';
import Tab from './components/Tab'
import Login from  './pages/Login'
import SearchTag from './pages/Search/index';
import Search from './pages/Search/search';
import My from './pages/My/Index';
import Publish from './pages/My/Publish'
import Collection from './pages/My/Collection'
import User from './pages/User'
import TabMore from './pages/TabMore'

import Creat from './pages/Creat/index';
import CreatTag from './pages/Creat/creat';
import Cdetail from './pages/Creat/detail';

const tabbaroption = {
    activeTintColor: '#027fff',
    inactiveTintColor: '#999999',
    showIcon: true,
    style: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    indicatorStyle: {
        opacity: 0
    },
    iconStyle:{
        paddingBottom:0,
        paddingTop:0,
        padding:0,
        marginTop:0,
        marginBottom:0,
        width:SCALE(40),
        height:SCALE(40),
    },
    labelStyle:{
        paddingTop:0,
        paddingBottom:SCALE(10),
        marginTop:0,
        padding:0,
        fontSize:FONT(10),
        color:'#888888'
    },
    tabStyle: {
        height:Platform.OS==='ios'?SCALE(98):SCALE(100),
        justifyContent:'center',
        alignItems:'center'
    }
};

const _configureTransition = () => {
    return {
        duration: 100,
        timing: Animated.spring,
        tension: 800,
        friction: 100,
    };
}
const TabNavigaApp = TabNavigator({
    New: { screen: ScrollTabView },
    Creat: { screen: Creat },
    // Add: { screen: ScrollTabViewAdd },
    TabMore: { screen: TabMore },
    My:{screen: My},
},{
    lazy: true,
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: tabbaroption,
    configureTransition:()=>_configureTransition(),
    tabBarComponent:props => <Tab {...props}/>
});
const NavgationApp = StackNavigator({
    Home: {screen: Home},
    Index: {screen: TabNavigaApp},
    Detail: {screen: Detail},
    BiaoqingDetail: {screen: BiaoqingDetail},
    Web: {screen: web},
    Login: {screen: Login},
    Publish: {screen: Publish},
    TabMore: { screen: TabMore},
    Wangming: {screen: ScrollTabViewRand},
    Biaoqing: { screen: ScrollTabViewBiaoqing},
    Touxiang: { screen: ScrollTabViewTouxiang},
    Joke: { screen: ScrollTabViewJoke},
    Collection: {screen: Collection},
    User: {screen: User},
    Creat: {screen: Creat},
    CreatTag: {screen: CreatTag},
    SearchTag: {screen: SearchTag},
    TabMore: {screen: TabMore},
    Search:{screen:Search},
    Cdetail:{screen:Cdetail}
}, {initialRouteName: 'Index'});
export default class Router extends React.Component {
    render() {
        return <NavgationApp/>;
    }
}