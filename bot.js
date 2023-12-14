require("dotenv").config({ path: "./.env" });
const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf(process.env.TOKEN);
const https = require("https")
const fs = require("fs")
const sleep = require("sleep")
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const { key_days } = require("./assets/keyboards")
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = months[currentDate.getMonth()];
const month_int = new Date().getMonth();
const day = days[currentDate.getDay()];
const day_int = currentDate.getDay()
const monthDays = new Date(year, month_int, 0).getDate();


bot.hears('hi', async (ctx) => {
    ctx.sendMessage(`Today: ${month} ${day_int}, ${year}`, key_days)
})

bot.hears("hi", (ctx) => {
    ctx.reply("hi man")
})

bot.launch();
