const {day_num, monthDays} = require("./assets")
const fs = require("fs")

let arrMonthDays = []
let finalMonthDays = []

  for (let i = 1; i <= monthDays; i++) {
    i <= day_num?
      arrMonthDays.push( { text: "." , callback_data: 0 } ):
      arrMonthDays.push( { text: i , callback_data: i } );
  }

    while (arrMonthDays.length !== 0) {
      const week = arrMonthDays.slice(0, 7);
      finalMonthDays.push(week);
      for (let i = 0; i < 7; i++) {
        arrMonthDays.shift();
      }
    }
 
const key_days = {
  reply_markup: {
      inline_keyboard:
          finalMonthDays
   }
}

let dayHours = []

const obj = fs.readFileSync("./assets/users.json", "utf-8")
const data = JSON.stringify(obj)

  for (let i = 10; i <= 20; i++) {
    dayHours.push( [{ text: `${i}:00`, callback_data: `${i}:00` }] )
  }

const key_hours = {
  reply_markup: {
    inline_keyboard:
    dayHours
  }
}

module.exports = { key_days, key_hours };
