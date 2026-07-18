import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { storageInstance } from '../MMKVStorage';

interface AuthStore{
   isAuthenticated: boolean;
   setIsAuthenticated: (isAuthenticated: boolean) => void;
   userId: string | null;
   setUserId: (userId: string) => void;
   accessToken: string | null;
   setAccessToken: (accessToken: string) => void;
   refreshToken: string | null;
   setRefreshToken: (refreshToken: string) => void;
   logIn: (userId: string, accessToken: string, refreshToken: string) => void;
   logOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            setIsAuthenticated: (isAuthenticated) => set({isAuthenticated}),
            userId: 'dfasdfasdf',
            setUserId: (userId) => set({userId}),
            accessToken: 'sdfasdf',
            setAccessToken: (accessToken) => set({accessToken}),
            refreshToken: 'sdfasdf',
            setRefreshToken: (refreshToken) => set({refreshToken}),
            logIn: (userId, accessToken, refreshToken) => {},
            logOut: () => {set({}, false)}
        }), 
        {
            name: 'tazkiah-auth',
            storage: createJSONStorage(() => storageInstance),
        }
    )
    
)