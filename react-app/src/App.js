// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here is 선택지</h1>

        <button
          className="Wrong-Button"
          onClick={() => {
            fetch('http://127.0.0.1:3001/trace-testing/wrong-button');
          }}
        >
          <p>This is Wrong Button</p>
        </button>

        <button
          className="Right-Button"
          onClick={() => {
            fetch('http://127.0.0.1:3001/trace-testing/right-button');
          }}
        >
          <p>This is Right Button</p>
        </button>
      </header>
    </div>
  );
}

export default App;
