/**
 * Menu control
 * 2018.5.4 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
} from 'react-native';
import XRoutines from './common/XRoutines.js';

export default class XMenu extends React.Component {
	constructor(props){
		super(props);

		// customized style
		var customizedStyle;
		if ("object" == typeof(props.style))
			customizedStyle = props.style;
		else
			customizedStyle = {};
		
		// Update
		this.state = {
			arrow: props.arrow,
			customizedStyle: customizedStyle,
		};
		
		// Event
		this.onClick = this.onClick.bind(this);
	}
		
	onClick() {
		console.log("On XMenu click");
		if ("function" == typeof(this.props.onClick))
			this.props.onClick();
	}

	render(){
		// Get window size
		var screen = XRoutines.screen();
		
		// Width
		var width = screen.width;

		// Height
		var height = 40;

		// Specified style
		var style = {
			width: width,
			height: height,
		};
		
		var title = "未命名";
		if (("string" == typeof(this.props.title)) && (0 < this.props.title.trim().length))
			title = this.props.title;

		return (
			< TouchableHighlight 				
				underlayColor='lightgrey'
				onPress={ this.onClick }
			> 
				<View style={[styles.container, style, this.state.customizedStyle]}>
					<Text style={ styles.text }>{ title }</Text>
					<Image style={ styles.arrow } source={ this.state.arrow } />
				</View>
			</TouchableHighlight>		
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
		borderStyle: 'solid',
		borderBottomWidth: 1, 
		borderTopWidth: 1, 
		borderColor: 'lightgray',
		paddingLeft: 10,
		paddingRight: 10,
	},
	arrow: {
		resizeMode: "contain",
		width: 18,
		height: 18,
	},
	text: {
		fontSize: 14,
	},
});


