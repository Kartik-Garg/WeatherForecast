const request = require("request")

const forecast = (lat, long, callback) => {
    
const url = `http://api.weatherstack.com/current?access_key=775639ff11f70f364fae07e69f990b3f&query=${long},${lat}`
    request({url, json: true},(err, res) => {
        if(err){
            callback('Not able to connect to Weather API!', undefined)
        }
        else if(res.body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, 'It is currently ' + res.body.current.temperature + ' degrees out. It feels like ' +
                    res.body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast