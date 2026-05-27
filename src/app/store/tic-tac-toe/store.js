import {create} from 'zustand'
import {combine} from 'zustand/middleware'

// create board grid/square value 
export const useGameBoard = create(combine({
    squares: Array(9).fill(null), isXNext: false
}, (set) => ((newSquares) => ({
    setSquares: (newSquares === typeof function) ? set(newSquares) : newSquares
})),
    (set) => ((newIsXNext) => ({
    setNewIsXNext: (newIsXNext === typeof function) ? set(newIsXNext) : newIsXNext
    }))
))
