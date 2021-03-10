
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const Markup = require('telegraf/markup')
const {leave} = Stage
const fs = require('fs')
const Telegram = require('telegraf/telegram')
const axios = require('axios')



const token = "1607576232:AAHOsQLZvbHHBKSbdpWyJOh37Yv7y-xdzZo"
const bot = new Telegraf(token)

const stage = new Stage()
const scenes = require('./scenes')
stage.register(scenes.attach)
bot.use(session())
bot.use(stage.middleware())
// bot.on("photo", (ctx) => {
//     console.log(ctx.message)
//     message = ctx.caption
//     console.log(message)
//     console.log(ctx.message.caption)
//     axios.get('https://api.telegram.org/bot' + token + '/getFile?file_id=' + ctx.message.photo[0].file_id).then((result => {
//         console.log(result.data.result["file_path"])
//         ctx.replyWithPhoto({ url: "https://api.telegram.org/file/bot" + token + "/" + result.data.result["file_path"] }, {
//             chat_id: "-1001335596946",
//             caption: ctx.message.caption,
//             reply_markup: {
//                 inline_keyboard: [
//                     [
//                         { text: "Hướng dẫn xem link", url: "https://t.me/kholinkhocsinh/1510" },
//                     ],
//                     [
//                         { text: "Cách cài telegram tiếng Việt", url: "http://1shorten.com/OjKz" },
//                     ],
//                     [
//                         { text: "Hướng dẫn xem 18+ trên iPhone", url: "http://1shorten.com/MALdNkNk" },
//                     ],
//                 ]
//             }
//         })
//     }))

// })
bot.command("/id", (ctx) => {
    ctx.reply(ctx.chat.id)
})
bot.command("/post", (ctx) => {
    ctx.scene.enter('attaches')
})
bot.launch()
