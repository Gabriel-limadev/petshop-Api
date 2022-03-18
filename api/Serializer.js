import { UnsupportedValue } from './errors/UnsupportedValue.js'

export class Serializer{
    json(data){
        return JSON.stringify(data)
    }

    serializer(data){
        if(this.contentType === 'application/json'){
            return this.json(data)
        }
        throw new UnsupportedValue(this.contentType)
    }
}