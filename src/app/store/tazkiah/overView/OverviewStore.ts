import {create} from 'zustand'

interface OverviewStore{
    streak: number,
    completionRate: number,
    recalculate: () => void;
}

export const useOverviewStore = create<OverviewStore>(
    (set) => ({
        streak: 0,
        completionRate: 0,
        recalculate: () => set({})
    })
)
