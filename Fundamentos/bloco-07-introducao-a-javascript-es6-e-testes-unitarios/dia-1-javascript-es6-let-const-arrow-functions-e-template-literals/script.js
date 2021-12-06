const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

// Parte II - 1

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);
const join = oddsAndEvens.join(',')
console.log(join);

// Parte II - 2

let bigger = 0;
let empty = [];
let word = 0;

const longestWord = (str) => {
  let a = str.split(" ")
  for(i = 0; i < a.length; i++) {
    empty.push(a[i].length)
  }
  for(y = 0; y < empty.length; y++) {
    if(empty[y] > empty[y-1] && empty[y] > bigger) {
      bigger = empty[y]
      word = y
    }
  }
  return console.log(a[word])
}

longestWord("Antônio foi dsaok nos banheiro e não sabemos o  que aconteceu")

// Parte II - 3

const clicks = document.getElementById('clicks')
let p = document.getElementById('p');
let click = 0;

clicks.addEventListener('click', () => {
  click++
  p.innerText = `${click}`
})

// Parte II - 4
let news;

const function1 = (string, name) => {
  const str = string
  const teste = str.replaceAll('x', `${name}`); 
  news = teste
}
function1("Tryber x aqui!","Bebeto")
console.log(news)
