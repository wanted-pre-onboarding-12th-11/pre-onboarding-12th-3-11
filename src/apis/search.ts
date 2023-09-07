import {searchAPI} from './instance';

export const getRecsSearch = async (search: string) => {
    console.info('calling api');

    const response = await searchAPI.get('?sickNm_like=' + search);
    return response;
};
