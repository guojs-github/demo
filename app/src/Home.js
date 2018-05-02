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
	Image,
	Linking,
} from 'react-native';
import XRoutines from './util/XRoutines.js'
import XSwiperImage from './util/XSwiperImage.js';

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
		this.onSwiperLayout = this.onSwiperLayout.bind(this);
		this.onSwiperTouch = this.onSwiperTouch.bind(this);
	}

	onSwiperLayout() {
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
	
	render(){
		return (
			<ScrollView contentContainerStyle={ styles.container } >
				<View style={{ marginTop: 20, marginLeft: 10, marginRight: 10,}} onLayout={ this.onSwiperLayout }>
					<XSwiperImage 
						pics={ this.state.pics } 
						width={ this.state.swiper.width } 
						height={ this.state.swiper.height }
						onTouch={ this.onSwiperTouch }/>
				</View>
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

