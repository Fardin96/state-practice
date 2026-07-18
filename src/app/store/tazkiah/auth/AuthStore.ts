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
            userId:null,
            accessToken:null,
            refreshToken:null,
            logIn: (userId, accessToken, refreshToken) => set({
                isAuthenticated: true, userId, accessToken, refreshToken
            }), 
            logOut: () => {set({
                isAuthenticated: false, userId: null, accessToken: null, refreshToken: null
            })} // ? what if i want to discard entire state on logout??? asking since true isn't working here!
        }), 
        {
            name: 'tazkiah-auth',
            storage: createJSONStorage(() => secureStorageInstance),
        }
    )
)