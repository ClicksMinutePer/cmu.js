cmu = require("./main.js");
token = require('./examplesetup.json');
bot = new cmu.Bot(command_prefix="cmu ");

bot.once("ready", () => {
    console.log("Logged in...")
});

@bot.command(name='test')
async function test(ctx) {
    await ctx.send("This is a test")
}

//sudo npm install -g typescript

bot.run(token.token)