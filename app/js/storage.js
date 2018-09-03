
const Storage = class {
    constructor() {
        this.browser = window.chrome
    }

    get(key, _type) {
        return new Promise((res, rej) => {
            console.log(`Try to get property from browser storage`, `key:`, key)
            chrome.storage.sync.get([key], data => {
                const result = data[key] || _type || null
                res(result)
            });
        })
    }

    set(key, value) {
        return new Promise((res, rej) => {
            console.log(`Try to set property to browser storage`, `key:`, key, `value:`, value)
            chrome.storage.sync.set({ [key]: value }, () => {
                res(true)
            });
        })
    }

    async update(key, value) {
        const prev = await this.get(key)
        let next
        if (Array.isArray(prev)) {
            next = [...prev, value]
        } else if (typeof (prev) === 'object') {
            next = { ...prev, ...value }
        } else {
            next = value
        }
        this.set(key, next)
    }
}
const storage = new Storage()