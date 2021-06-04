
const Wizard = require('telegraf/scenes/wizard')
const Composer = require('telegraf/composer')
const Telegram = require('telegraf/telegram')
const axios = require('axios')
const token = "1329574889:AAHz2-2XR4WvnScnh2WOT7RCLde3nbugjvI"
const listen = new Composer()
listen.on("photo", async (ctx) => {
    const id = ctx.scene.session.from
    link = ""
    await axios.get('https://api.telegram.org/bot' + token + '/getFile?file_id=' + ctx.message.photo[ctx.message.photo.length - 1].file_id).then((result => {
        ctx.replyWithPhoto({ url: "https://api.telegram.org/file/bot" + token + "/" + result.data.result["file_path"] }, {
            chat_id: id,
            caption: ctx.message.caption,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🌐Hướng Dẫn Xem Link 🌐", url: "https://t.me/cackholink/23" },
                    ],
                    [
                        { text: " 🔞 List Kênh Sex 🔞", url: "https://t.me/cackholink" },
                    ],
                    [
                        { text: "🤑 Kiếm Tiền Cùng AD 🤑", url: "https://t.me/joinchat/wjoJItRVu5E5OWU1" },
                    ],
                    [
                        { text: "🤝 Liên Hệ Quảng Cáo Và Mua VIP 🤝", url: "http://t.me/hoangyensex" },
                    ]
                ]
            }
        })
    })).catch(error => {
        console.log(error)
    })
    ctx.reply("Đã gửi thành công !")
    ctx.scene.leave()
})

listen.on("video", async (ctx)=>{
    const id = ctx.scene.session.from
    await axios.get('https://api.telegram.org/bot' + token + '/getFile?file_id=' + ctx.message.video.file_id).then((result => {
        ctx.replyWithVideo({ url: "https://api.telegram.org/file/bot" + token + "/" + result.data.result["file_path"] }, {
            chat_id: id,
            caption: ctx.message.caption,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🌐Hướng Dẫn Xem Link 🌐", url: "https://t.me/cackholink/23" },
                    ],
                    [
                        { text: " 🔞 List Kênh Sex 🔞", url: "https://t.me/cackholink" },
                    ],
                    [
                        { text: "🤑 Kiếm Tiền Cùng AD 🤑", url: "https://t.me/joinchat/wjoJItRVu5E5OWU1" },
                    ],
                    [
                        { text: "🤝 Liên Hệ Quảng Cáo Và Mua VIP 🤝", url: "http://t.me/hoangyensex" },
                    ]
                ]
            }
        })
    })).catch(error => {
        console.log(error)
    })
    ctx.reply("Đã gửi thành công !")
    ctx.scene.leave()
})
const attach = new Wizard('attaches', 
    (ctx)=>{
        ctx.reply("Nhập id group cần nhắn: ")
        return ctx.wizard.next()
    },
    (ctx)=>{
        ctx.scene.session.from = ctx.message.text
        console.log(ctx.scene.session.from)
        ctx.reply("Nhập nội dung bài viết: ")
        return ctx.wizard.next()
    },
    listen
)




module.exports = {
    attach
}