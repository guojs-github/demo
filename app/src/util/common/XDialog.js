/**
 * Dialog
 * 2018.5.3 GuoJS
 */
import {
	Alert,
} from 'react-native';

export default {
	info: function(content, title="提示") {
		console.log("Show information.");
	   
		Alert.alert(title, content);
   },
};
 
