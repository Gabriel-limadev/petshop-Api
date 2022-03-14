const Sequelize = require('sequelize')
const instancia = require('../../database')

const columns = {
    "company": {
        "type": Sequelize.STRING,
        "allowNull": false
    },
    "email": {
        "type": Sequelize.STRING,
        "allowNull": false
    },
    "categorie": {
        "type": Sequelize.ENUM('petFood', 'toys'),
        "allowNull": false
    }
}

const options = {
    'freezeTableName': true,
    'tableName': 'providers',
    'timestamps': true,
    'createdAt': 'dateCreate',
    'updateAt': 'dateUpdate',
    'version': 'version'
}

module.exports = instancia.define('provider', columns, options)