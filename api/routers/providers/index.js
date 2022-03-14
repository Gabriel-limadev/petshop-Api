const router = require('express').Router()
const Tableprovider = require('./TableProvider');
const Provider = require('./Provider');


// LIST ALL PROVIDERS
router.get('/', async (request, response)=>{
    const results = await Tableprovider.list()
    response.status(200)
    response.send(
        JSON.stringify(results)
    )
})

// DETAIL PROVIDER
router.get('/:idProvider', async (request, response)=>{
    try{
        const id = request.params.idProvider
        const provider = new Provider({ id: id })
        await provider.load()
        response.status(200)
        response.send(
            JSON.stringify(provider)
        )
    }catch(error){
        response.status(400)
        response.send(
            JSON.stringify({
                "message": error.message
            })
        )
    }
})

// CREATE NEW PROVIDER
router.post('/', async (request, response) => {
    try{
        const receivedData = request.body
        const provider = new Provider(receivedData)
        await provider.create()
        response.status(201)
        response.send(
            JSON.stringify(provider)
        )
    }catch(error){
        response.status(400)
        response.send(
            JSON.stringify({
                "message": error.message
            })
        )
    }
})

// UPDATE A PROVIDER
router.put('/:idProvider', async (request, response) => {
    try{
        const id = request.params.idProvider
        const receivedData = request.body
        const data = Object.assign({}, receivedData, {"id": id})
        const provider = new Provider(data)
        await provider.update()
        response.status(204)
        response.end()
    }catch(error){
        response.status(400)
        response.send(
            JSON.stringify({
                "message": error.message
            })
        )
    }
})

// DELETE A PROVIDER
router.delete('/:idProvider', async (request, response) => {
    try{
        const id = request.params.idProvider
        const provider = new Provider({"id": id})
        await provider.load()
        await provider.delete()
        response.status(204)
        response.end()

    }catch(error){
        response.status(404)
        response.send(
            JSON.stringify({
                "message": error.message
            })
        )
    }
})

module.exports = router