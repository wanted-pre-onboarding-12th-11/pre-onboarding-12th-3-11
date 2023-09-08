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
            console.error('로컬 스토리지 세팅 에러');
            this.setItem('');
        }
    }
}
