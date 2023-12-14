const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = months[currentDate.getMonth()];
const month_int = new Date().getMonth();
const day = days[currentDate.getDay()];
const day_int = currentDate.getDay()
const monthDays = new Date(year, month_int, 0).getDate();

module.exports = {
    months,
    days,
    currentDate,
    year,
    month,
    month_int,
    day,
    day_int,
    monthDays
}