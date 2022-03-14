const router = require('express').Router()
const Tableprovider = require('./TableProvider');

router.use('/', async (requisicao, resposta)=>{
    const results = await Tableprovider.list()
    resposta.send(
        JSON.stringify(results)
    )
})

module.exports = router