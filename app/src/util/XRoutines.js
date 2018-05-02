/**
 * Routines
 * 2018.4.28 GuoJS
 */

 import {
	Dimensions,
} from 'react-native';

export default {
   screen: function() {
		// Get window size
		var screen = Dimensions.get('window'); 
		console.log("Screen:" + JSON.stringify(screen));
		
		return screen;
   }
};
 
