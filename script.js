
setInterval(function timeShower(){
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let y = a.getFullYear()
    let mon = a.getMonth()
    let d = a.getDate()
    document.querySelector(".timeContainer").innerHTML = `${h%12}:${m}:${s}`;
    document.querySelector(".dateContainer").innerHTML = `${y}/${mon}/${d}`;
}, 1000);





