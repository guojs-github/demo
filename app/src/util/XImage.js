/**
 * Image control
 * 2018.4.20 GuoJS
 */

import React from 'react';
import {
	Text,
	Image,
} from 'react-native';
import XRoutines from './XRoutines.js'

export default class XImage extends React.Component {
	constructor(props){
		super(props);
				
		// Resize mode
		var resizeMode;
		if (("string" == typeof(props.resizeMode)) && (0 < props.resizeMode.trim().length))
			resizeMode = props.resizeMode;
		else
			resizeMode = 'contain'; // contain, cover,stretch, center
		
		var customizedStyle;
		if ("object" == typeof(props.style))
			customizedStyle = props.style;
		else
			customizedStyle = {};
		
		var round;
		if ("boolean" == typeof(props.round)) 
			round = props.round;
		else
			round = false;
		
		this.state = {
			source: props.source,
			resizeMode: resizeMode,
			customizedStyle: customizedStyle,
			round: round,
		};
	}

	render(){		
		// Get window size
		var screen = XRoutines.screen(); 
		
		// Width
		var width;
		if ("number" == typeof(this.props.width)) {
			if (1 < this.props.width)
				width = this.props.width;
			else if ((0 < this.props.width) || (1 > this.props.width))
				width = screen.width * this.props.width;
			else 
				width = 100;
		} else 
			width = 100;

		// Height
		var height;
		if ("number" == typeof(this.props.height)) {
			if (1 <= this.props.height)
				height = this.props.height;
			else if ((0 < this.props.height) || (1 > this.props.height))
				height = screen.height * this.props.height;
			else 
				height = 100;
		} else 
			height = 100;
		
		var borderRadius = 0;
		if (this.props.round) 
			borderRadius = width >= height? width/2: height/2;

		// Specified style
		var style = {
			width: width,
			height: height,
			resizeMode: this.state.resizeMode,
			borderRadius: borderRadius,
		};

		return (
			<Image 
				style={ [ style, this.state.customizedStyle ] } 
				source={ this.state.source } 
			/>
		);
	}
}

