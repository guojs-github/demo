/**
 * App entry
 * 2018.4.19 GuoJS
 */
import React from 'react';
import Cover from './app/src/Cover'
import Login from './app/src/Login'
import Main from './app/src/Main'

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page: "COVER",
		};
		this.onCoverTimeIsUp = this.onCoverTimeIsUp.bind(this);
		this.onLoginSuccess = this.onLoginSuccess.bind(this);
	}
	
	onCoverTimeIsUp() {
		console.log("Cover time is up.");
		this.setState({
			page: "LOGIN",
		});
	}

	onLoginSuccess() {
		console.log("User login success.");
		this.setState({
			page: "MAIN",
		});
	}
	
	
	render() {
		if ("COVER" == this.state.page) { // Show cover page
			return(
				<Cover /*duration={ 10000 }*/ onCoverTimeIsUp={this.onCoverTimeIsUp }/>
			);
		}
		if ("LOGIN" == this.state.page) { // Show login page
			return(
				<Login onSuccess={this.onLoginSuccess}/>
			);
		}
		if ("MAIN" == this.state.page) { // Show main page
			return(
				<Main />
			);
		}
	}
}

/*
// 只是一个场景导航样例而已，Stack Navigator
import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
	constructor(props) {
		super(props); 
		this.gotoDetails = this.gotoDetails.bind(this);
	}

	gotoDetails(e) {
		this.props.navigation.replace("Details");
	}

	render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={this.gotoDetails}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
		screen: HomeScreen,
    },
    Details: {
		screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
*/

