/**
 * Geo location
 * 2018.5.6 GuoJS
 */

export default {
	position: function(success, fail) {
		console.log("Get current position.");

		const p = new Promise(function(resolve, reject) {			
			const Geolocation = require('Geolocation');
			Geolocation.getCurrentPosition(
				location => {
					var result = {
						speed: location.coords.speed, // 速度
						lng: location.coords.longitude, // 经度
						lat: location.coords.latitude, // 纬度
						accuracy: location.coords.accuracy, // 数据精度
						heading: location.coords.heading, // 方向
						alti: location.coords.altitude, // 海拔
						altiAccuracy: location.coords.altitudeAccuracy, // 海拔精度
						timestamp: location.timestamp, // 时间戳
					};
					console.log("Get location success." + JSON.stringify(result));
					
					resolve(result);
				},
				error => {
					console.log("Get location fail." + JSON.stringify(error));

					reject(JSON.stringify(error));
				},
				{
					timeout: 3000, // ms, 操作过程的时长
					maximumAge: 1000, // ms, 取得数据的有效时长，0应该是每次都刷新数据
					// enableHighAccuracy: true, //是否高精度，可能会耗时
				}
			);
		});
		return p;
	},
};
 
