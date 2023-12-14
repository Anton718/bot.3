require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf(process.env.TOKEN);
const https = require("https")
const fs = require("fs")
const sleep = require("sleep")
const { key_days } = require("./assets/keyboards")
const {months,
    days,
    currentDate,
    year,
    month,
    month_int,
    day,
    day_int,
    monthDays} = require("./assets/assets")


bot.hears('hi', async (ctx) => {
    ctx.sendMessage(`Today: ${month} ${day_int}, ${year}`, key_days)
})

bot.hears("hello", (ctx) => {
    ctx.reply("hi man")
})

bot.launch();
