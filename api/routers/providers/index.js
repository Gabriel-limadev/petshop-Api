import { Router } from 'express';
import { Provider } from './Provider.js';
import { tableProvider } from './TableProvider.js';
import { serializer } from '../../Serializer.js';

const router = Router()
// LIST ALL PROVIDERS
router.get('/', async (req, res)=>{
    const results = await tableProvider.list()
    res.status(200)
    const ProSerializer = new serializer.ProviderSerializer(
        res.getHeader('Content-Type')
    )
    res.send(
        ProSerializer.serializer(results)
    )
})

// DETAIL PROVIDER
router.get('/:idProvider', async (req, res, next)=>{
    try{
        const id = req.params.idProvider
        const provider = new Provider({ id: id })
        await provider.load()
        res.status(200)
        const ProSerializer = new serializer.ProviderSerializer(
            res.getHeader('Content-Type'), 
            ['email', 'dateCreate', 'dateUpdate', 'version']
        )
        res.send(
            ProSerializer.serializer(provider)
        )
    }catch(error){
        next(error)
    }
})

// CREATE NEW PROVIDER
router.post('/', async (req, res, next) => {
    try{
        const receivedData = req.body
        const provider = new Provider(receivedData)
        await provider.create()
        res.status(201)
        const ProSerializer = new serializer.ProviderSerializer(
            res.getHeader('Content-Type')
        )
        res.send(
            ProSerializer.serializer(provider)
        )
    }catch(error){
        next(error)
    }
})

// UPDATE A PROVIDER
router.put('/:idProvider', async (req, res, next) => {
    try{
        const id = req.params.idProvider
        const receivedData = req.body
        // Overwriting previous data
        const data = Object.assign({}, receivedData, {"id": id})
        const provider = new Provider(data)
        await provider.update()
        res.status(204)
        res.end()
    }catch(error){
        next(error)
    }
})

// DELETE A PROVIDER
router.delete('/:idProvider', async (req, res, next) => {
    try{
        const id = req.params.idProvider
        const provider = new Provider({"id": id})
        await provider.load()
        await provider.delete()
        res.status(204)
        res.end()

    }catch(error){
        next(error)
    }
})

export { router };