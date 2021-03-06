/**
 * Navigate bar control
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import XRoutines from './common/XRoutines.js'

export default class XNavBar extends React.Component {
	constructor(props){
		super(props);
				
		// Customized style
		var customizedStyle;
		if ("object" == typeof(props.style))
			customizedStyle = props.style;
		else
			customizedStyle = {};
		
		// Initialize state
		this.state = {
			customizedStyle: customizedStyle,
		};
		
	}
	
	render(){
		// Get window size
		var screen = XRoutines.screen(); 
		
		// Width
		var width = screen.width;
		
		// Height
		var height = 50;
		if ("number" == typeof(this.props.height)) {
			if (1 < this.props.height)
				height = this.props.height;
			else if ((0 < this.props.height) || (1 >= this.props.height))
				height = screen.height * this.props.height;
		} 
			
		// Specified style
		var style = {
			position: 'absolute',
			top: 0,
			zIndex: 1000,
			flexDirection: 'column',
			flex:1, 
			justifyContent: 'center', 
			alignItems: 'center',
			width: width,
			height: height,
			backgroundColor: "white",

			shadowOffset: {width: 0, height: 5},  
			shadowOpacity: 0.5,  
			shadowRadius: 5,  
			shadowColor: "#000000",
			elevation: 4, 		
		};
		
		// Bar Title
		var title = "δ����";
		if (("string" == typeof(this.props.title)) && (0 < this.props.title.trim().length))
			title = this.props.title;

		return (
			<View style={style}>
				<Text style={[styles.title, this.state.customizedStyle]}>
					{ title }
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
	}
});


