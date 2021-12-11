// Partiu fixar o conteúdo;

const wakeUp = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (func) => console.log(func());

doingThings(sleep);

// Exercício 1;

const c = (nomeCompleto) =>  {
  let emails = nomeCompleto.replace(/ /g, "_");
  emails = emails + '@trybe.com'
  return {nomeCompleto, email: emails,}
}

const newEmployees = (newobj,newobj2,newobj3) => {
  const employees = {
    id1: newobj, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newobj2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newobj3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(c('Pedro Guerra'),c('Luiza Drumond'), c('Carla Paiva')));

// Exercício 2

const lucky = (num,luckyest) => {
  if(num === luckyest) 
    return 'Parabéns você ganhou'
    else return 'Tente novamente'
};

const luckygenerator = (num, func) => {
  const luckyest = (Math.floor(Math.random() * (5)) + 1)
  return func(num,luckyest)
}

console.log(luckygenerator(3,lucky));

// Exercício 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (arg1,arg2) => {
  let contador = 0;
  if(arg1.length === arg2.length) {
    for(i = 0; i < arg1.length; i++) {
      if(arg1[i] === arg2[i]) {
        contador+=1
      } else if ( arg2[i] !== 'N.A' && arg2[i] !== arg1[i]) {
        contador-=0.5
      }
    } return `Nota final: ${contador}`
  }

}

const task = (right,answers,callback) => {
  return callback(right,answers)
}

console.log(task(RIGHT_ANSWERS,STUDENT_ANSWERS,check));