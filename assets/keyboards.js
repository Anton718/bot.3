function getMonth() {
  
  const days =  new Date(year, month, 0).getDate()
}



const key_days = {
  reply_markup: {
    inline_keyboard:
      [
        {
          text: "USA",
          callback_data: "USA",
        }
      ],
   }
}


module.exports = { key_days };
