export class NodataProvided extends Error{
    constructor(){
        super('No data provided to update!')
        this.name = 'NodataProvided'
        this.idError = 2
    }
}