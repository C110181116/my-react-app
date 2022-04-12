import React,{useState} from 'react';
import Button from './Button';
import ResultOutput from './ResultOutput';
import './Button.css'
import {evaluate} from 'mathjs'

function CalculaterIndex() {
    const [value, setValue] = useState(0);
    const btnHandler = (e) => {
        if (value === 0 && !isNaN(e.target.value)){
            setValue(e.target.value)
        }else if(e.target.value === "X"){
            setValue(value + "*")
        }else{
            setValue(value + e.target.value)
        }
    }
    const clearHandler = () => {
        setValue(0);
    }
    const calHandler = () => {
        console.log(value)
        setValue(evaluate(value));
    }
  return (
    <div className="calindex-container">
        <div className="btn-container">
            <ResultOutput value={value}/>
            <input className="clear-btn" type="button" value="clear" onClick={clearHandler}/>
            <div className="row">
                <Button btnHandler={btnHandler}>7</Button>
                <Button btnHandler={btnHandler}>8</Button>
                <Button btnHandler={btnHandler}>9</Button>
                <Button btnHandler={btnHandler}>/</Button>
            </div>
            <div className="row">
                <Button btnHandler={btnHandler}>4</Button>
                <Button btnHandler={btnHandler}>5</Button>
                <Button btnHandler={btnHandler}>6</Button>
                <Button btnHandler={btnHandler}>X</Button>
            </div>
            <div className="row">
                <Button btnHandler={btnHandler}>1</Button>
                <Button btnHandler={btnHandler}>2</Button>
                <Button btnHandler={btnHandler}>3</Button>
                <Button btnHandler={btnHandler}>-</Button>
            </div>
            <div className="row">
                <Button btnHandler={btnHandler}>.</Button>
                <Button btnHandler={btnHandler}>0</Button>
                <input className="operator" type="button" value="=" onClick={calHandler}/>
                <Button btnHandler={btnHandler}>+</Button>
            </div>
        </div>
    </div>
  )
}

export default CalculaterIndex