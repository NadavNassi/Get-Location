const express = require('express')

const locationService = require('./services/location.service')

const app = express()

app.get('/:ip', (req, res) => {
    const {ip} = req.params
    const location = locationService.getLocation(ip)
    res.send(location)
})

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
})