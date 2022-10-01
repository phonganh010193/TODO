import logo from './logo.svg';
import './App.css';
import TodoApp from './TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO APP with REACTJS by Phong Anh
        </p>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
