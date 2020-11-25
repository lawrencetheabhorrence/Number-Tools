import React from 'react'

const Tool = (props) => {
  return(
    <div className='tool-div'>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

Tool.display = 'Tool'

export default Tool