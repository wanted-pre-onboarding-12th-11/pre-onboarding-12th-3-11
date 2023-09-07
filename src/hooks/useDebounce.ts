import {useRef} from 'react';

const useDebounce = () => {
    const timer = useRef<NodeJS.Timer | null>(null);
    return (cb: () => void, debounceTime: number) => {
        timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(cb, debounceTime);
    };
};

export default useDebounce;
