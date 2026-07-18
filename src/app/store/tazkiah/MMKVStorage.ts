
import { MMKVLoader } from 'react-native-mmkv-storage';
import {StateStorage} from 'zustand/middleware'

const storage = new MMKVLoader().withInstanceID('tazkiah-general').initialize();

const mmkvStorage: StateStorage = {
    getItem: (name) => storage.getString(name) ?? null,
    setItem: (name, value) => storage.setString(name, value),
    removeItem: (name) => storage.removeItem(name),
}

export const storageInstance = mmkvStorage;