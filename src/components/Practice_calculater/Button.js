import React from 'react'
import './Button.css'

export default function Button(props) {
    const isOperator = (val) => {
        return !isNaN(val) || val === "." || val === "=";
    }
  return (
    <div 
    className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
    >
        {props.children}
    </div>
  )
}

