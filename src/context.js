class Context {
    constructor(message) {
        this.channel = message.channel;
        this.guild = message.guild;
        this.message = message;
    }

    async init() {}

    async send(...args) {
        return await this.channel.send(...args);
    }
}

module.exports = Context;