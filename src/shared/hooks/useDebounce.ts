import { useEffect, useState } from 'react';

export function useDebounce(value: string | undefined, delay = 400) {
    const [debouncedValue, setDebouncedValue] = useState<string | undefined>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

