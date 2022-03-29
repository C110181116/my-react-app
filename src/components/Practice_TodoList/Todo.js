import React from 'react'

function Todo({setTodos, todos, todo, text}) {
    const deleteHandler = () =>{
        setTodos(todos.filter((element) => element.id !== todo.id));
    }
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="btn-completed">
            <li className="icon-completed"></li>
        </button>
        <button onClick={deleteHandler} className="btn-remove">
            <li className="icon-remove"></li>
        </button>
    </div>
  )
}

export default Todo