import React, {useState} from 'react'
import Board from './Board'
import History from './History'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [xIsNext, setXIsNext] = useState(true)
    const [currentMove, setCurrentMove] = useState(0)
    // console.log(history)

    const currentSquares = history[currentMove]

    const handlePlay = (nextSquares) =>{
        setXIsNext(!xIsNext)
        const nextHistory = [...history.slice(0, currentMove +1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }

    const jumpTo = (move) =>{
        setCurrentMove(move);
        setXIsNext(move % 2 === 0)
    }


    const moves = history.map((squares, move) =>{
        let description
        if(move > 0){
            description = `Go to the move # ${move}`
        }else{
            description = `Go to start the game`
        }
        return (
            <li key={move} className='bg-gray-700 text-white mb-2 p-3 rounded-sm'>
                <button onClick={() =>jumpTo(move)} className='cursor-pointer'>{description}</button>
            </li>
        )
    })
  return (
    <div className='min-h-screen flex justify-center items-center bg-blue-400'>
      <div className='bg-white p-8 rounded-2xl shadow-xl mr-16'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='border border-gray-400 p-2 text-lg'>
        <History moves={moves}/>
      </div>
    </div>
  )
}

export default Game
