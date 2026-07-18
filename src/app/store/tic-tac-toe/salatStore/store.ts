import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

interface SalatState{
    streak: number;
    resetDays: (date: string) => void;
    completedPrayer: Record<string, string[]>;
    markDone: (date: string, prayer: string) => void;
}

export const useSalatStore = create<SalatState>()(
    immer((set) => ({
            completedPrayer: {},
            streak: 0,
            resetDays: (date: string) => set((state) => {
                state.completedPrayer[date]  = [];
            }),
            markDone: (date: string, prayer: string) => set((state) => {
                if(!state.completedPrayer[date]) state.completedPrayer[date] = [];
                state.completedPrayer[date].push(prayer);
            })
    }))
);
