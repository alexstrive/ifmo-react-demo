import React, { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import './Button.style.css'

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FC<Props> = (props) => {
  return <button className="button" {...props} />
}

export default Button
