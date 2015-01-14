export default class Controller {
    constructor(router, baseUrl = '') {
        this.router = router
        this.baseUrl = '/' + baseUrl.trimBoth('/')
    }

    get(relativeUrl, handler, name = null) {
        this.route('GET', this.url(relativeUrl), handler)
    }

    post(relativeUrl, handler, name = null) {
        this.route('POST', this.url(relativeUrl), handler)
    }

    delete(relativeUrl, handler, name = null) {
        this.route('DELETE', this.url(relativeUrl), handler)
    }

    patch(relativeUrl, handler, name = null) {
        this.route('PATCH', this.url(relativeUrl), handler)
    }

    put(relativeUrl, handler, name = null) {
        this.route('PUT', name, this.url(relativeUrl), handler)
    }

    route(method, path, handler, name = null) {
        var route = {
            method,
            path,
            config: {
                handler
            }
        }

        if (name)
            route.config.id = name

        this.router.route(route)
    }

    url(relativeUrl) {
        return this.baseUrl + ('/' + relativeUrl).trimBoth('/')
    }
}