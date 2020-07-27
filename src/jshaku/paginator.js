discord = require('discord.js');

class Paginator {
    constructor(prefix="```js\n", suffix="```") {
        this.pages = []
        this.autoPage = {
            text: 2000,
            embed:[ {
                desc: 2048,
                field: 1024,
                foot: 2048,
                author: 256
            },6000]
        }
        this.prefix = prefix
        this.suffix = suffix
        return (this, {
            
        })
    }

    addPage(index,page) {
        this.pages.splice(index,0,page)
    }

    autoPage(message) {
        
    }

    sendPage(page) {

    }
}

page = new Paginator()
page()