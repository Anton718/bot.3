const {month} = require("../assets/assets")
const {key_hours} = require("../assets/keyboards")
const fs = require("fs")

exports.callbacks = (ctx) => {
    let res = ctx.update.callback_query.data
    const appointment = {
        user: ctx.update.callback_query.from.username,
    }


    Number(res) !== 0 && res.slice(-2) !== "00"?
    ( appointment.date = `${month}, ${res}`,  ctx.reply(`${month}, ${res}`, key_hours)): 
    res.slice(-2) === "00"? (appointment.hour = res, fs.writeFileSync('./assets/users.json', JSON.stringify(appointment)), 
    ctx.reply(`Booked for ${res}`)):null
}


function appendToFile() {
    const obj = fs.readFileSync("./assets")
}