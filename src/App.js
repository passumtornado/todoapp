import React from 'react'
import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
    <div className="container">
    <div className="row">
    <div className="col-lg-3"></div>
    <div className="col-lg-6 mt-3">
    <h3 className="text-center">Todo Application</h3>
    <TodoList />
    </div>
     <div className="col-lg-3"></div>
    </div>
    </div>
    </div>
  );
}

export default App;
