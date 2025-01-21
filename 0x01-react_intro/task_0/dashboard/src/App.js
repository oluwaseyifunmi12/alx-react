import './App.css';
import logo from './holberton_logo.jpg';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} alt='Holberton logo' className="log" height="180" width="auto"/>
        <h1 className="title">School dashboard</h1>
      </div>
      <hr className="rule"></hr>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr className="rule"></hr>
      <div className="App-footer">
        <div>Copyright 2020 - holberton School</div>
      </div>
    </>
  );
}

export default App;
