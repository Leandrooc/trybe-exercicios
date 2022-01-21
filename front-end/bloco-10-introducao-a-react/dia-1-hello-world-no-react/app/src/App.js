import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const Arrays = ['WakeUp', 'Eat', 'Run', 'sleep', 'play', 'study', 'sleep'];

function App() {
  return (
    Arrays.map((e) => Task(e))
  );
}

export default App;
