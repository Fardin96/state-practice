'use client'
import Square from '../Square/Square'
import {calculateWinner, turnsLeft, calculateStatus} from '../utils/utils'

export default function Board({squares, isXNext, handlePlay}) {
  // helpers 
  const player = isXNext ? 'X' : 'O';
  const winner = calculateWinner(squares);
  const turns = turnsLeft(squares);
  const status = calculateStatus(turns, winner, player);
  
  function handleClick(index){
    if(squares[index] || winner) return;
    const newSquares = squares.slice();
    newSquares[index] = player
    handlePlay(newSquares)
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