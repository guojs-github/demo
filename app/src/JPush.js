/**
 * JPush测试
 * 2018.5.11 GuoJS
 */

import React from 'react';
import {
	NativeModules,
	StyleSheet,
	ScrollView,
	View,
	Text,
} from 'react-native';
import JPushModule from 'jpush-react-native';
import XRoutines from './util/common/XRoutines.js'
import XButton from './util/XButton';

export default class JPush extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			message: "等待消息...",
		};
	}
	
	componentDidMount() {
		var _this = this;
		JPushModule.notifyJSDidLoad((resultCode) => {
            if (resultCode === 0) {
				_this.setState(
					(prevState, props) => ({
						message: prevState.message + "\nJS did load",
					})
				);
            }
        });		

		JPushModule.addReceiveCustomMsgListener((message) => {
            console.log("Custom message:" + message);
			_this.setState(
				(prevState, props) => ({
					message: prevState.message + "\n【custom message】" + message,
				})
			);
        });

		NativeModules.demoObject.rid((value) => {
			console.log("Registration id:" + value);
			_this.setState(
				(prevState, props) => ({
					message: prevState.message + "\n【Registration id】" + value,
				})
			);
		});		

		JPushModule.addReceiveNotificationListener((map) => {
			console.log("notification received:" + JSON.stringify(map))
			_this.setState(
				(prevState, props) => ({
					message: prevState.message + "\n【notification received】" + JSON.stringify(map),
				})
			);
		});		
		
		JPushModule.addReceiveOpenNotificationListener((map) => {
            console.log("Open notification:" + JSON.stringify(map));
			_this.setState(
				(prevState, props) => ({
					message: prevState.message + "\n【Open notification】\n" + JSON.stringify(map),
				})
			);
        });				
    }
	
	render(){
		// Get window size
		var screen = XRoutines.screen(); 

		// button size
		var buttonWidth = screen.width - 10 - 10;

		return (
			<View>
				<ScrollView contentContainerStyle={ styles.container }>
					<Text style={[styles.seperator]}>{ this.state.message }</Text>
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
		paddingBottom: 10,
	},
	seperator: {
		marginTop: 10,
	},
});
