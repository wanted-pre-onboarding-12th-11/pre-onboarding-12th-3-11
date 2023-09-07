import {useCallback, useState} from 'react';

interface TypeFocusingHook {
    onKeydownFocusing: (e: React.KeyboardEvent) => void;
    keyBoardFocusingIdx: number | null;
    initFocusingIdx: () => void;
}

const useKeyboard = (dataLength: number): TypeFocusingHook => {
    const [keyBoardFocusingIdx, setKeyboardFocusingIdx] = useState<number | null>(null);

    const onKeydownFocusing = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.nativeEvent.isComposing) return;
            if (e.key === 'ArrowDown') {
                if (keyBoardFocusingIdx === null) {
                    setKeyboardFocusingIdx(0);
                } else if (keyBoardFocusingIdx < dataLength - 1) {
                    setKeyboardFocusingIdx(prev => (prev !== null ? prev + 1 : prev));
                }
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (keyBoardFocusingIdx === 0) {
                    setKeyboardFocusingIdx(null);
                } else if (keyBoardFocusingIdx !== null && keyBoardFocusingIdx > 0) {
                    setKeyboardFocusingIdx(prev => (prev ? prev - 1 : prev));
                }
            }
        },
        [dataLength, keyBoardFocusingIdx]
    );

    const initFocusingIdx = useCallback(() => {
        setKeyboardFocusingIdx(null);
    }, []);

    return {
        onKeydownFocusing,
        keyBoardFocusingIdx,
        initFocusingIdx,
    };
};

export default useKeyboard;
