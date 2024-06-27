import React from 'react'
// import './Button.css'

const Button = ({
  buttonText,
  color="primary",
  buttonClassName="",
  buttonTextColor="white",
  buttonBorderRadius="rounded",
  size="md",
  onclick=()=>{},
}) => { 
  return (
    <div className='row m-0 p-0'>
      <button className={`btn btn-${size} btn-${color} ${buttonClassName} text-${buttonTextColor} ${buttonBorderRadius === "rounded" ? "rounded" : `rounded-${buttonBorderRadius}`}`} onClick={onclick} >{buttonText ? buttonText : "Click Me"}</button>
    </div>
  )
}

export default Button