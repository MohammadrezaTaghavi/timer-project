let $ = document
let minTimer = $.querySelector(".minutes")
let secTimer = $.querySelector(".second")
let btnForm = $.querySelector(".btn-timer")
let minErore = $.querySelector(".min_erore")
let secErore = $.querySelector(".sec_erore")
let form = $.querySelector(".form")
let boxTimer = $.querySelector(".box_timer")
let timer1 = $.querySelector(".timer1")
let timer2 = $.querySelector(".timer2")
let timer3 = $.querySelector(".timer3")
let timer4 = $.querySelector(".timer4")
function timer(min,sec){
    var timerform = setInterval(function(){
        if(sec===-1){
            sec = 59
            min--
        }
        if(min===-1){
            clearInterval(timerform)
        }
        let minstr=String(min)
        let secstr=String(sec)
        if(sec<10){
            secstr="0".concat(secstr)
        }
        if(min<10){
            minstr="0".concat(minstr)
        }
        timer1.value=minstr[0]
        timer2.value=minstr[1]
        timer3.value=secstr[0]
        timer4.value=secstr[1]
        console.log(min+":"+sec);
        sec--
    },1000)
}
function minKey(event){
    minErore.style.display = "none"
    if((isNaN(event.key) && event.key!=="Backspace") || event.code==="Space"){
        event.preventDefault()
        minErore.style.display = "inline"
    }
}
function secKey(event){
    secErore.style.display = "none"
    if((isNaN(event.key) && event.key!=="Backspace") || event.code==="Space"){
        event.preventDefault()
        secErore.style.display = "inline"
    }
}
function btnTimer(event){
    event.preventDefault()
    if(minTimer.value==="" || secTimer.value===""){
        secErore.style.display = "inline"
    }
    else{
        form.style.display = "none"
        boxTimer.style.display = "block"
        timer(minTimer.value,secTimer.value)
    }
}
minTimer.addEventListener("keydown",minKey)
secTimer.addEventListener("keydown",secKey)
btnForm.addEventListener("click",btnTimer)