const {lookup} = require('geoip-lite')

function getLocation(userIp){
    const location = lookup(userIp)
    return location
}

module.exports = {
    getLocation
}