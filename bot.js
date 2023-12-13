require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf(process.env.TOKEN);
const https = require("https")
const fs = require("fs")
const sleep = require("sleep")
const calendar = require("./controllers/calendar")

bot.start(calendar.cal)
bot.hears("hey", (ctx) => {
    ctx.reply("hey")
})
bot.launch();
