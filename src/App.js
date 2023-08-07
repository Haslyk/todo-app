import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [inputVal, setInputVal] = useState()
  const [list, setList] = useState([])

  function handleClick(id) {
    list[id].done = !list[id].done;
    setList(list);
    console.log(list)
  }

  function addObj() {
    const objItem = [{
      title : inputVal,
      done : false
    }]
    setList([...list, objItem])
  }

  return (
    <div className="card">
      <h1>To Do List</h1>
      <div className="add">
        <input type="text" onChange={(e) => setInputVal(e.target.value)} placeholder='Yapılacak bir iş girin..' />
        <button className="btn btn-secondary" onClick={addObj}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <List list={list} setList={setList} handleClick={handleClick}></List>
    </div>
  );
}

export default App;

