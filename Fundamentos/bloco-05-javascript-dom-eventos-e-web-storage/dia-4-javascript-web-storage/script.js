let input = document.getElementById("input");

let bcolor = input.addEventListener("change", (event) => {
    let coloruser = input.value
    document.body.style.backgroundColor = coloruser
    localStorage.setItem('bgcolor', coloruser)
})

document.body.style.backgroundColor = localStorage.getItem('bgcolor')

