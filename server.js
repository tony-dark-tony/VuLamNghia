
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')

const token = "1329574889:AAHz2-2XR4WvnScnh2WOT7RCLde3nbugjvI"
const bot = new Telegraf(token)

const stage = new Stage()
const scenes = require('./scenes')
stage.register(scenes.attach)
bot.use(session())
bot.use(stage.middleware())
bot.command("/id", (ctx) => {
    ctx.reply(ctx.chat.id)
})
bot.command("/post", (ctx) => {
    ctx.scene.enter('attaches')
})
bot.launch()
