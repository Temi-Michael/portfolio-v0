"use client"
import "./Input.css"

const Input = ({ type = "text", className = "", placeholder = "", value, onChange, name, id, ...props }) => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      {...props}
    />
  )
}

export default Input
