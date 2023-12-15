const {month} = require("../assets/assets")
const {key_hours} = require("../assets/keyboards")
const fs = require("fs")

exports.callbacks = (ctx) => {
    let res = ctx.update.callback_query.data
    const appointment = {
        user: ctx.update.callback_query.from.username,
    }
    const obj = fs.readFileSync("./assets/users.json", "utf-8")
        if (obj) {
            const data = JSON.parse(obj);
            let checker = []
            for (let i of data) {
                checker.push(i.user)
            }
            if (!checker.includes(appointment.user)) {
                data.push(appointment)
                fs.writeFileSync("./assets/users.json", JSON.stringify(data))
            }
        }

    Number(res) !== 0 && res.slice(-2) !== "00"?
    (getDate(res), ctx.reply(`${month}, ${res}`, key_hours)): 
    res.slice(-2) === "00"? getTime(res) : null

    function getDate(date) {
        const obj = fs.readFileSync("./assets/users.json", "utf-8")
        if (obj) {
            const data = JSON.parse(obj);
            for (let i of data) {
                if (i.user === appointment.user) {
                    i.date = date;
                } 
                fs.writeFileSync("./assets/users.json", JSON.stringify(data))
            }
        } else {
            const arr = [];
            appointment.date = date
            arr.push(appointment)
            fs.writeFileSync("./assets/users.json", JSON.stringify(arr))
        }
    }

    function getTime(time) {
        const obj = fs.readFileSync("./assets/users.json", "utf-8")
        if (obj) {
            const data = JSON.parse(obj);
            for (let i of data) {
                    if (i.user === appointment.user) {
                        i.hour = time;
                        ctx.reply(`Booked successfully! ${month} ${i.date}th at ${i.hour}`)
                        fs.writeFileSync("./assets/users.json", JSON.stringify(data))
                    }
            }
        } 
    }
}