/**
 * Home page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Linking,
	Alert,
} from 'react-native';
import XRoutines from './util/common/XRoutines.js'
import XRequest from './util/common/XRequest.js';
import XSwiperImage from './util/XSwiperImage';
import XButton from './util/XButton';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pics: [
				{ source: require('../img/sample.jpg'), url: "http://www.baidu.com" },
				{ source: require('../img/sample.jpg'), url: "http://news.sina.com.cn"},
			],
			swiper: {
				width: 100,
				height: 250,
			}
		};
		this.onLayout = this.onLayout.bind(this);
		this.onSwiperTouch = this.onSwiperTouch.bind(this);
		this.onClickSendGetRequest = this.onClickSendGetRequest.bind(this);
		this.onClickSendPostRequest = this.onClickSendPostRequest.bind(this);
	}

	onLayout() {
		console.log("On home page swiper layout.");

		// Get window size
		var screen = XRoutines.screen(); 

		// width
		var width = screen.width - 10 - 10;
		// height
		var height = 250;
		
		// Update
		this.setState({
			swiper: {
				width: width,
				height: height,
			},
		});
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
				Alert.alert(
					"Success",
					"Get data:" + data
				);
			},
			function(message) {
				console.log("Send get request fail.");
				console.log("message:" + message);
				Alert.alert(
					"Fail",
					"Message:" + message
				);
			}
		);
	}

	onClickSendPostRequest(e) {
		console.log("On click send post request.");
		
		XRequest.post("https://www.mdero.com/esplatform/restlet/wxapprs/pay/closeOrder").then(
			function(data) {
				console.log("Send post request success.");
				console.log("data:" + data);
				Alert.alert(
					"Success",
					"Get data:" + data
				);
			},
			function(message) {
				console.log("Send post request fail.");
				console.log("message:" + message);
				Alert.alert(
					"Fail",
					"Message:" + message
				);
			}
		);
	}
	
	render(){
		return (
			<ScrollView contentContainerStyle={ styles.container } onLayout={ this.onLayout }>
				<XSwiperImage 
					style={{marginTop: 10}}
					pics={ this.state.pics } 
					width={ this.state.swiper.width } 
					height={ this.state.swiper.height }
					onTouch={ this.onSwiperTouch }/>
				<XButton
					style={{marginTop: 10}}
					title="Send get request"
					color="#FF5500"
					width={ .9 }
					onClick = { this.onClickSendGetRequest }
				/>
				<XButton
					style={{marginTop: 10}}
					title="Send post request"
					color="#FF5500"
					width={ .9 }
					onClick = { this.onClickSendPostRequest }
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
//		flex: 1, // 这个会让页面局限于只显示一屏
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});

