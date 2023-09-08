import {searchCacheStorage} from '../store/cacheStorage';
import * as Type from '../types/search';

type TypeCacheData = Type.searchItemType[] | [] | null;
type TypeExpireTime = number | null;
type TypeCreatedAt = number | null;

interface TypeCacheInfo {
    data: TypeCacheData;
    expireTime: TypeExpireTime;
    createdAt?: TypeCreatedAt;
}

interface InterfaceNode {
    value: string;
    data: TypeCacheData;
    expireTime: TypeExpireTime;
    createdAt: TypeCreatedAt;
    children?: InterfaceNodeObj;
}

interface InterfaceNodeObj {
    [key: string]: InterfaceNode;
}

class Node {
    value: string;
    data: TypeCacheData;
    expireTime: TypeExpireTime;
    createdAt: TypeCreatedAt;
    children: Node | object;
    constructor(
        value: string,
        data: TypeCacheData = null,
        expireTime: TypeExpireTime = null,
        createdAt: TypeCreatedAt = null
    ) {
        this.value = value;
        this.data = data;
        this.expireTime = expireTime;
        this.createdAt = createdAt;
        this.children = {};
    }
}

const rootObj = {root: new Node('')};

const getCurrentTime = () => {
    return new Date().getTime();
};

export const openCache = () => {
    const cachedData = searchCacheStorage.getItem();
    if (cachedData) {
        return;
    }
    return searchCacheStorage.setItem(JSON.stringify(rootObj));
};

export const isExpired = (cacheDataInfo: InterfaceNode) => {
    const {createdAt, expireTime} = cacheDataInfo;
    const currentTime = getCurrentTime();
    if (createdAt && expireTime && currentTime - createdAt > expireTime) {
        return true;
    }
    return false;
};

export const insertCache = (string: string, cacheInfo: TypeCacheInfo) => {
    try {
        const {data, expireTime} = cacheInfo;
        const newCache = searchCacheStorage.getItem();
        let currentNode = newCache.root;
        const lowerCaseString = string.toLowerCase();

        for (let i = 0; i < lowerCaseString.length; i++) {
            const char = lowerCaseString[i];
            const isChildrenNotHavingChar = !currentNode?.children[char];
            const isBeforeLastChar = i < lowerCaseString.length - 1;
            const isLastChar = i === lowerCaseString.length - 1;
            const isNeededDeleteData =
                !isLastChar && currentNode.expireTime !== null && isExpired(currentNode);

            if (isNeededDeleteData) {
                currentNode.data = null;
                currentNode.expireTime = null;
                currentNode.createdAt = null;
            }

            if (isChildrenNotHavingChar && isBeforeLastChar) {
                currentNode.children[char] = new Node(currentNode.value + char);
            }

            if (isLastChar) {
                currentNode.children[char] = new Node(
                    currentNode.value + char,
                    data,
                    expireTime,
                    getCurrentTime()
                );
            }

            currentNode = currentNode?.children[char];
            searchCacheStorage.setItem(JSON.stringify(newCache));
        }
    } catch (e) {
        console.error('캐시 순회 불가');
        openCache();
    }
};

const getMostSimilar = (string: string) => {
    openCache();

    try {
        const newCache = searchCacheStorage.getItem();
        let currentNode = newCache.root;
        const lowerCaseString = string.toLowerCase();

        for (const char of lowerCaseString) {
            const isNeededDeleteData = currentNode.expireTime !== null && isExpired(currentNode);

            if (isNeededDeleteData) {
                currentNode.data = null;
                currentNode.expireTime = null;
                currentNode.createdAt = null;
            }

            if (!currentNode?.children[char]) {
                return currentNode;
            }
            currentNode = currentNode?.children[char];
        }
        return currentNode;
    } catch (e) {
        console.error('캐시 순회 불가');
        openCache();
    }
};

export const getCacheData = (string: string) => {
    const lowerCaseString = string.toLowerCase();
    const similarNode = getMostSimilar(lowerCaseString);
    const similarData = similarNode?.data;

    const isNothingSimilar = similarNode?.value === '';
    const isSimilarNodeEmpty = similarData === null;
    const isSimilarHavingData = similarData;
    const isSameNodeValue = similarNode?.value === lowerCaseString;

    if (isNothingSimilar) {
        return false;
    }

    if (isSimilarNodeEmpty) {
        return false;
    }

    if (isSimilarHavingData) {
        if (isExpired(similarNode)) {
            return false;
        } else {
            if (isSameNodeValue) {
                return similarNode.data;
            }
            const newData = similarData.filter((rec: Type.searchItemType) =>
                rec.sickNm.toLowerCase().includes(lowerCaseString)
            );

            insertCache(lowerCaseString, {data: newData, expireTime: similarNode.expireTime});

            return newData;
        }
    }

    return false;
};
