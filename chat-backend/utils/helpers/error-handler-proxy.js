const errorHandler = require('../../middleware/error-handler')

const proxySettings = {
    get: (target, name) => {
        if(typeof target === 'function') {
            return (...args) => {
                return target[name](...args)
                    .catch(err => errorHandler(err, ...args))
            }
        }
    }
}

module.exports = function withErrorHandler(controller) {
    return new Proxy(controller, proxySettings);
}