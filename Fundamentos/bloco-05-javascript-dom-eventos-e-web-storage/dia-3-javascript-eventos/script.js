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


function makebutton (str)  {

    let bclass = document.querySelectorAll(".buttons-container")[0]
    let button = document.createElement("button");
    button.innerText = str
    bclass.appendChild(button)

}

makebutton("feriado");