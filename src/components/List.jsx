import React, { useEffect, useState } from 'react'

const List = ({list, setList}) => {
  useEffect(() => {
    console.log(list)
  },[list])


  return (
    list[0] ? 
    <div className="list">
        <ul>
        {
          list.map((item, index) => (
            <li key={index} className={item[0].done ? "done" : ""}>
                <p>{item[0].title}</p>
                <div className="actions">
                  <button className="btn btn-danger" onClick={() => setList(list.filter((number, i) => i !== index))}>
                      <i className="fa-solid fa-trash"></i>
                  </button>
                  <button 
                    className={!item[0].done ? "btn btn-success" : "btn btn-warning"} 
                    onClick={() => {
                      const newList = [...list];
                      newList[index][0].done = !newList[index][0].done;
                      setList(newList); 
                    }}
                  >
                    <i className={!item[0].done ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                  </button>
                </div>
            </li>
        ))}
      </ul>
      </div>
      :
      <div className='text-center'>
        <h3>Yapılacak İş Yok!</h3>
      </div>
    
  )
}

export default List