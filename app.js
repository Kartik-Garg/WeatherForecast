const request = require("request")
const geocode = require("./utils/geocode")

//const url = 'http://api.weatherstack.com/current?access_key=775639ff11f70f364fae07e69f990b3f&query=37.8267,-122.4233'

// request({url, json: true},(err, res) => {
//     if(err){
//         console.log('Not able to connect to Weather API!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('It is currently ' + res.body.current.temperature + ' degrees out. It feels like ' +
//     res.body.current.feelslike + ' degrees out.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFuYW5hc2Vuc2VpIiwiYSI6ImNrenI3dGFyOTEyZmwycHBldGN0enMzejIifQ.GOtiONnFx2GeCPcVLScqaA'

// request({url:geocodeURL, json:true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to the location services!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })


geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('data', data)
})