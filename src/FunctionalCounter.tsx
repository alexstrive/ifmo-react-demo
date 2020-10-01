import React, { useState, FC } from 'react'

const FunctionalCounter: FC = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
  }

  return (
    <div>
      <h2>Functional Counter</h2>
      <button onClick={handleClick}>Click me! {value}</button>
    </div>
  )
}

export default FunctionalCounter
