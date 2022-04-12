import React from 'react'
import "./Form.css"
import Form from './Form';
import TodoList from './TodoList';
import {useState, useEffect} from "react"

function TodoListIndex() {
    const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos, status])

  const filterHandler = () =>{
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  }
  return (
    <div className="todoindex-container">
        <header className="todo-header">Todo List</header>
      <Form 
        setInputText = {setInputText}
        inputText = {inputText} 
        setTodos = {setTodos} 
        todos = {todos}
        setStatus = {setStatus}
      />
      <TodoList 
        setTodos = {setTodos} 
        todos = {todos} 
        filteredTodos = {filteredTodos}
      />
    </div>
  )
}

export default TodoListIndex