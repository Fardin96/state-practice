'use client'
import {useGameBoard} from '../../store/tic-tac-toe/store'
import Square from '../Square/Square'
import {calculateWinner, turnsLeft, calculateStatus} from '../utils/utils'

export default function Board() {
  const squares = useGameBoard((state) => state.squares)
  const setSquares = useGameBoard((state) => state.setSquares)
  const isXNext = useGameBoard((state) => state.isXNext)
  const setIsXNext = useGameBoard((state) => state.setIsXNext)

  const player = isXNext ? 'X' : 'O';

    // helpers 
  const winner = calculateWinner(squares);
  const turns = turnsLeft(squares);
  const status = calculateStatus(turns, winner, player);


  function handleClick(index){
    if(squares[index]) return;
    const newSquares = squares.slice();
    newSquares[index] = player
    setSquares(newSquares)
    setIsXNext(!isXNext)
  }


  
    return (
      <>
      <div style={{marginBottom: '0.5rem'}}>
        {status}
      </div>

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
        <Square key={index} value={item} onSquareClick={() => handleClick(index)} />
      ))}
      </div>

      </>
    )
  }