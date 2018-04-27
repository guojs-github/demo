/**
 * Main page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default class MyOrders extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<View>
				<Text>我的订单</Text>
			</View>
		);
	}
}
