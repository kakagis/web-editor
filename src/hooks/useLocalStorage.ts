import { useCallback, useState, useEffect } from "react";

export default function useLocalStorage<T = unknown>(
    key: string,
    defaultValue: T
) {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === "function") {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return window.localStorage.removeItem(key);
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value, window.localStorage]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}
