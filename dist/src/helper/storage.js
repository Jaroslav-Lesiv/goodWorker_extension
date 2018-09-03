const Storage = class {
    constructor() {
        this.browser = window.chrome
    }

    get(key) {
        return new Promise( (res, rej) => {
            console.info(`Try to get property ${key} to browser storage`)
            this.browser.storage.sync.get([key], data => {
                const result = data[key] || null
                res(result)
            });
        } )
    }

    set(key, value) {
        return new Promise( (res, rej) => {
            console.info(`Try to set property ${key} to browser storage with value ${JSON.stringify(value)}`)
            this.browser.sync.set({[key]: value}, () => {
                console.log('Value is set to ' + value);
                res(true)
              });
        })
    }

    async update(key, value) {
        const prev = await this.get(key)
        let next
        if (Array.isArray(prev)) {
            next = [...prev, value]
        } else if (typeof(prev) === 'object') {
            next = {...prev, ...value}
        } else {
            next = value
        }
        this.set(key, next)
    }
}
const storage = new Storage()
export { storage }