import {create} from 'zustand'
import {combine} from 'zustand/middleware'

// create board grid/square value 
export const useGameBoard = create(
    combine({ squares: Array(9).fill(null), isXNext: true }, (set) => {
        return {
            setSquares: (newSquares) => {
                set((state) => ({
                    squares: 
                        typeof newSquares === 'function' ?
                            newSquares(state.squares) :
                            newSquares
                }))
            },            
            setIsXNext: (newIsXNext) => {
                set((state) => ({
                    isXNext: 
                        typeof newIsXNext === 'function' ?
                            newIsXNext(state.isXNext) :
                            newIsXNext
                }))
            },            
        }
    })
)