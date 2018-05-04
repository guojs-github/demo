/**
 * Me page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class MeScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<View>
				<Text>我的</Text>
			</View>
		);
	}
}

const RouteConfig = {
	Me: {
		screen: MeScreen,
		navigationOptions: { // 此处覆盖统一样式设置
			title: "我的信息",
		},
	},
};

const NavigationConfig = {
	initialRouteName: 'Me', // 指定首先显示的屏幕
	navigationOptions: { // 导航栏统一样式设置
		// header: null, // 将隐藏标题
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

const RootStack = StackNavigator(RouteConfig, NavigationConfig);// 建立一个故事模板

export default class Me extends React.Component {
	render() {
		return <RootStack />;
	}
}
