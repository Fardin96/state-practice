'use client'
import {create} from 'zustand'
import Board from '../app/tic-tac-toe/board/Board'
import { useGameBoard } from './store/tic-tac-toe/store'

const useCounter = create((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count - 1})),
}))

export default function Home() {
  const history = useGameBoard((state) => state.history)
  const setHistory = useGameBoard((state) => state.setHistory)
  const isXNext = useGameBoard((state) => state.isXNext)
  const setIsXNext = useGameBoard((state) => state.setIsXNext)
  const currentSquares = history[history.length - 1]

  const count = useCounter(state => state.count)
  const increment = useCounter(state => state.increment)
  const decrement = useCounter(state => state.decrement)
  
  function handlePlay(newHistory){
    setHistory(history.concat([newHistory]))
    setIsXNext(!isXNext)
  }

  return (
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
        </div>
      </main>
    </div>
  );
}
