/**
 * Login page
 * 2018.4.20 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import XImage from './util/XImage';
import XButton from './util/XButton';
import XNavBar from './util/XNavBar';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.onLogin = this.onLogin.bind(this);
	}
	
	onLogin(e) {
		console.log("On login");
		if ("function" == typeof(this.props.onSuccess))
			this.props.onSuccess();
	}

	render(){
		return (
			<View style={ styles.container }>
				<XNavBar
					style = {{ fontSize: 18, }}
					title="React Native演示"
				/>
				<XImage 
					style = {{ marginTop: 60, }}
					width={ 100 } 
					height={ 100 } 
					round={ true }
					source={ require('../img/user-avatar.gif') } 
				/>
				<XButton
					style={ { marginTop: 10}}
					title="登 录"
					color="#FF5500"
					width={ .9 }
					onClick = { this.onLogin }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
