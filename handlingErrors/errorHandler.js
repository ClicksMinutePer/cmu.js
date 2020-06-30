handlers = require('./handles/main.js')

class handleError {
    constructor(client) {
        this.client = client
        this.handlers = []
        handlers.setup(this)
    }
    handles(this, exception, ignoreNonExceptions=false) {
        
    }
}

module.exports = handleError;