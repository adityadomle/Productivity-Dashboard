import React, { useState } from 'react'

function App() {
  const [Val, setVal] = useState({ name: "Aditya", isBanned: false })

  return (
    <div>
      <h1>name: {Val.name}</h1> {/* 'Name' → should be lowercase 'name' */}
      <h2>banned: {Val.isBanned.toString()}</h2> {/* Missing () to call toString */}
      <button onClick={() => setVal({ ...Val, isBanned: !Val.isBanned })} className='px-3 py-11 bg-blue-800 rounded'></button>
    </div>
  )
}

export default App;
