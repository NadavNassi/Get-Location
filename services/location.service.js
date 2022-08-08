const {lookup} = require('geoip-lite')

function getLocation(userIp){
    console.log("🚀 ~ file: location.service.js ~ line 4 ~ getLocation ~ userIp", userIp)
    const location = lookup(userIp)
    console.log("🚀 ~ file: location.service.js ~ line 6 ~ getLocation ~ userIp", userIp)
    return location
}

module.exports = {
    getLocation
}