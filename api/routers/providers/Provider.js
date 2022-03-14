const TableProvider = require('./TableProvider')
class Provider{
    constructor({ id, company, email, categorie, dateCreate, dateUpdate, version}){
        this.id = id
        this.company = company
        this.email = email
        this.categorie = categorie
        this.dateCreate = dateCreate
        this.dateUpdate = dateUpdate
        this.version = version
    }
    async create(){
        this.validate()
        const result = await TableProvider.insert({
            "company": this.company,
            "email": this.email,
            "categorie": this.categorie
        })

        this.id = result.id
        this.dateCreate = result.dateCreate
        this.dateUpdate = result.dateUpdate
        this.version = result.version
    }

    async load(){
        const foundProvider = await TableProvider.getById(this.id)
        this.company = foundProvider.company
        this.email = foundProvider.email
        this.categorie = foundProvider.categorie
        this.dateCreate = foundProvider.dateCreate
        this.dateUpdate = foundProvider.dateUpdate
        this.version = foundProvider.version
    }
    async update(){
        await TableProvider.getById(this.id)
        const fields = ['company', 'email', 'categorie']
        const dataforupdate = {}

        fields.forEach((field) => {
            const value = this[field]
            if (typeof value === 'string' && value.length>0){
                dataforupdate[field] = value
            }
        })
        if (Object.keys(dataforupdate).length === 0){
            throw new Error('No data provided to update')
        }

        await TableProvider.update(this.id, dataforupdate)
    }

    delete(){
        return TableProvider.delete(this.id)
    }

    validate(){
        const fields = ['company', 'email', 'categoire']
        fields.forEach((field)=>{
            const value = this[field]
            if (typeof value !== 'string' || value.length === 0){
                throw new Error(`The field ${field} is invalid!`)
            }
        })
    }
}

module.exports = Provider