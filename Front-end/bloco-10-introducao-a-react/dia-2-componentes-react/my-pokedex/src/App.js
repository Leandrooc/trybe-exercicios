import pokemons from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {pokemons.map(({ id, name, type, image }) => <><p>Id: {id}
          Name: {name} <br />
          Type: {type}</p><img alt={id} src={image} /></>)}
      </header>
    </div>
  );
}

export default App;
