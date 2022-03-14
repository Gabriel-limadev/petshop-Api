const Model = require('./ModelTableProviders')
module.exports = {
    list () {
        return Model.findAll()
    }
}