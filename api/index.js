import express from 'express'
import config from 'config';
import { router } from './routers/providers/index.js';

import { NotFound } from './errors/NotFound.js';
import { InvalidField } from './errors/InvalidField.js';
import { NodataProvided } from './errors/NoDataProvided.js';
import { UnsupportedValue } from './errors/UnsupportedValue.js';

const app = express()
app.use(express.json())

// ROUTERS
app.use('/api/providers', router)

// MIDDLER FOR ERRORS
app.use((error, req, res, next)=>{
    let status = 500
    if (error instanceof NotFound){
        status = 404
    } 
    if (error instanceof InvalidField || error instanceof NodataProvided){
        status = 400
    }
    if (error instanceof UnsupportedValue){
        status = 406
    }

    res.status(status)
    res.send(
        JSON.stringify({
            "message": error.message,
            "id": error.idError
        })
    )
})

// PORT
app.listen(config.get('api.port'), ()=>{
    console.log('API está funcionando')
})