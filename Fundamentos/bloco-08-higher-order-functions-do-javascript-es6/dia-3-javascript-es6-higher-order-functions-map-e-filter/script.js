const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

// Exercício 1

const formatedBookNames = (arr) => {
  const maps = arr.map((person) =>  person.replace(/ /g, "_"))
  return maps.map((person) =>  person.replace(/_-_/g, " - "))
}

console.log("Exercício 1", formatedBookNames(expectedResult));

// Exercício 1 da forma correta:

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

const formated = (arr) => arr.map((person) => `${person.name} - ${person.genre} - ${person.author.name}`)

console.log(formated(books))


// Exercício 2

function nameAndAge(arr) {
  const arrayobj = arr.map((item) => { 
    return {age: item.releaseYear - item.author.birthYear, 
            author: item.author.name}
  })
  arrayobj.sort((a,b) => a.age - b.age);
  return arrayobj;
};

console.log(nameAndAge(books));

// Exercício 3

const fantasyOrScienceFiction = (arr) => arr.filter((obj) => obj.genre === 'Fantasia' || obj.genre === 'Ficção Científica');

console.log(fantasyOrScienceFiction(books));

// Exercício 4

const oldBookOrdered = (arr) => arr.filter((obj) => 2021 - obj.releaseYear > 60).sort((a,b) => a.releaseYear - b.releaseYear);

console.log('4:', oldBookOrdered(books));

// Exercicio 5

const fantasyOrScienceFictionAuthors = () => {
  let cientificandfantasy = fantasyOrScienceFiction(books);
  return cientificandfantasy.map((obj) => obj.author.name).sort((a,b) => a.localeCompare(b));
};

console.log(fantasyOrScienceFictionAuthors(books));

// Exercício 6

const oldBooks = (arr) => {
  return arr.map((obj) => obj.name).sort((a,b) => a.localeCompare(b));
}

console.log(oldBooks(oldBookOrdered(books)));

// Exercício 7

const authorWith3DotsOnName = (arr) => {
  return arr.filter((obj) => 
    obj.author.name[1] === '.' 
    && obj.author.name[4] === '.' 
    && obj.author.name[7] === '.'
  )[0].name;
}

console.log('7: ',authorWith3DotsOnName(books));
