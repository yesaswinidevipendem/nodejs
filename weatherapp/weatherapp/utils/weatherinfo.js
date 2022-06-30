// Include request Module

var nd=require('needle')
exports.getWeatherInfo=function(location,callbackfunc){
	var url="http://api.weatherstack.com/current?access_key=fe7b519da41639a4a4ba490e61457846&query="+location
	nd.get(url, (err, response, body)=>{
		if(err)
		callbackfunc(err, null)
	else
		callbackfunc(null, body.current.temperature)
	})
}

/* Call request function by sending url
 		Implement following steps in the callback request function:
 			Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
 			Step 2 : otherwise call callbackfunc with null and response.body.current.temperature.
*/


 
//After request function, Store getWeatherInfo function into module.exports.getWeatherInfo


