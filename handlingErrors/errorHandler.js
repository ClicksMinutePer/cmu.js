handlers = require('./handles/main.js')

class handleError {
    constructor(client) {
        this.client = client
        this.Handlers = []
        handlers.setup(this)
    }
    handles(this, exception, ignoreNonExceptions=false) {
        
    }

    async onCommandError(this,context,error) {
        try {
            this.Handlers.forEach((handles, handler) => {
                if((!error instanceof handles) || (typeof error === type ) || (typeof handles === 'function' && error === handles) || (typeof handles === object && error in handles)) {
                    console.log(handles + error);
                }
            });
            continue_handling = False

            function _next(_error=error) {
                
            }
        } catch {
            
        }
    }
}

module.exports = handleError;
