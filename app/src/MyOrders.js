/**
 * My orders page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyOrdersListScreen from './MyOrdersList';
import XButton from './util/XButton';

class MyOrdersScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.onClickList = this.onClickList.bind(this);
	}
	
	onClickList(){
		console.log("Open my orders list.");
		this.props.navigation.navigate('MyOrdersList');
	}		
	
	render(){
		return (
			<View>
				<XButton
					style={{marginTop: 10}}
					title="test"
					color="#FF5500"
					width={ .9 }
					onClick = { this.onClickList }
				/>
			</View>
		);
	}
}

const RouteConfig = {
	MyOrders: {
		screen: MyOrdersScreen,
		navigationOptions: { // 此处覆盖统一样式设置
			title: "我的订单",
		},
	},
	MyOrdersList: {
		screen: MyOrdersListScreen,
		navigationOptions: { // 此处覆盖统一样式设置
			title: "我的订单列表",
		},
	},
};

const NavigationConfig = {
	initialRouteName: 'MyOrders', // 指定首先显示的屏幕
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

export default class MyOrders extends React.Component {
	render() {
		return <RootStack />;
	}
}
