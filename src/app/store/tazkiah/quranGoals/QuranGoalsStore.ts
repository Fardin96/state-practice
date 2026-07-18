import {create} from 'zustand';
import { createJSONStorage, persist} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { storageInstance } from '../MMKVStorage';

interface QuranGoals{
    goals: {id: number, dailyTargetAyah: number}[],
    dailyProgress: Record<string, number>,
    addGoal: (goal: {id: string; dailyTargetAyah: number}) => void;
    removeGoal: (id: string) => void;
    logProgress: (date: string, ayahs: number) => void;
}

export const useQuranGoalsStore = create<QuranGoals>()(
    persist(
        immer((set) => ({
                goals: [{}],
                dailyProgress: {},
                addGoal: (goal) => set({}),
                removeGoal: (id) => set({}),
                logProgress: (id) => set({})
        })), 
        {
            name: 'tazkiah-goals',
            storage: createJSONStorage(() => storageInstance),
        }
    )
)