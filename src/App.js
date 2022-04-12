import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Calculator from "./components/Calculator/CalculatorIndex";
import TodoList from "./components/TodoList/TodoListIndex";
import LoginForm from "./components/LoginForm_Slider/LoginIndex";
import ImgUpload from "./components/ImgUpload/UploadIndex";
import MyPortfolio from "./components/Portfolio/MyPortfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<MyPortfolio/>}/>
        <Route path="/LoginForm" element = {<LoginForm/>}/>
        <Route path="/TodoList" element = {<TodoList/>}/>
        <Route path="/Calculator" element = {<Calculator/>}/>
        <Route path="/ImgUpload" element = {<ImgUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
