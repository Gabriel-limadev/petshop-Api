const Sequelize = require('sequelize')
const config = require('config')

const instancia = new Sequelize(
    config.get('postgres.database'),
    config.get('postgres.user'),
    config.get('postgres.password'), 
    {
        'host': '127.0.0.1',
        'dialect': 'postgres'
    } 
)

module.exports = instancia;