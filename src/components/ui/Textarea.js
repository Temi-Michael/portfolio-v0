"use client"
import "./Textarea.css"

const Textarea = ({ className = "", placeholder = "", value, onChange, name, id, rows = 4, ...props }) => {
  return (
    <textarea
      className={`textarea ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      rows={rows}
      {...props}
    />
  )
}

export default Textarea
