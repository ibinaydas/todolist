import { useState, useEffect } from 'react';

export default (key, initialValue) => {
    const [store, setStore] = useState(() => {
        const savedData = localStorage.getItem(key);
        return savedData ? JSON.parse(savedData) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(store));
    }, [key, store]);
    return [store, setStore];
};