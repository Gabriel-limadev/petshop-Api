import express from 'express';
import config from 'config';
import { router } from './routers/providers/index.js';

import { NotFound } from './errors/NotFound.js';
import { InvalidField } from './errors/InvalidField.js';
import { NodataProvided } from './errors/NoDataProvided.js';
import { UnsupportedValue } from './errors/UnsupportedValue.js';

import { serializer }  from './Serializer.js'

const app = express()
app.use(express.json())

app.use((req, res, next) =>{
    let reqFormat = req.header('Accept')

    if(reqFormat === '*/*'){
        reqFormat = 'application/json'
    }

    if (serializer.acceptFormat.indexOf(reqFormat) === -1){
        res.status(406)
        res.end()
        return 
    }

    res.setHeader('Content-Type', reqFormat)
    next()
})

// ROUTERS
app.use('/api/providers', router)

// MIDDLEWARE FOR ERRORS
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

    const serializers = new serializer.ErrorsSerializer(
        res.getHeader('Content-Type')
    )
    res.status(status)
    res.send(
        serializers.serializer({
            "message": error.message,
            "id": error.idError
        })
    )
})

// PORT
app.listen(config.get('api.port'), ()=>{
    console.log('API está funcionando')
})