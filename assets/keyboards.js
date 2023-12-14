const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = months[currentDate.getMonth()];
const month_int = new Date().getMonth();
const day = days[currentDate.getDay()];
const day_int = currentDate.getDay()
const monthDays = new Date(year, month_int, 0).getDate();

const timeData = {
 year: year,
 month: month,
 day: day,
 monthDays: monthDays
}
let arrMonthDays = []
let finalMonthDays = []

  for (let i = 1; i <= monthDays+1; i++) {
      arrMonthDays.push( { text: i, callback_data: i } );
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

module.exports = { key_days };
