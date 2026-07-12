import {create} from 'zustand'
import {combine} from 'zustand/middleware'

// create board grid/square value 
export const useGameBoard = create(
    combine({ history: [Array(9).fill(null)], isXNext: true }, (set) => {
        return {
            setHistory: (newHistory) => {
                set((state) => ({
                    history: 
                        typeof newHistory === 'function' ?
                            newHistory(state.history) :
                            newHistory
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