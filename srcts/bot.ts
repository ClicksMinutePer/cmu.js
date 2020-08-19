import 'fs'
import '../node_modules/discord.js/typings/index'
import * as discord from 'discord.js'




function checkPerms(user:discord.GuildMember,command:Command) {

    return function() {
        !user.hasPermission(command["perms"]) ? false : true
    }


}

function addCog(PtF: string, bot: Bot) {
    
    

}


function pCheck(userid: string, type:any) {
    let vCheck:boolean

    userid ? vCheck = true : vCheck = false

    return function (check = vCheck) {

        
    
    }

}



interface Settings {
    shards?: boolean | Array<string> /** true for autosharded */
    logChan?: string
    

    readonly dMode?: boolean
    readonly dToken?: string
}



interface Commands {
    name: string
    perms: number
    category: string | null
    command: Function

}

class Command {
    public name:string
    public perms: discord.PermissionResolvable | null
    public category: string | null
    public command: Function
    alias: string[]


    public constructor(name:string,command: Function, options?:{alias?: string[], perms?: discord.PermissionResolvable, category?:string}) {

        this.name = name
        this.alias = options.alias
        this.perms = options.perms || null
        this.category = options.category || null
        this.command = command

    }

    run(ctx,args):void {
        this.command
    }

}




class Bot extends discord.Client {
    prefix: string;
    categories: Array<string>;
    commands: Map<string, Command>

    constructor(prefix: string, token:string, options?: Settings, bOptions?: Array<any>) {
        super(...bOptions)
        this.token = (options.dMode || false) ? options.dToken : token
        this.prefix = prefix
        this.on('message', async message => {
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();

            if(command in this.commands) {
                
            }
        })
    }

    public addCommand(name:string,cmd:Command) {
        this.commands[name] = cmd
    }

    async run() {
        await this.login(this.token)
    }

}


const ping = new Command("ping", function (ctx:discord.Message) {
    return ctx.channel.send({embed: {
        title: "Pong",
        description: `The bots current ping is ${Date.now() - ctx.createdTimestamp} ms`
    }});
}, {
    alias: ["pong"],
    category: "default"
});
