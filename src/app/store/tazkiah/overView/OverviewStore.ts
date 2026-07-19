import {create} from 'zustand'
import {useSalatStore} from '../salatStore/SalatStore'
import {useQuranGoalsStore} from '../quranGoals/QuranGoalsStore'

interface OverviewStore{
    streak: number,
    completionRate: number,
    quranProgressToday: number,
    recalculate: () => void;
}

export const useOverviewStore = create<OverviewStore>(
    (set) => ({
        streak: 0,
        completionRate: 0,
        quranProgressToday: 0,
        recalculate: () => set({
            streak: useSalatStore.getState().streak,
            // completionRate: useSalatStore.getState().completedPrayers // completion rate of what? completedPrayers? of today's date?
            // quranProgressToday: useQuranGoalsStore.getState().dailyProgress // needs date to get today's progress
        })
    })
)
