import React from 'react'

const Input = ({ label, type, setText }) => {
  return(
    <div className='input'>
      <label>{label}</label>
      <input type={type} onChange={({ target }) => setText(target.value)} />
    </div>
  )
}

export default Input