import React, { useState, useEffect, useCallback, FC } from 'react'

const FunctionalCounter: FC = () => {
  const [value, setValue] = useState(0)
  const [isOdd, setIsOdd] = useState(false)

  const handleClick = useCallback(() => {
    setValue(value + 1)
  }, [value])

  useEffect(() => {
    if (value % 2 === 0) {
      setIsOdd(true)
    } else {
      setIsOdd(false)
    }
  }, [value])

  return (
    <div>
      <h2>Current value is {value}</h2>
      <h5>Value is {isOdd ? 'odd' : 'even'}</h5>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default FunctionalCounter
