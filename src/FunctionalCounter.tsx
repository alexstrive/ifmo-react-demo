import React, { useState, FC } from 'react'

const FunctionalCounter: FC = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <h2>Functional Counter</h2>
      {value}
    </div>
  )
}

export default FunctionalCounter
