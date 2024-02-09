import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [count, setcount] = useState(value)


  const handleClick = (event) => setcount( count + 1 )
  // setcount( (c) => c + 1 )

  return (
    <><h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}


CounterApp.prototypes = {
    value: PropTypes.number.isRequired
}