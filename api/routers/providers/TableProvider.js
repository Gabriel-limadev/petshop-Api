import { Model } from './ModelTableProviders.js'
import { NotFound } from '../../errors/NotFound.js'

export const tableProvider = {
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
            throw new NotFound()
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