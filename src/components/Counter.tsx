import React, { useState, useEffect, useCallback, FC } from 'react'
import Button from './Button'

type Props = {
  format?: 'binary' | 'decimal' | 'hex' | 'octal'
}

const numberFormats = {
  binary: 2,
  octal: 8,
  decimal: 10,
  hex: 16,
}

const FunctionalCounter: FC<Props> = ({ format = 'decimal' }) => {
  const numberFormat = numberFormats[format]

  const [value, setValue] = useState(0)
  const [isOdd, setIsOdd] = useState(false)

  const increment = useCallback(() => {
    setValue(value + 1)
  }, [value])

  const decrement = useCallback(() => {
    setValue(value - 1)
  }, [value])

  useEffect(() => {
    if (value % 2 === 0) {
      setIsOdd(true)
    } else {
      setIsOdd(false)
    }
  }, [value])

  return (
    <div
      style={{
        boxShadow: '0 0 20px #aaa',
        borderRadius: 10,
        padding: '1em',
        background: 'white',
        marginBottom: '.75em',
      }}
    >
      <h2>
        Current value is {value.toString(numberFormat)} ({format})
      </h2>
      <h5>Value is {isOdd ? 'odd' : 'even'}</h5>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default FunctionalCounter
