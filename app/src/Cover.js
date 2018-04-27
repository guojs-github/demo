/**
 * Application cover page
 * 2018.4.19 GuoJS
 */

import React from 'react';
import {
	Platform,
	StyleSheet,
	View,
	Text,
} from 'react-native';
import XImage from './util/XImage';

export default class Cover extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			duration: "number" == typeof(props.duration) ? props.duration: 3000,
		};
	}
  
	componentDidMount() {
		console.log("Cover duration:" + this.state.duration);
		setTimeout(
			() => this.timeIsUp(),
			this.state.duration,
		);
	}

	timeIsUp() {
		console.log("Cover time is up");
		if ("function" == typeof(this.props.onCoverTimeIsUp))
			this.props.onCoverTimeIsUp();
	}
	
	render(){
		// console.warn("警告输出测试.....");
		// console.error("错误输出测试");
		return (
			<View style={ styles.container }>
				<XImage style={{ marginTop: -100,}} width={ 0.6 } height={ 0.4 } source={ require('../img/logo.png') } />
				<Text style={styles.welcome}>
					React Native演示!
				</Text>
				<Text style={styles.instructions}>
					作为起步，编辑App.js
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
			</View>
		);
	}
}

// 不同的操作系统显示不同的文字
const instructions = Platform.select({
	ios: '欢迎使用React Native iOS',
	android: '欢迎使用React Native Android',
});

// 创建一组样式？！
const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});



