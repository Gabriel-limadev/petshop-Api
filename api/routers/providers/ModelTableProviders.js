import { Sequelize } from 'sequelize'
import {instancia} from '../../database/index.js'

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

export const Model = instancia.define('provider', columns, options)