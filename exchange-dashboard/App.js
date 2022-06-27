import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Widget from './Widgets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Widget />
      <h1>{process.env.REACT_APP_NAME} v{process.env.REACT_APP_VERSION}</h1>
      </header>
    </div>
  );
}

export default App;
