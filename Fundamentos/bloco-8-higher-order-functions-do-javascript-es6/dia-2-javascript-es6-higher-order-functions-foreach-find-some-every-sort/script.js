const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 1

const authorBornIn1947 = () => {
const birth = books.find( obj => obj.author.birthYear === 1947)
return birth.author.name
}
console.log(`Exercício 1 ${authorBornIn1947()}`);

// Exercício 2

function smallerName() {
  let smallest;
  let small = books[0].name.length;
  books.forEach((item) => {
  if(item.name.length < small){
    small = item.name.length
    smallest = item.name
  }  
 })
  return smallest;
}

console.log(`Exercício 2 ${smallerName()}`)

// Exercício 3

const namelength = () => {
  const name = books.find( obj => obj.name.length === 26)
  return name;
  }

console.log('Exercício 3', namelength());

// Exercício 4

const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc(arr) {
  const sorted = arr.sort((a,b) => a.releaseYear - b.releaseYear);
  return sorted
}

console.log('Exercício 4', booksOrderedByReleaseYearDesc(expectedResult));

// Exercício 5

function everyoneWasBornOnSecXX(arr) {
  return arr.every(element => element.author.birthYear >= 1901 && element.author.birthYear <= 2000);
}

console.log(`Exercício 5 ${everyoneWasBornOnSecXX(expectedResult)}`);

// Exercício 6

function someBookWasReleaseOnThe80s(arr) {
  return arr.some(element => element.releaseYear >= 1980 && element.releaseYear <= 1989);
}

console.log(`Exercício 6 ${someBookWasReleaseOnThe80s(expectedResult)}`);

// Exercício 7

function a (arr) {
  let repeat = 0;
  for(i = 0; i < arr.length; i++) {
    repeat = 0
    for(y = 0; y < arr.length; y++) {
      if(arr[i].author.birthYear === arr[y].author.birthYear) {
         repeat++
      }
      if(repeat === 2) {
        return true;
      }
    }
  }
  return false;
}

console.log(a(expectedResult));
