import {create} from 'zustand';
import { createJSONStorage, persist} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { storageInstance } from '../MMKVStorage';

type Goal = {id: string, dailyTargetAyah: number};

interface QuranGoals{
    goals: Goal[],
    dailyProgress: Record<string, number>,
    addGoal: (goal: Goal) => void;
    removeGoal: (id: string) => void;
    logProgress: (date: string, ayahs: number) => void;
}

export const useQuranGoalsStore = create<QuranGoals>()(
    persist(
        immer((set) => ({
                goals: [],
                dailyProgress: {},
                addGoal: (goal) => set((state) => {
                    state.goals.push(goal);
                }),
                removeGoal: (id) => set((state) => {
                    state.goals.filter((item:Goal) => item.id !== id)
                }),
                logProgress: (date, ayahs) => set((state) => state.dailyProgress[date]) //! 
        })), 
        {
            name: 'tazkiah-goals',
            storage: createJSONStorage(() => storageInstance),
        }
    )
)