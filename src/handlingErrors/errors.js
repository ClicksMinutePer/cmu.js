const CMUError = require("../error");
//overall Errors

class ArgumentParseError extends CMUError {
    constructor(message) {
        this.message = message;
        this.name = "ArgumentParseError";
    }
}

class CommandParseError extends CMUError {
    constructor(message) {
        this.message = message;
        this.name = "CommandParseError"
    }
}

class CommandInvokeError extends CMUError {
    constructor(error) {
        this.message = "Error while running command, " + error.toString();
        this.name = "CommandInvokeError";
        this.error = error;
    }
}

class PermissionError extends CMUError {
    constructor(message) {
        this.message = message
        this.name = "PermissionError"
    }
}

class ContextError extends CMUError {
    constructor(message) {
        this.message = message
        this.name = "ContextError"
    }
}

class ExtentionError extends CMUError {
    constructor(message) {
        this.message = message
        this.name = "ExtensionError"
    }
}

class CooldownError extends CMUError {
    constructor(message) {
        this.message = message
        this.name = "CooldownError"
    }
}



/*
    Subclassing errors
*/


//Argument Parse Errors

class TooManyArguments extends ArgumentParseError {
    constructor(message) {
        this.message = message;
        this.name = "TooManyArguments";
    }
}

class BadArgument extends ArgumentParseError {
    constructor(message) {
        this.message = message
        this.name = "BadArgument"
    }
}

class BadlyQuotedArguments extends ArgumentParseError {
    constructor(message) {
        this.message = message
        this.name = "BadlyQuotedArguments"
    }
}

//Command Parse Errors

class CommandDoesntExist extends CommandParseError {
    constructor(message, name) {
        this.command_name = name
        this.message = message;
        this.name = "CommandDoesntExist";
    }
}

class CommandExists extends CommandParseError {
    constructor(message) {
        this.message = message;
        this.name = "CommandExistsError";
    }
}


//Permission Errors

class NotOwner extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "NotOwner"
    }
}

class BotMissingPermissions extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "BotMissingPermissions"
    }
}

class BotMissingRole extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "BotMissingRole"
    }
}

class BotMissingAnyRole extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "BotMissingAnyRole"
    }
}

class MissingPermissions extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "MissingPermissions"
    }
}

class MissingRole extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "MissingRole"
    }
}

class MissingAnyRole extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "MissingAnyRole"
    }
}

class HttpException extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "httpException"
    }
}

class FailingChecks extends PermissionError {
    constructor(message) {
        this.message = message
        this.name = "FailingChecks"
    }
}


class DisabledCommand extends PermissionError {
    constructor(message){
        this.message = message
        this.name = "DisabledCommand"
    }
}

//Context Errors

class PrivateMessageOnly extends ContextError {
    constructor(message) {
        this.message = message
        this.name = "PrivateMessageOnly"
    }
}

class NoPrivateMessage extends ContextError {
    constructor(message) {
        this.message = message
        this.name = "NoPrivateMessage"
    }
}

class NsfwChannelRequired extends ContextError {
    constructor(message) {
        this.message = message
        this.name = "NsfwChannelRequired"
    }
}

//Extension Errors

class ExtensionAlreadyLoaded extends ExtentionError {
    constructor(message) {
        this.message = message
        this.name = "ExtensionAlreadyLoaded"
    }
}

class ExtensionNotLoaded extends ExtentionError {
    constructor(message) {
        this.message = message;
        this.name = "ExtensionNotLoaded"
    }
}

class ExtensionNotFound extends ExtentionError {
    constructor(message) {
        this.message = message;
        this.name = "ExtensionNotFound"
    }
}

class FailedEntryPoint extends ExtentionError {
    constructor(message) {
        this.message = message
        this.name = "FailedEntryPoint"
    }
}

//Cooldown Errors

class CommandOnCooldown extends CooldownError {
    constructor(message) {
        this.message = message
        this.name = "CommandOnCooldown"
    }
}

class MaxConcurrencyReached extends CooldownError {
    constructor(message) {
        this.message = message
        this.name = "MaxConcurrencyReached"
    }
}




//non CMUErrors

class InvalidPrefix extends Error {
    /**
     * Note: This is intended to be a silent error
     * It is probably not a good idea to catch this in an error handler
    */
    constructor(message) {
        this.message = message;
        this.name = "CommandDoesntExist";
    }
}



module.exports = {
    
}