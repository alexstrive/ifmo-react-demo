import React from 'react'

import Counter from './components/Counter'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2.75em 5em',
        background: 'pink',
      }}
    >
      <Counter />
      <Counter format="hex" />
      <Counter format="binary" />
      <Counter format="octal" />
    </div>
  )
}

export default App
