export const isValidKeyword = (string: string) => {
    const regex = string.replace(/[ㄱ-ㅎㅏ-ㅣ]/gi, '');
    return regex;
};
