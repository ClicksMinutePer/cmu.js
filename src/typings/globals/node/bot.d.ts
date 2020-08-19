declare namespace Bot {
    function run(token): any;
    function command(func:{},name:string, {...etc}:{alias:[],args:{}}): any
}


export = Bot