"use client"
import "./Button.css"

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  as = "button",
  href,
  target,
  rel,
  ...props
}) => {
  const baseClass = "btn"
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const disabledClass = disabled ? "btn-disabled" : ""

  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim()

  if (as === "a") {
    return (
      <a href={href} target={target} rel={rel} className={buttonClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={buttonClass} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
