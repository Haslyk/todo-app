import React, { useEffect, useState } from 'react'

const List = ({list, setList, handleClick}) => {


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
                  <button className="btn btn-success" onClick={handleClick(index)}>
                      <i className="fa-solid fa-check"></i>
                  </button>
                </div>
            </li>
        ))}
      </ul>
      </div>
      :
      <div>
        Yapılacak İş Yok
      </div>
    
  )
}

export default List