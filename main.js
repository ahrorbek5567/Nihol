let ism =document.getElementById("ism");
let raqam =document.getElementById("number");
let manzil =document.getElementById("manzil");
let btn =document.getElementById("btn");

btn.addEventListener('click',()=>{
  sendtelegram(ism.value+' '+raqam.value+ " "+manzil.value);
})

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6799977304:AAFzQbdB6JgkuX1002W-3YXWSRnOGu046aY"; let chat_id = 1746849494;
 let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) };
  $.ajax(settings).done(function (response) { }); };