import ApiController from './ApiController'
import Term from '../../models/Term'
import TestApi from '../../models/TestApi'
import Lazy from 'lazy.js'
    
var mock = [new Term(1, 'FMO', 'Field Marketing Organization'),
               new Term(2, 'CMS', 'Center for Medicare and Medicaid Services'),
               new Term(3,  'NIPR', 'National Insurance Producer Registry'),
               new Term(4,  'NPN', 'National Producer Number'),
               new Term(5,  'NAIC', 'National Association of Insurance Commissioners')]
mock[0].testApi = new TestApi(3, 100, 'string', -5.5)    

export default class TermApiController extends ApiController {
	constructor(router) {
		super(router, '/terms')
		this.get('/', this.all)
		this.get('/{id}', this.byId)
	}

	all(request, reply) {
        var siren = super.siren(mock)
		reply(siren)
	}

	byId(request, reply) {
		var id = request.params.id
        var term = Lazy(mock).filter(e=>e.id == id).first() 
        var siren = super.siren(term)
		reply(siren)
	}

}

