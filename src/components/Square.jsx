import React, {useState} from 'react'

const Square = ({value, onSquareClick}) => {

    const handleClick = () =>{

    }
  return (
    <>
        <button 
        onClick={onSquareClick} 
        className='bg-white border border-gray-400 h-30 w-30 m-1 leading-9 text-lg cursor-pointer'>{value}</button>
    </>
  )
}

export default Square
