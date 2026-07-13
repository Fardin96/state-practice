import {create} from 'zustand'
import {combine} from 'zustand/middleware'

// create board grid/square value 
export const useGameBoard = create(
    combine({ history: [Array(9).fill(null)], currentMove: 0 }, (set) => {
        return {
            setHistory: (newHistory) => {
                set((state) => ({
                    history: 
                        typeof newHistory === 'function' ?
                            newHistory(state.history) :
                            newHistory
                }))
            },            
            setCurrentMove: (newCurrentMove) => {
                set((state) => ({
                    currentMove: typeof newCurrentMove === 'function' ?
                        newCurrentMove(state.currentMove)
                        : newCurrentMove
                }))
            }            
        }
    })
)