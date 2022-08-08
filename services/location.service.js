const {lookup} = require('geoip-lite')

function getLocation(userIp){
    userIp = userIp.split(' ')[1]
    console.log("🚀 ~ file: location.service.js ~ line 4 ~ getLocation ~ userIp", userIp)
    const location = lookup(userIp)
    console.log("🚀 ~ file: location.service.js ~ line 6 ~ getLocation ~ location", location)
    return location
}

module.exports = {
    getLocation
}