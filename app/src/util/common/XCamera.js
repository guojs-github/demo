/**
 * Camera & Albumn
 * 2018.5.7 GuoJS
 */
import ImagePicker from 'react-native-image-picker';

export default {
	choose: function(success, fail) {
		console.log("Select photos.");

		const p = new Promise(function(resolve, reject) {				
			const photoOptions = {
				title:'请选择',
				quality: 0.8,
				cancelButtonTitle:'取消',
				takePhotoButtonTitle:'拍照',
				chooseFromLibraryButtonTitle:'选择相册',
				allowsEditing: true,
				noData: false,
				storageOptions: {
					skipBackup: true,
					path: 'images'
				}
			};

			ImagePicker.showImagePicker(photoOptions, (response) => {
				console.log('Response = ', response);
				if (response.didCancel) {
					console.log('User cancelled image picker');
				}
				else if (response.error) {
					console.log('ImagePicker Error: ', response.error);
					reject(JSON.stringify(response.error));
				}
				else if (response.customButton) {
					console.log('User tapped custom button: ', response.customButton);
				}
				else {
					let source = { uri: response.uri };
					resolve(source);
				}
			});		
		});
		return p;
	},
};
 
