import { useState } from "react"

export const useCounter = (initial = 10) =>{

    const [value, setvalue] = useState(initial)
    const increment = () => setvalue(value + 1)
    const decrement = () => setvalue(value - 1)
    const reset = () => setvalue(initial)

    return {
        value,
        increment,
        decrement,
        reset
    }
}