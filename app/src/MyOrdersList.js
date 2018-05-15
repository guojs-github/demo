/**
 * My orders list page
 * 2018.5.4 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class MyOrdersList extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<View>
				<Text>我的订单列表</Text>
			</View>
		);
	}
}
