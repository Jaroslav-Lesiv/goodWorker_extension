const Cmd = class {
    contructor() {
        this.browser = window.chrome
    }

    do({
        cmd,
        data
    }) {
        console.info(`trying to do cmd: ${cmd} with data: ${JSON.stringify(data)}`)
        console.time(cmd)
        return new Promise((res, rej) => {
            try {
                window.chrome.runtime.sendMessage({
                    cmd
                }, response => {
                    console.log(`SUCCESS: trying to do cmd: ${cmd} with data: ${JSON.stringify(data)}, time: ${console.timeEnd(cmd)}`)
                    res(response)
                });
            } catch (error) {
                console.warn(`FAILED: trying to do cmd: ${cmd} with data: ${JSON.stringify(data)}, time: ${console.timeEnd(cmd)}`)
                rej(error)
            }
        })
    }

    doGet({
        cmd
    }) {
        console.info(`trying to doGet cmd: ${cmd} `)
        console.time(cmd)
        return new Promise((res, rej) => {
            try {
                window.chrome.runtime.sendMessage({
                    cmd
                }, json => {
                    console.log(`SUCCESS: trying to doGet cmd: ${cmd} , time: ${console.timeEnd(cmd)}`)
                    const response = json ? JSON.parse(json) : json
                    res(response)
                });
            } catch (error) {
                console.warn(`FAILED: trying to doGet cmd: ${cmd} , time: ${console.timeEnd(cmd)}`)
                rej(error)
            }

        })
    }

    doSet({
        cmd,
        data
    }) {
        console.info(`trying to doSet cmd: ${cmd} with data: ${JSON.stringify(data)}`)
        console.time(cmd)
        return new Promise((res, rej) => {
            try {
                // const json = JSON.stringify(data)
                window.chrome.runtime.sendMessage({
                    cmd,
                    data
                }, response => {
                    console.log(`SUCCESS: trying to doSet cmd: ${cmd} with data: ${JSON.stringify(data)}, time: ${console.timeEnd(cmd)}`)
                    res(response)
                });
            } catch (error) {
                console.warn(`FAILED: trying to doSet cmd: ${cmd} with data: ${JSON.stringify(data)}, time: ${console.timeEnd(cmd)}`)
                rej(error)
            }
        })
    }

}

const cmd = new Cmd()
export {
    cmd
}