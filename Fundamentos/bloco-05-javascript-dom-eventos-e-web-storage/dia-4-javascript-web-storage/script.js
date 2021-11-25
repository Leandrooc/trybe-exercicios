// Exercício 1

let input = document.getElementById("input");

let bcolor = input.addEventListener("change", () => {
    let coloruser = input.value
    document.body.style.backgroundColor = coloruser
    localStorage.setItem('bgcolor', coloruser)
})

document.body.style.backgroundColor = localStorage.getItem('bgcolor')

// Exercício 2

let input2 = document.getElementById("input2");
let p = document.getElementsByTagName("p")[0];

input2.addEventListener("change", () => {
    p.style.color = input2.value
    localStorage.setItem('txtcolor', input2.value)
})

p.style.color = localStorage.getItem('txtcolor')


// Exercício 3

let input3 = document.getElementById("input3");

input3.addEventListener("change", (event) => {
    let evtpx = event.target.value + "px"
    p.style.fontSize = evtpx
    localStorage.setItem('fontp', evtpx)
})

p.style.fontSize = localStorage.getItem('fontp')

// Exercício 4

let input4 = document.getElementById("input4");

input4.addEventListener("change", (event) => {
    let evtpx = event.target.value + "px"
    p.style.lineHeight = evtpx
    localStorage.setItem('lineh', evtpx)
})

p.style.lineHeight = localStorage.getItem('lineh')

// Exercício 5

let input5 = document.getElementById("input5");

input5.addEventListener("change", (event) => {
    let evtpx = event.target.value
    p.style.fontFamily = evtpx
    localStorage.setItem('fontf', evtpx)
})

p.style.fontFamily = localStorage.getItem('fontf')
