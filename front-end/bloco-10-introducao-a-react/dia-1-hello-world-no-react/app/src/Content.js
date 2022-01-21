import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Task = (value) => {
  return (
    <p>O conteúdo é {value.conteudo} <br></br>
    Status: {value.status} <br></br>
    Bloco: {value.bloco}
    </p>
  );
}

class Content extends React.Component {
  render() {
    return conteudos.map((e) => Task(e))
  }
}

export default Content;