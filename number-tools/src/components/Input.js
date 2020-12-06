import React from 'react'

const Input = ({ label, type, setText }) => {
  return(
    <div>
      <label>{label}</label>
      <input type={type} onChange={({ target }) => setText(target.value)} />
    </div>
  )
}

export default Input