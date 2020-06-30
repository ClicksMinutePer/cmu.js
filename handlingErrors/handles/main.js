CompleteHandler = require('./CompleteHandler.js')
ArgumentErrors = require('./ArgumentErrors.js')
CooldownErrors = require('./CooldownErrors.js')
ExtensionErrors = require('./ExtensionErrors.js')
NotFoundErrors = require('NotFoundErrors.js')
PermissionErrors = require('PermissionErrors.js')
WrongPlaceErrors = require('WrongPlaceErrors.js')

async function setup(handler) {
    CompleteHandler.setup(handler)

    ArgumentErrors.setup(handler)
    CooldownErrors.setup(handler)
    ExtensionErrors.setup(handler)
    NotFoundErrors.setup(handler)
    PermissionErrors.setup(handler)
    WrongPlaceErrors.setup(handler)

}