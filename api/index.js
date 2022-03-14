const express = require('express');
const app = express()
const config = require('config');
const router = require('./routers/providers')

app.use(express.json())

// ROUTERS
app.use('/api/providers', router)

// PORT
app.listen(config.get('api.port'), ()=>{
    console.log('API está funcionando')
})