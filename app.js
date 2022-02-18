const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

geocode('Boston', (error, data) => {
    if(error){
        return console.log(error)
    }
    forecast(data.longitude, data.latitude, (error, forecastData) => {  
        if(error){
            return console.log(error)
        }
        console.log(data)
        console.log(forecastData)
        })
})

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data:', data)
// })