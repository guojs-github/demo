/**
 * Me page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';
import XRoutines from './util/common/XRoutines.js'
import XLocation from './util/common/XLocation.js'
import XMenu from './util/XMenu';
import XNavBar from './util/XNavBar';
import XButton from './util/XButton';
import XImage from './util/XImage';
import XDialog from './util/common/XDialog.js';
import XCamera from './util/common/XCamera.js';

export default class Me extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			photo: require("../img/logo.png"),
		};
		this.onLayout = this.onLayout.bind(this);
		this.onClickGPS = this.onClickGPS.bind(this);
		this.onClickCamera = this.onClickCamera.bind(this);
	}

	onLayout() {
		console.log("On me layout.");
		this.forceUpdate();
	}
	
	onClickGPS() {
		console.log("On click GPS test button.");
		
		XLocation.position().then(
			function(data) {
				XDialog.info("获取定位信息成功。\n" + JSON.stringify(data));
			},
			function(message) {
				XDialog.info("获取定位信息失败。" + message);
			},
		);
	}
	
	onClickCamera() {
		console.log("On click Camera test button.");

		var _this = this;
		XCamera.choose().then(
			function(source) {
				console.log("拍照选择图片成功。\n" + JSON.stringify(source));
				_this.setState({
					photo: source,
				});
			},
			function(message) {
				XDialog.info("拍照选择图片失败。\n" + message);
			},
		);
	}
	
	render(){
		// Get window size
		var screen = XRoutines.screen(); 

		// button size
		var buttonWidth = screen.width - 10 - 10;
		// photo size
		var photoWidth = buttonWidth;

		return (
			<View onLayout={ this.onLayout }>
				<XNavBar
					style = {{ fontSize: 18, }}
					title="我的信息"
				/>
				<ScrollView contentContainerStyle={ styles.container }>
					<XButton
						title="GPS测试"
						color="#FF5500"
						width={ buttonWidth }
						onClick = { this.onClickGPS }
					/>
					<TouchableHighlight 				
						underlayColor='lightgrey'
						onPress={ this.onClickCamera }
					> 
						<XImage 
							style={[styles.seperator]}
							width={ photoWidth } 
							height={ 300 } 
							source={ this.state.photo } 
							onClick={ this.onClickCamera }
						/>
					</TouchableHighlight>
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
	seperator: {
		marginTop: 10,
	}
});
