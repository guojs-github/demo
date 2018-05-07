/**
 * Home page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Linking,
} from 'react-native';
import XRoutines from './util/common/XRoutines.js'
import XRequest from './util/common/XRequest.js';
import XDialog from './util/common/XDialog.js';
import XSwiperImage from './util/XSwiperImage';
import XButton from './util/XButton';
import XNavBar from './util/XNavBar';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pics: [
				{ source: require('../img/sample.jpg'), url: "http://www.baidu.com" },
				{ source: require('../img/sample.jpg'), url: "http://news.sina.com.cn"},
			],
		};
		this.onLayout = this.onLayout.bind(this);
		this.onSwiperTouch = this.onSwiperTouch.bind(this);
		this.onClickSendGetRequest = this.onClickSendGetRequest.bind(this);
		this.onClickSendPostRequest = this.onClickSendPostRequest.bind(this);
	}

	onLayout() {
		console.log("On home page layout.");
		this.forceUpdate();
	}
	
	onSwiperTouch(index) {
		console.log("On touch home page swiper.");
		console.log("index:" + index);
		
		if ("string" == typeof(this.state.pics[index].url))
			Linking.openURL(this.state.pics[index].url);
	}
	
	onClickSendGetRequest(e) {
		console.log("On click send get request.");
		
		XRequest.get("https://www.mdero.com/esplatform/restlet/wxapprs/info", 10000).then(
			function(data) {
				console.log("Send get request success.");
				console.log("data:" + data);
				XDialog.info("收到信息：" + data);
			},
			function(message) {
				console.log("Send get request fail.");
				console.log("message:" + message);
				XDialog.info("获取信息失败：" + message);
			}
		);
	}

	onClickSendPostRequest(e) {
		console.log("On click send post request.");
		
		XRequest.post("https://www.mdero.com/esplatform/restlet/wxapprs/pay/closeOrder").then(
			function(data) {
				console.log("Send post request success.");
				console.log("data:" + data);
				XDialog.info("收到信息：" + data);
			},
			function(message) {
				console.log("Send post request fail.");
				console.log("message:" + message);
				XDialog.info("获取信息失败：" + message);
			}
		);
	}
	
	render(){
		// Get window size
		var screen = XRoutines.screen(); 

		// swiper size
		var swiperWidth = screen.width - 10 - 10;
		var swiperHeight = 250;
		
		// button size
		var buttonWidth = swiperWidth;
		
		return (
			<View>
				<XNavBar
					style = {{ fontSize: 18, }}
					title="首页"
				/>
				<ScrollView contentContainerStyle={ styles.container } onLayout={ this.onLayout }>
					<XSwiperImage 
						pics={ this.state.pics } 
						width={ swiperWidth } 
						height={ swiperHeight }
						onTouch={ this.onSwiperTouch }/>
					<XButton
						style={{marginTop: 10}}
						title="Send get request"
						color="#FF5500"
						width={ buttonWidth }
						onClick = { this.onClickSendGetRequest }
					/>
					<XButton
						style={{marginTop: 10}}
						title="Send post request"
						color="#FF5500"
						width={ buttonWidth }
						onClick = { this.onClickSendPostRequest }
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
		paddingBottom: 10,
	},
});
