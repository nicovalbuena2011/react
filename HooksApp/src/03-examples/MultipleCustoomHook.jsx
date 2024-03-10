import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter';
import { PokemonCard } from './PokemonCard';



export const MultipleCustoomHook = () => {

  const {value, increment, decrement} = useCounter(1)

  const {data, isLoading, hasError, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${value}`);

  
  return (
    <>
    <div>MultipleCustoomHook</div>
    <hr />
    {isLoading ? <p>Cargando...</p> : <PokemonCard id = {value} name={data.name} sprites={[data.sprites.back_default, data.sprites.back_shiny, data.sprites.front_default, data.sprites.front_shiny]} increment = {increment} decrement = {decrement}/>}
    <button className='btn btn-primary mx-2' onClick={ value > 1 ? decrement : null}>
      Anterior
    </button>
    <button className='btn btn-primary' onClick={increment}>
      Siguiente
    </button> 
    </>
  )
}
