discord = require("discord")

command = require("./command")
errors = require("./handlingErrors/errors");

class Bot extends discord.Client {
    constructor(command_prefix, ...args) {
        super(...args);
        this.on("message", this.callCommands);
        this.on("error", this.handlerError);
        this.prefix = typeof command_prefix === String ? [command_prefix] : command_prefix;
        this.commands = {}; // {commandName: {description: null, invoke: null}}
    }

    async run(...args) {
        return await this.login(...args)
    }

    command(func, name, ...args) {
        if (name in this.commands) throw new errors.CommandExistsError("This command already exists!");
        this.commands[name] = new command(func, ...args);
        return func;
    }

    parseArguments(ctx) {
        return ctx.message.content, [];
    }

    parseName(ctx, name) {
        for (prefix in typeof prefix === Array ? this.prefix : this.prefix(ctx)) {
            if (name.startsWith(prefix)) {
                return name.replace(prefix, "");
            }
        }
        throw new errors.InvalidPrefix("No accepted prefixes were found on that message");
    }

    async getContext(message, cls=context) {
        ctx = new cls(message);
        await ctx.init();
    }

    handlerError(err) { 
        error = errors.handleError(err);
        return error;
    }

    async callCommands(message) {
        context = this.getContext(message)
        name, args = this.parseArguments();
        name = this.parseName(name);
        if (!name in this.commands) throw new errors.CommandDoesntExist(`The command ${name} doesn't exist!`, name);
        try {
            this.commands[name].invoke.apply(null, [context] + args);
        } catch (e) {
            handleError(errors.CommandInvokeError(error));
        }
    }
}

module.exports = Bot;