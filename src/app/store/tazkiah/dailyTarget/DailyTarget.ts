import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storageInstance } from '../MMKVStorage';
import { immer } from 'zustand/middleware/immer';

type ListItem = {id: string, label: string, done: boolean};

interface DailyTarget{
    checklist: ListItem[],
    addItems: (label: string) => void;
    toggleItems: (id: string) => void;
    incrementProgress: (source: string) => void;
}

export const useDailyTarget = create<DailyTarget>()(
    persist(
        immer((set) => ({
            checklist: [],
            addItems: (label) => set((state) => state.checklist.push({id: Date.now().toString() + Math.random().toString(36).slice(2), label, done: false})), 
            toggleItems: (id) => set((state) => state.checklist.forEach((item, _, array) => {
                if(item.id === id) {
                    item.done = !item.done;
                }
            })), 
            incrementProgress: (source) => set({}) // ? which state does this belong to??
        })),
        {
            name: 'tazkiah-targets',
            storage: createJSONStorage(() => storageInstance),
        }
    )
)