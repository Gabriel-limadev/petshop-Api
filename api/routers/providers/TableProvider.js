const Model = require('./ModelTableProviders')
module.exports = {
    list () {
        return Model.findAll()
    },
    insert(provider){
        return Model.create(provider)
    },
    async getById(id){
        const foundProvider = await Model.findOne({
            "where": {
                "id": id
            }
        })

        if(!foundProvider){
            throw new Error('Provider not found')
        }
        return foundProvider
    },
    update(id, dataforupdate){
        return Model.update(
            dataforupdate,
            {
                where : {"id": id}
            }
        )
    },
    delete(id){
        return Model.destroy(
            {
                where : {"id": id}
            }
        )
    }
}