import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import {storageInstance} from './MMKVStorage'

type Theme = 'light' | 'dark';
type Language = 'en' | 'bn';

interface SettingsStore{
    theme: Theme;
    setTheme: (theme: Theme) => void;
    language: Language; 
    setLanguage: (input: Language) => void;
    notificaitonsEnabled: boolean;
    setNotificationsEnabled: (input: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
persist(
    (set) => ({
        theme: 'light',
        setTheme: (theme) => set({ theme }),
        language: 'en',
        setLanguage: (language) => set({ language }),
        notificaitonsEnabled: true,
        setNotificationsEnabled: (notificaitonsEnabled) => set({ notificaitonsEnabled }),
    }),
    {
        name: 'tazkiah-settings',
        storage: createJSONStorage(() => storageInstance)
    }
));
