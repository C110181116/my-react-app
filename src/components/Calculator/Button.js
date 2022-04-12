import React from 'react'


export default function Button({children,btnHandler}) {
  const isOperator = (val) => {
    return isNaN(val)
  }
  return (
    <div>
      <input
      className={`cal-btn ${isOperator(children) ? "operator" : "null"}`}
      type="button"
      value={children}
      onClick={btnHandler}
      />
    </div>
  )
}

