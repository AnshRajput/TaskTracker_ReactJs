
import React from 'react'

const Button = ({color ,text,onClick}) => {
  
  return (
<button style={{backgroundColor:color}} className='btn' onClick={onClick}>{text} </button>
  )
}

Button.defaultProps={
    color:'blue'
}
export default Button