import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  const person = "River"

  return (
    <div className="App">
      <Square propsVar={person}/>
    </div>
  );
}

export default App;
