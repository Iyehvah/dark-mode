import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    const [storedValue, setstoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    
    const setValue = value => {
        // save state
        setstoredValue(value);
        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };


    return [storedValue, setValue];

}