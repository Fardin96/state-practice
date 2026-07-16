import {create} from 'zustand'

interface SalatState{
    streak: number;
    resetDays: (date: string) => void;
    completedPrayer: Record<string, string[]>;
    markDone: (date: string, prayer: string) => void;
}

const store = create<SalatState>((set) => ({
    streak: 0,
    resetDays: (date: string) => {}
    completedPrayer: ,
    markDone: (date: string, prayer: string) => {},
}))
