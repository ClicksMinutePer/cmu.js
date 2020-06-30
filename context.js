class Context {
    constructor(message) {
        this.channel = message.channel;
        this.guild = message.guild;
        this.message = message;
    }

    async init() {}

    async send() {
        return await this.channel.send.apply(none, arguments);
    }
}