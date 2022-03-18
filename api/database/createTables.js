import ModelTable from './../routers/providers/ModelTableProviders

ModelTable
    .sync()
    .then(()=> console.log('Table Create'))
    .catch(console.log)