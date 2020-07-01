cmu = require("./main.js")

bot = cmu.Bot(command_prefix="cmu ")

bot.once("ready", () => {
    console.log("Logged in...")
});

@bot.command(name="test")
async function test(ctx) {
    await ctx.send("This is a test")
}



bot.run("NzI3OTM4Mjc5MzgyNzEyMzIy.XvzHXg.rCBBR2rSOf8V-4BLMYp2hKjLGjw")