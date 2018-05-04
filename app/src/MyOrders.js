/**
 * My orders page
 * 2018.4.23 GuoJS
 */

 import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
} from 'react-native';
import XButton from './util/XButton';
import XMenu from './util/XMenu';
import XNavBar from './util/XNavBar';

export default class MyOrders extends React.Component{
	constructor(props){
		super(props);
		this.state = {};		
		this.onLayout = this.onLayout.bind(this);
		this.onClickList = this.onClickList.bind(this);
	}

	onLayout() {
		console.log("On my orders layout.");
		this.forceUpdate();
	}
	
	onClickList(){
		console.log("Open my orders list.");
		this.props.navigation.navigate('MyOrdersList');
	}		
	
	render(){
		return (
			<View onLayout={ this.onLayout }>
				<XNavBar
					style = {{ fontSize: 18, }}
					title="我的订单"
				/>
				<ScrollView contentContainerStyle={ styles.container }>
					<XMenu 
						title="全部"
						arrow={ require('../img/arrow-right.png') } 						
						onClick = { this.onClickList }
					/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
//		flex: 1, // 这个会让页面局限于只显示一屏
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: null, // 背景色透明
		paddingTop: 60,
	},
});
