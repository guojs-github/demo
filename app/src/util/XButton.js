/**
 * Button control
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	View,
	Button,
} from 'react-native';
import XRoutines from './XRoutines.js';

export default class XButton extends React.Component {
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
			customizedStyle: customizedStyle,
		};
		
		// Event
		this.onClick = this.onClick.bind(this);
		this.onLayout = this.onLayout.bind(this);
	}
	
	onLayout() {
		console.log("On XButton layout.");

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
		
		// Update
		this.setState({
			width: width,
		});
	}
	
	onClick() {
		console.log("On XButton click");
		if ("function" == typeof(this.props.onClick))
			this.props.onClick();
	}

	render(){
		
		// Specified style
		var style = {
			width: this.state.width,
		};
		
		var title = "未命名";
		if (("string" == typeof(this.props.title)) && (0 < this.props.title.trim().length))
			title = this.props.title;

		var color = "blue";
		if (("string" == typeof(this.props.color)) && (0 < this.props.color.trim().length))
			color = this.props.color;

		return (
			<View style={ [ style, this.state.customizedStyle ] } onLayout={ () => this.onLayout() }>
				<Button
					onPress={ () => this.onClick() }
					title={ title }
					color={ color }
				/>
			</View>
		);
	}
}

