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
let arrWeekDays = []
function getMonthCal() {
  for (let i = 1; i <= monthDays+1; i++) {
    while (arrWeekDays.length < 7) {
      arrWeekDays.push(i)
    }
      arrMonthDays.push( { text: i, callback_data: i } );
  }
  console.log(arrWeekDays);
  console.log(arrMonthDays);
  return JSON.stringify(arrMonthDays)
}
getMonthCal()

const key_days = {
  reply_markup: {
    inline_keyboard:
    [arrMonthDays]
   }
}


module.exports = { key_days };
