const { key_days } = require("../assets/keyboards")

exports.cal = async (ctx) => {
    ctx.sendMessage("pick the day", key_days)
}