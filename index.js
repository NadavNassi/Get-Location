const express = require('express')

const locationService = require('./services/location.service')

const app = express()

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    console.log("🚀 ~ file: index.js ~ line 9 ~ app.get ~ ip", ip)
    // const {ip} = req.params
    const location = locationService.getLocation(ip)
    res.send(location)
})

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})