const express = require('express')

const locationService = require('./services/location.service')

const app = express()

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    const location = locationService.getLocation(ip)
    console.log("🚀 ~ file: index.js ~ line 10 ~ app.get ~ location", location)
    res.send(JSON.stringify(location))
})

const port = process.env.NODE_ENV || 3030

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})