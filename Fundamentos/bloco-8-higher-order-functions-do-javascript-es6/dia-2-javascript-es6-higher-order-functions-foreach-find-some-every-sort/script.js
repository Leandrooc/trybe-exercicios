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
console.log(authorBornIn1947());

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

console.log(smallerName())

// Exercício 3

const namelength = () => {
  const name = books.find( obj => obj.name.length === 26)
  return name;
  }

console.log(namelength());

// Exercício 4