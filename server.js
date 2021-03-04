
const { Telegraf } = require('telegraf')
const axios = require('axios')
const token = "1607576232:AAHOsQLZvbHHBKSbdpWyJOh37Yv7y-xdzZo"
const bot = new Telegraf(token)

const verify = () => (ctx, next) => {
    if (ctx.chat.id == ""){
        return next()
    }else{
        ctx.reply("You have no permission to access this !")
    }
}
bot.on("photo", (ctx) => {
    console.log(ctx.message)
    message = ctx.caption
    console.log(message)
    console.log(ctx.message.caption)
    axios.get('https://api.telegram.org/bot' + token + '/getFile?file_id=' + ctx.message.photo[0].file_id).then((result => {
        console.log(result.data.result["file_path"])
        ctx.replyWithPhoto({ url: "https://api.telegram.org/file/bot" + token + "/" + result.data.result["file_path"] }, {
            chat_id: "-437162473",
            caption: ctx.message.caption,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Hướng dẫn xem link", url: "https://t.me/kholinkhocsinh/1510" },
                    ],
                    [
                        { text: "Cách cài telegram tiếng Việt", url: "http://1shorten.com/OjKz" },
                    ],
                    [
                        { text: "Hướng dẫn xem 18+ trên iPhone", url: "http://1shorten.com/MALdNkNk" },
                    ],
                ]
            }
        })
    }))

})
bot.command("id", (ctx) => {
    ctx.reply(ctx.chat.id)
})
bot.launch()
