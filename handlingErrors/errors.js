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

class ExtentionErrors extends CMUError {
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



class TooManyArgumentsError extends ArgumentParseError {
    constructor(message) {
        this.message = message;
        this.name = "ArgumentParseError.TooManyArguments";
    }
}

class CommandDoesntExist extends Error {
    constructor(message, name) {
        this.command_name = name
        this.message = message;
        this.name = "CommandDoesntExist";
    }
}

class CommandExistsError extends Error {
    constructor(message) {
        this.message = message;
        this.name = "CommandExistsError";
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