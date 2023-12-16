require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);
const { key_days } = require("./assets/keyboards")
const  { year, month } = require("./assets/assets")
const callbacks = require("./controllers/callbacks")

bot.start(async (ctx) => {
    ctx.sendMessage(`${month} ${year}`, key_days)
})

bot.hears("hello", (ctx) => {
    ctx.reply("hi man")
})

bot.on("callback_query", callbacks.callbacks)

bot.launch();
