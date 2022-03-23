import { UnsupportedValue } from './errors/UnsupportedValue.js'
import { json_to_xml } from 'jsontoxml'

class Serializer{
    json(data){
        return JSON.stringify(data)
    }
    xml(data){
        let tag = this.tagSingular
        if(Array.isArray(data)){
            tag = this.tagPlural
            data = data.map((index)=>{
                return {
                    [this.tagSingular]: index
                }
            })
        }
        return json_to_xml({[this.tag]: data})
    }
    serializer(data){
        data = this.filter(data)
        if(this.contentType === 'application/json'){
            return this.json(data)
        }
        if (this.contentType === 'application/xml'){
            return this.xml(data)
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
    constructor (contentType, extrasfields){
        super()
        this.contentType = contentType
        this.publicfields = [
            'id', 
            'company', 
            'categorie'
        ].concat(extrasfields || [])
        this.tagSingular = 'provider'
        this.tagPlural = 'providers'
    }
}

class ErrorsSerializer extends Serializer{
    constructor (contentType, extrasfields) {
        super()
        this.contentType = contentType
        this.publicfields = [
            'id', 
            'message'
        ].concat(extrasfields || [])
        this.tagSingular = 'erro'
        this.tagPlural = 'errors'
    }
}

export const serializer = {
    Serializer: Serializer,
    ProviderSerializer: ProviderSerializer,
    ErrorsSerializer: ErrorsSerializer,
    acceptFormat: ['application/json', 'application/xml']
}