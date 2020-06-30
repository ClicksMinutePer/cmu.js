class Bot extends discord.Client {
    constructor() {
        super.apply(this, arguments);
        this.on("message", this.callCommands);
        this.commands = {} // {commandName: {description: null, invoke: null}}
    }

    command(func) {
        c
        return func
    }

    async parseArguments() {
        return [];
    }

    async callCommands() {
        args = await this.parseArguments();
        
    }
}

module.exports = Bot