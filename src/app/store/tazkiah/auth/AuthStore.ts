import {create} from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { secureStorageInstance } from '../MMKVStorage';

interface AuthStore{
   isAuthenticated: boolean;
   userId: string | null;
   accessToken: string | null;
   refreshToken: string | null;
   logIn: (userId: string, accessToken: string, refreshToken: string) => void;
   logOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            isAuthenticated: false,
            userId: 'dfasdfasdf',
            accessToken: 'sdfasdf',
            refreshToken: 'sdfasdf',
            logIn: (userId, accessToken, refreshToken) => set({
                isAuthenticated: true, userId, accessToken, refreshToken
            }), // ??? validate and store using actions, kinda cheated
            logOut: () => {set({
                isAuthenticated: false
            }, true)} // ?? true gives ts errors!: no overload matches this call
        }), 
        {
            name: 'tazkiah-auth',
            storage: createJSONStorage(() => secureStorageInstance),
        }
    )
)