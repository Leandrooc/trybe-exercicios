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

// Exercício 2