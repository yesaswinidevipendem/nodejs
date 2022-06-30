var nd=require('needle')
// Include request Module
exports.geoloc=function(townvalue,callbackfunc){
        var url = "http://api.weatherstack.com/current?access_key=fe7b519da41639a4a4ba490e61457846&query="+townvalue
        nd.get(url, (err,response, body)=>{
                if(err)
                        callbackfunc(err, null)
                else 
                        var jsonobj={"longitude":body.location.lon, "latiitude":body.location.lat}
                        callbackfunc(null,jsonobj)
 })

/* Call request function by sending url and json option with true(See the syntax of request function).
 Implement following steps in the callback request function
 Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
 Step 2 : otherwise if response.body.features.length is 0, then call callbackfunc with error description as 'Error:Invalid Location' and null
 Step 3 : otherwise call callbackfunc with null and json as longitude with value of response.body.features[0].center[0] and latitude with 
        value of response.body.features[0].center[1]
*/

}

//After request function, Store geoloc function into module.exports.geoloc
