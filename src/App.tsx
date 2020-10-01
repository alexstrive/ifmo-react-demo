import React from 'react'

import Counter from './Counter'

function App() {
  return (
    <div>
      <Counter />
      <Counter format="hex" />
      <Counter format="binary" />
      <Counter format="octal" />
    </div>
  )
}

export default App
