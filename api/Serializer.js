import { UnsupportedValue } from './errors/UnsupportedValue.js'

class Serializer{
    json(data){
        return JSON.stringify(data)
    }

    serializer(data){
        if(this.contentType === 'application/json'){
            return this.json(
                this.filter(data)
            )
        }
        throw new UnsupportedValue(this.contentType)
    }
    objectfilter(data){
        const newData = {}

        this.publicfields.forEach(field => {
            if(data.hasOwnProperty(field)){
                newData[field] = data[field]
            }
        });
        return newData
    }

    filter(data){
        if(Array.isArray(data)){
            data = data.map(field => {
                return this.objectfilter(field)
            })
        }else{
            data = this.objectfilter(data)
        }
        return data
    }
}



class ProviderSerializer extends Serializer{
    constructor (contentType){
        super()
        this.contentType = contentType
        this.publicfields = [
            'id', 
            'company', 
            'categorie'
        ]

    }
}

export const serializer = {
    Serializer: Serializer,
    ProviderSerializer: ProviderSerializer,
    acceptFormat: ['application/json']
}