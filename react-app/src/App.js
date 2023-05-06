// import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/react';

function App() {
  // const transaction = Sentry.startTransaction({ name: 'testing' });

  // Sentry.getCurrentHub().configureScope((scope) => scope.setSpan(transaction));

  const methodDoesNotExist = () => {
    const instance = function () {};
    instance.notExistMethod();
  };

  const fetchWrongButton = () => {
    fetch('http://127.0.0.1:3001/trace-testing/wrong-button');
  };

  const fetchRightButton = () => {
    fetch('http://127.0.0.1:3001/trace-testing/right-button');
    console.log('right');
  };

  // const result = fetchRightButton();

  // custon span
  // const span = transaction.startChild({
  //   data: { result },
  //   op: 'test',
  //   description: 'test for react',
  // });
  // span.finish();

  // transaction.finish();
  // const result =
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here is 선택지</h1>
        <button className="Wrong-Button" onClick={fetchWrongButton}>
          <p>This is Wrong Button</p>
        </button>
        <button className="Right-Button" onClick={fetchRightButton}>
          <p>This is Right Button</p>
        </button>
        <p>Method Does Not Exist</p>
        <button onClick={methodDoesNotExist}>Break the world</button>;
      </header>
    </div>
  );
}

export default App;
