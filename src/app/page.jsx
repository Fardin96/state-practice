'use client'
import {create} from 'zustand'
import Board from '../app/tic-tac-toe/board/Board'
import { useGameBoard } from './store/tic-tac-toe/store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Tanstack from '../app/tanStack/TanStack'

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
}))

export default function Home() {
  const queryClient = new QueryClient();
  
  const history = useGameBoard((state) => state.history)
  const setHistory = useGameBoard((state) => state.setHistory)
  const currentMove = useGameBoard((state) => state.currentMove)
  const setCurrentMove = useGameBoard((state) => state.setCurrentMove)
  const currentSquares = history[currentMove]
  const isXNext = currentMove % 2 === 0

  const count = useCounter(state => state.count)
  const increment = useCounter(state => state.increment)
  const decrement = useCounter(state => state.decrement)
  
  function handlePlay(newSquares){
    const newHistory = history.slice(0, currentMove + 1).concat([newSquares]);
    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1)
  }

  function handleJumpTo(nextMove){
    setCurrentMove(nextMove)
  }

  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Count: {count}
          </h1>

          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>
              increment
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>
              decrement
            </button>
          </div>

          <Board squares={currentSquares} isXNext={isXNext} handlePlay={handlePlay}/>

          <div>
            <ol>
              {history.map((_, index) =>  {
                const description = index > 0 ? 'Go to game #' + index : 'Go to game Start';
                
                return (
                  <li key={index} className={index === currentMove ? 'font-bold' : ''}>
                    <button onClick={() => handleJumpTo(index)}>{description}</button>
                  </li>
                );
              })}
            </ol>
          </div>

        <Tanstack />
        
        </div>
      </main>
    </div>
</QueryClientProvider>
  );
}
