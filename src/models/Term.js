import {Get, Post, Put, Patch, Delete} from '../siren/attributes'
import TestApi from './TestApi'
    
@Get('terms/:id')
export default class Term {
    constructor(id=0,term='',definition='',tags=[]) {
        this.id = id
        this.term = term
        this.tags = tags
        this.definition = definition
    }
    
    get id() {return this.id_ = this.id_ || 0 }
    set id(value:number) { this.id_ = value }
    
    get term() { return this.term_ = this.term_ || '' }
    set term(value:string) { this.term_ = value}
    
    get tags() { return this.tags_ = this.tags_ || []}
    set tags(value:Array<string>) { this.tags_ = value}
    
    get definition() { return this.definition_ = this.definition_ || ''}
    set definition(value:string) { this.definition_ = value}
    
    get testApi() { return this.testApi_ = this.testApi_}
    set testApi(value:TestApi) { this.testApi_ = value }
    
    @Post('postUrl')
    postMethod() {
    }
    
    @Put('putUrl')
    putMethod(a) {
    }
    
    @Patch('patchUrl')
    patchMethod(b,c) {
    }
    
    @Delete('deleteUrl') 
    deleteMethod(d,e,f) {
    }
}
