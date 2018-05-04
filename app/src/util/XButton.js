/**
 * Button control
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	View,
	Button,
} from 'react-native';
import XRoutines from './common/XRoutines.js';

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
	}
		
	onClick() {
		console.log("On XButton click");
		if ("function" == typeof(this.props.onClick))
			this.props.onClick();
	}

	render(){
		// Get window size
		var screen = XRoutines.screen();
		
		// Width
		var width = 100;
		if ("number" == typeof(this.props.width)) {
			if (1 < this.props.width)
				width = this.props.width;
			else if ((0 < this.props.width) || (1 >= this.props.width))
				width = screen.width * this.props.width;
		} 		
		// Specified style
		var style = {
			width: width,
		};
		
		var title = "未命名";
		if (("string" == typeof(this.props.title)) && (0 < this.props.title.trim().length))
			title = this.props.title;

		var color = "blue";
		if (("string" == typeof(this.props.color)) && (0 < this.props.color.trim().length))
			color = this.props.color;

		return (
			<View style={[style, this.state.customizedStyle]}>
				<Button
					onPress={ () => this.onClick() }
					title={ title }
					color={ color }
				/>
			</View>
		);
	}
}

