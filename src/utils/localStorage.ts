export class LocalStorage {
    key: string;
    constructor(key: string) {
        this.key = key;
    }

    getItem() {
        try {
            return JSON.parse(localStorage.getItem(this.key)!);
        } catch (e) {
            console.error('파싱이 안되는 캐시 구조');
            this.setItem('');
        }
    }

    setItem(value: string) {
        try {
            return JSON.stringify(localStorage.setItem(this.key, value));
        } catch (e) {
            console.error('유효하지 않은 value 값 추가');
            this.setItem('');
        }
    }
}
