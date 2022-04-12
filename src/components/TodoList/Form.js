import React from 'react'
import { useState } from "react"

function Form({setInputText,inputText,setTodos,todos,setStatus}) {
    const inputTextHandler = (e) =>{
        setInputText(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text:inputText, completed:false, id:(Math.random()*999)}
        ])
        setInputText("");
    }
    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
  return (
    <form className="main-form">
        <input className="todo-input" value={inputText} onChange={inputTextHandler} type="text"/>
        <button className="todo-button" type="submit" onClick={submitHandler}>
            <img src={process.env.PUBLIC_URL + "/imgs/add.png"} className="button-img"></img>
        </button>
        <div className="select-div">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form;