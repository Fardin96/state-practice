import { MMKVLoader } from 'react-native-mmkv-storage';
import {StateStorage} from 'zustand/middleware'

const storage = new MMKVLoader().withInstanceID('tazkiah-general').initialize();

const mmkvStorage: StateStorage = {
    getItem: (name) => storage.getString(name) ?? null,
    setItem: (name, value) => storage.setString(name, value),
    removeItem: (name) => storage.removeItem(name),
}

const secureStorage = new MMKVLoader().withEncryption().withInstanceID('tazkiah-secure').initialize();

const mmkvSecureStorage: StateStorage = {
    getItem: (name) => secureStorage.getString(name) ?? null,
    setItem: (name, value) => secureStorage.setString(name, value),
    removeItem: (name) => secureStorage.removeItem(name),
}

export const storageInstance = mmkvStorage;
export const secureStorageInstance = mmkvSecureStorage;