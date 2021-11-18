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

/* Exercício 2 */

let makebutton = (str) =>  {
    let bclass = document.querySelectorAll(".buttons-container")[0]
    let button = document.createElement("button");
    button.innerText = str
    button.className = str
    bclass.appendChild(button)
}

makebutton("Feriados");

/* Exercício 3 */

/*
function click () {
    cont = 0
    let holiday = document.getElementsByClassName("holiday")
    let clickbutton = document.getElementsByClassName("Feriados")[0]

    clickbutton.addEventListener("click", click);
    

    if(cont === 0) {
        for(i = 0; i < holiday.length; i++) {
            holiday[i].style.backgroundColor = "black"
            holiday[i].style.border = "solid 5px yellow"
            beforeafter = false;
       } 
    
    cont++

    }else {  for(i = 0; i < holiday.length; i++) {
    holiday[i].style.backgroundColor = "black"
    holiday[i].style.border = "solid 5px yellow"
    beforeafter = false;
}
  cont-- }
}

click(); */
/*
function displayHolidays() {
    let getHolidayButton = document.querySelector('.Feriados');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
          getHolidays[index].style.border = ""
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
          getHolidays[index].style.border = "solid 2px yellow"

        }
      }
    })
  };
  
  displayHolidays(); */



  let buttonh = document.querySelector('.Feriados');
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





