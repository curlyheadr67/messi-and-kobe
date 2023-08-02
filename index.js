let messiEl = document.getElementById("messi-el")
let kobeEl = document.getElementById("kobe-el")
let messi_clicks = 0
let kobe_clicks = 0

function messi_info(){
    messi_clicks += 1
    let message = "Lionel Andrés Messi, colloquialy known as Leo Messi (or 'Messi' alone) is considered to be one of the greatest football/soccer players of all time; He possesses 7 Ballon d'Or's - the highest number of this prestigious award that any player has ever held in history. Along with his fellow teammates, ofcourse, he has won a World Cup and holds one Copa América."
    messiEl.innerText = message
    if (messi_clicks > 1){
        messiEl.innerText = message + " You have clicked an image of Messi " + messi_clicks + " times."
    }
}

function kobe_info() {

    kobe_clicks += 1
    let message = "Kobe Bryant was a professional basketball player who played for the Lakers in the NBA for all of his 20 year career. He was one of the youngest players to get drafted in the NBA of all time."
    kobeEl.innerText = message
    if (kobe_clicks > 1){
        kobeEl.innerText = message + " You have clicked an image of Kobe Bryant " + kobe_clicks + " times."
    }
}