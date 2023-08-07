import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [inputVal, setInputVal] = useState('')
  const [list, setList] = useState([])

  

  function addObj() {
    if(inputVal != "") {
      const objItem = [{
        title : inputVal,
        done : false
      }]
      setList([...list, objItem])
      setInputVal('')
    }
    else {
      alert("Lütfen bir değer gir")
    }
  }

  return (
    <div className="card">
      <h1>To Do List</h1>
      <div className="add">
        <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} placeholder='Yapılacak bir iş girin..' />
        <button className="btn btn-secondary" onClick={addObj}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <List list={list} setList={setList}></List>
    </div>
  );
}

export default App;

