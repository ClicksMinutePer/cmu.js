declare module 'cmu.js' {
    import * as discord from 'discord.js'


    export class Argument {
        private constructor()


    }


    export class Command {
        public constructor(name:string,command: Function, options?:CommandOpts)

        private _cooldowns: Map<string, number>;

        private cooldown(userid: string): number;

        public aliases: string[]
        public group: string
        public desc: string
        public format: string
        public nsfw: boolean
        public guildOnly: boolean
        public uPerms:  discord.PermissionResolvable[] | discord.PermissionResolvable | boolean;
        public cPerms: discord.PermissionResolvable[] | discord.PermissionResolvable
        public args: string[]
        public argPatterns: RegExp[] | RegExp
        public hidden: boolean


    }

    export class CMUClient extends discord.Client {
        public constructor(options?:CMUClientOpts)
        public commandPrefix: string;
		public options: CMUClientOpts;
        public readonly owners: discord.User[];
        public readonly team: discord.Team | discord.TeamMember[]


        public isOwner(user: discord.UserResolvable):boolean


    }

    export { CMUClient as Client}
    

    export interface CommandOpts {
        aliases?: string[];
        group?: string;
        desc?: string;
        format?: string;
        nsfw?: boolean;
        guildOnly?: boolean;
        uPerms?: discord.PermissionResolvable[] | discord.PermissionResolvable | boolean;
        cPerms?: discord.PermissionResolvable[] | discord.PermissionResolvable
        args?: string[];
        argPatterns?: RegExp[] | RegExp;
        hidden?: boolean
    }

    export interface CMUClientOpts extends discord.ClientOptions {
        prefix?:string;
        owner?: string | string[] | Set<string>;
        invite?:string 

        autoSharded?: boolean

    }

}