function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  // Exercício 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let ul = document.getElementById("days")

  for(i = 0; i < dezDaysList.length; i++) {

    let list = document.createElement("li");
    list.innerText = dezDaysList[i];
    if( dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
        list.className = "day holiday";
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
        list.className = "day friday";
    } else {
        list.className = "day";
    }
    ul.appendChild(list);
    }

// Exercício 2 

let makebutton = (str) =>  {
    let bclass = document.querySelectorAll(".buttons-container")[0]
    let button = document.createElement("button");
    button.id = "btn-holiday"
    button.innerText = str
    bclass.appendChild(button)
}

makebutton("Feriados");

// Exercício 3

let buttonh = document.querySelector('#btn-holiday');
let listholiday = document.querySelectorAll('.holiday')

buttonh.addEventListener("click", () => {

    for(i =0; i < listholiday.length; i++) {
        if(listholiday[i].style.backgroundColor !== "darkblue") {
            listholiday[i].style.backgroundColor = "darkblue"
            listholiday[i].style.border = "solid 3px yellow"
            listholiday[i].style.fontSize = "26px"
        } else {
            listholiday[i].style.backgroundColor = "#eee"
            listholiday[i].style.border = ""
            listholiday[i].style.fontSize = "20px"
               }
    }
    
  })

// Exercício 4

let makebutton2 = (str) =>  {
    let bclass = document.querySelectorAll(".buttons-container")[0]
    let button = document.createElement("button");
    button.id = "btn-friday"
    button.innerText = str
    bclass.appendChild(button)
}

makebutton2("Sexta-feira");

// Exercício 5

let buttonf = document.querySelector('#btn-friday');
let listfriday = document.querySelectorAll('.friday')
let fridayday = [];

for (i = 0; i < listfriday.length; i++) {
    fridayday.push(listfriday[i].innerText)
}

buttonf.addEventListener("click", () => {

        for(i = 0; i < listfriday.length; i++) {
            if(listfriday[i].innerText !== "testando") {
            listfriday[i].innerText = "testando"
        } else {
            for(i = 0; i < listfriday.length; i++) {
                listfriday[i].innerText = fridayday[i]
            }
        }
    } 
})

// Exercício 6

let linumbers = document.querySelectorAll(".day")

for(let y of linumbers) {
    y.addEventListener("mouseover", () => {
        y.style.fontSize = "30px"
        y.style.fontWeight = '600';
    })

    y.addEventListener("mouseout", () => {
        y.style.fontSize = "20px"
        y.style.fontWeight = '200';
    })
}

// Exercício 7

let spa = (str) =>  {
    let mytasks = document.querySelector(".my-tasks")
    let span = document.createElement("span");
    span.innerText = str
    mytasks.appendChild(span)
}

spa("cozinhar");

// Exercício 8
