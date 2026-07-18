import {create} from 'zustand';
import { persist } from 'zustand/middleware';

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
        (set) => ({}), {}))