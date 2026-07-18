import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storageInstance } from '../MMKVStorage';
import { immer } from 'zustand/middleware/immer';

interface DailyTarget{
    checklist: {id: string, label: string, done: boolean}[],
    addItems: (label: string) => void;
    toggleItems: (label: string) => void;
    incrementProgress: (source: string) => void;
}

export const useDailyTarget = create<DailyTarget>()(
    persist(
        immer((set) => ({
            checklist: [{}],
            addItems: (label) => set({}),
            toggleItems: (label) => set({}),
            incrementProgress: (source) => set({})
        })),
        {
            name: 'tazkiah-targets',
            storage: createJSONStorage(() => storageInstance),
        }
    )
)