import React from 'react'

// base for all tools
const Tool = (props) => {
  return(
    <div className='tooldiv'>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}

Tool.display = 'Tool'

export default Tool