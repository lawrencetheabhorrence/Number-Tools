import React from 'react'

const Input = ({ label, buttonLabel, type, setText }) => {
  return(
    <div>
      <label>{label}</label>
      <input type={type} value={buttonLabel} onChange={({ target }) => setText(target.value)} />
    </div>
  )
}

export default Input