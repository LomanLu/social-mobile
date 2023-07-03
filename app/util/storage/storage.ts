import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageTypes} from "./storage.types";

let storageCache: Storage | undefined = undefined
let defaultExpires = 1000 * 3600 * 24
let size = 1000

const storage = new Storage({
    // maximum capacity, default 1000 key-ids
    size: size,

    // Use AsyncStorage for RN apps, or window.localStorage for web apps.
    // If storageBackend is not set, data will be lost after reload.
    storageBackend: AsyncStorage, // for web: window.localStorage

    // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: defaultExpires,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
        // we'll talk about the details later.
    }
});

const _storage = {
    saveData(key: string | StorageTypes, data: any, expires?: number | null) {
        return storage.save({key: key, data: data, expires: expires})
    },

    loadData<T>(key: string | StorageTypes) :Promise<T> {
        return storage.load({
            key: key,
            autoSync: false
        })
    },

    getIdsForKey(key: string | StorageTypes) {
        return storage.getIdsForKey(key)
    },

    getAllDataForKey(key: string | StorageTypes) {
        return storage.getAllDataForKey(key)
    },

    clearMapForKey(key: string | StorageTypes) {
        return storage.clearMapForKey(key)
    },

    removeForKey(key: string | StorageTypes) {
        return storage.remove({key: key})
    },

    clearMap() {
        return storage.clearMap()
    },
}

export {_storage as cache}
