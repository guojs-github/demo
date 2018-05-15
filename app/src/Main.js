/**
 * Main page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import {
	StackNavigator,
	TabNavigator,
	TabBarBottom
} from 'react-navigation';
import Home from './Home'
import MyOrders from './MyOrders'
import Me from './Me'
import MyOrdersList from './MyOrdersList'
import JPush from './JPush'

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<Stack/>
		);
	}
}

const TabRouteConfig = {
	Home: {
		screen: Home,
		navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../img/home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
	},
	MyOrders: {
		screen: MyOrders,
		navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../img/my-orders.png')}
                    style={[styles.tabIcon, {tintColor: tintColor}]}/>
            ),
        },
	},
	Me: {
		screen: Me,
		navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('../img/me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
        },
	},
}

const TabNavigatorConfig = {
    initialRouteName: 'Home', // 初始化显示的页面
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
	animationEnabled: true, // 切换页面时是否有动画效果
	swipeEnabled: true, // 是否允许滑动切换tab页面的效果
	// backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
	tabBarOptions: {
		activeTintColor: '#ff8500', // 文字和图片选中颜色
		inactiveTintColor: 'gray', // 文字和图片未选中颜色
		showIcon: true, // 是否显示图标
		showLabel: true, // 是否显示文字
		indicatorStyle: {
			height: 0, // Tabar显示上分割线高度，设置为0则隐藏
		},
		style: {
			backgroundColor: '#fff', // TabBar 背景色
             // height: 44
        },
        labelStyle: {
              fontSize: 12, // 文字大小
        },
	},
};

const Tab = TabNavigator(TabRouteConfig, TabNavigatorConfig);

const styles = StyleSheet.create({
	tabIcon: {
		height: 27,
		width: 24
	},
});

const StackRouteConfig = {
	Main: {
		screen: Tab,
		navigationOptions: { // 此处覆盖统一样式设置
			header: null, // 隐藏标题
		},
	},
	MyOrdersList: {
		screen: MyOrdersList,
		navigationOptions: { // 此处覆盖统一样式设置
			title: "我的订单列表",
		},
	},
	JPush: {
		screen: JPush,
		navigationOptions: { // 此处覆盖统一样式设置
			title: "极光消息推送",
		},
	},
};

const StackNavigationConfig = {
	initialRouteName: 'Main', // 指定首先显示的屏幕
	navigationOptions: { // 导航栏统一样式设置
		headerStyle: {
			backgroundColor: "white",
			height: 50,
		},
		headerTitleStyle: {
			color: "gray",
			fontSize: 18,
		}
	},
	headerMode: 'screen', 
};

const Stack = StackNavigator(StackRouteConfig, StackNavigationConfig);// 建立一个故事模板
