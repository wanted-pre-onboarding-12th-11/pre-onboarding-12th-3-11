import axios, {AxiosError} from 'axios';
import {MAX_SEARCH_LENGTH} from 'constants/constants';
import {useCallback, useReducer} from 'react';
import {searchItemType} from 'types/search';
import * as API from 'apis/search';
import {getCacheData, insertCache} from 'utils/searchTrieCache';

interface TypeSearchState {
    data: searchItemType[];
    isLoading: boolean;
    error: null | AxiosError;
}

type TypeAction =
    | {type: 'GET'; payload: searchItemType[]}
    | {type: 'ERROR'; payload: AxiosError}
    | {type: 'FETCHING'}
    | {type: 'INIT'};

const initState = {
    isLoading: false,
    error: null,
    data: [],
};
const reducer = (state: TypeSearchState, action: TypeAction) => {
    switch (action.type) {
        case 'GET': {
            const slicedData = action.payload.slice(0, MAX_SEARCH_LENGTH);
            return {...state, isLoading: false, data: slicedData};
        }
        case 'ERROR':
            return {...state, isLoading: false, error: action.payload};
        case 'FETCHING':
            return {...state, isLoading: true, error: null};
        case 'INIT':
            return initState;
        default:
            return state;
    }
};

const useRecsSearch = () => {
    const [state, dispatch] = useReducer(reducer, initState);

    const getRecsSearch = useCallback(async (queryKey: string, expireTime: number) => {
        const cachedData = getCacheData(queryKey);
        if (cachedData) {
            return dispatch({type: 'GET', payload: cachedData});
        }
        try {
            const res = await API.getRecsSearch(queryKey);
            insertCache(queryKey, {data: res.data, expireTime});
            dispatch({type: 'GET', payload: res.data});
        } catch (error) {
            if (axios.isAxiosError(error)) {
                dispatch({type: 'ERROR', payload: error});
            } else console.error(error);
        }
    }, []);

    const initSearchState = () => {
        return dispatch({type: 'INIT'});
    };

    return {state, getRecsSearch, initSearchState};
};

export default useRecsSearch;
