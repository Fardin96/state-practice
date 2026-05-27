import {useGameBoard} from '../../store/tic-tac-toe/store'
import Square from '../Square/Square'

export default function Board() {
  const squares = useGameBoard((state) => state.squares)
  const setSquares = useGameBoard((state) => state.setSquares)
  const isXNext = useGameBoard((state) => state.isXNext)
  const setIsXNext = useGameBoard((state) => state.setIsXNext)

  const player = isXNext ? 'X' : 'O';

  function handleClick(index){
    if(squares[index]) return;
    const newSquares = squares.slice();
    newSquares[index] = player
    setSquares(newSquares)
    setIsXNext(!player)
  }

  function isGameOver(){
    return squares.filter(square => !square).length
  }

  // calc winner -> calc status
  // set array of winningLines
  // if 3 in a row, then check a===b && a===c
  // return a 
  // return null

  // calc status -> handleclick
  // winningLines -> calcWinner
  // isGameOver && !winner -> Draw!
  // ???
  
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 'calc(3 * 2.5rem)',
          height: 'calc(3 * 2.5rem)',
          border: '1px solid #999',
        }}
      >
      {squares.map((item, index) => (
        <Square key={index} value={item} onSquareClick={handleClick} />
      ))}
      </div>
    )
  }