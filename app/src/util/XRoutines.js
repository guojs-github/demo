/**
 * Routines
 * 2018.4.28 GuoJS
 */

 import {
	Dimensions,
} from 'react-native';

export default {
   screen: function() {
	   console.log("Get screen information.");
		// Get window size
		var screen = Dimensions.get('window'); 
		console.log("Screen:" + JSON.stringify(screen));
		
		return screen;
   },
   formatTimeString2: function(date) {
		console.log("Format date to string 'yyyyMMddhhmmss'.");

		const year = date.getFullYear()
		const month = date.getMonth() + 1
		const day = date.getDate()
		const hour = date.getHours()
		const minute = date.getMinutes()
		const second = date.getSeconds()
		const ms = date.getMilliseconds()

		return [year, month, day, hour, minute, second, ms].join('');	   
   }
};
 
