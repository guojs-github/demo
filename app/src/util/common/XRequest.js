/**
 * Ajax request
 * 2018.5.3 GuoJS
 */

const defaultTimeout = 3000;

export default {
	request: function(url, option, timeout=defaultTimeout) {
		console.log("Send a request.");

		const p = new Promise(function(resolve, reject) {
			if (("string" != typeof(url)) || (0 >= url.trim().length)) {
				reject("Invalid request url.");
				return;
			}

			if ("object" != typeof(option)) {
				reject("Invalid request option.");
				return;
			}
			console.log("option:" + JSON.stringify(option));
			
			fetch(
				url,
				option
			).then(res => {
				console.log("res:" + JSON.stringify(res));			
				return res.text();
			}).then( text => {
				console.log("text:" + text);
				resolve(text);
			}).catch( error => {
				console.log("error:" + JSON.stringify(error));
				reject(JSON.stringify(error))
			});
		});
		
		const timeoutPromise = new Promise(function(resolve, reject) {
			timeoutAction = () => {
				console.log("Get request time out.");
				reject("请求超时");
			}
		});
		
		setTimeout(() => {timeoutAction();}, timeout);
		
		return Promise.race([p, timeoutPromise]);	   
	},
	
	get: function(url, timeout=defaultTimeout) {
		console.log("Send a get request.");
		
		return this.request(url, { method: "GET" },  timeout);
   },
   
   post: function(url, params, timeout=defaultTimeout) {
		console.log("Send a post request.");
		
		var paramList;
		if ("undefined" != typeof(params))
			paramList = params;
		else
			paramList = "{}";
		
		return this.request(url, { method: "POST",  body: paramList, headers: { 'Content-Type': 'application/json' }, },  timeout);
   }
};
 
