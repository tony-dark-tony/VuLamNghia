
const Wizard = require('telegraf/scenes/wizard')
const Composer = require('telegraf/composer')
const Telegram = require('telegraf/telegram')
const axios = require('axios')
const token = "1607576232:AAHOsQLZvbHHBKSbdpWyJOh37Yv7y-xdzZo"
const listen = new Composer()
listen.on("photo", async (ctx) => {
    const id = ctx.scene.session.from
    link = ""
    switch(id){
        case -1001404832837:
            link = "https://t.me/kholinkchauau"
            break;
        case -1001438964926:
            link = "-https://t.me/kholinkjav"
            break;
        case -1001188213201:
            link = "https://t.me/kholinkchina"
            break;
        case -1001379999346:
            link = "https://t.me/kholinkhentai"
            break;
        case -1001455126394:
            link = "https://t.me/kholink18"
            break;
        case -1001335596946:
            link = "https://t.me/kholinkhocsinh"
            break;
    }
    console.log(ctx.message)
    console.log(ctx.message.caption)
    await axios.get('https://api.telegram.org/bot' + token + '/getFile?file_id=' + ctx.message.photo[0].file_id).then((result => {
        console.log(result.data.result["file_path"])
        ctx.replyWithPhoto({ url: "https://api.telegram.org/file/bot" + token + "/" + result.data.result["file_path"] }, {
            chat_id: id,
            caption: ctx.message.caption,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Hướng dẫn xem link", url: link },
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