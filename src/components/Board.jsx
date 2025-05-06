import Square from './Square'

const Board = ({xIsNext, squares, onPlay}) => {
   
    // console.log(squares)

    const winner = calculateWinner(squares)
    let status

    if(winner){
        status = `Winner: ${winner}`
    }else if(!squares.includes(null)){
        status = "Its a draw!"
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }
    
    const handleClick = (i) =>{
        if(squares[i] || calculateWinner(squares)){ //This line is a guard clause that prevents a square from being clicked more than once.
            return
        }
        const nextSquares = squares.slice() // .slice() creates a shallow copy of the array. It’s like saying: "Give me a new array with the same elements as squares, but as a different object."
        //JavaScript objects and arrays are reference types. That means when React stores state (like an array in useState), it doesn't look at every value inside it — it just keeps a reference (a pointer) to the array in memory.
        if(xIsNext){
            nextSquares[i] = "X"
        }else{
            nextSquares[i] = "O"
        }

        onPlay(nextSquares)
        // setSquares(nextSquares)
        // setXIsNext(!xIsNext)
    }
  return (
    <div>
        <h2 className='font-bold text-lg mb-4'>{status}</h2>
      <div className='flex'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='flex'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='flex'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

export default Board


function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}




