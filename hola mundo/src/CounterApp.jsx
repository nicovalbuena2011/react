import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

  const handleClick = (event) => console.log(event)

  return (
    <><h1>CounterApp</h1>
      <h2> {value} </h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}


CounterApp.prototypes = {
    value: PropTypes.number.isRequired
}