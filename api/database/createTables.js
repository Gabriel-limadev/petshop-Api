const ModelTable = require('../routers/providers/ModelTableProviders')

ModelTable
    .sync()
    .then(()=> console.log('Table Create'))
    .catch(console.log)