// // const onBlur = () => {
// //     
// //     localStorage.setItem(sait, '0')
// // }
// const SiteTimer = class {
//     constructor() {
//         this.count = 0
//         this.timer = null
//     }

//     startTimer() {
//         this.timer && clearTimeout(this.timer)
//         this.timer = setTimeout( () => this.tick(), 1000 )
//     }

//     tick() {
//         ++this.count
//         console.log('tick')
//         this.timer = setTimeout( () => this.tick(), 1000 )
//     }

//     stopTimer() {
//         this.timer && clearTimeout(this.timer)
//         // this.sendTimer({ count: this.count, cmd: 'stop_site_timer' })
//         console.log(this.count)
//         this.count = 0
//     }

//     sendTimer({ count, cmd }) {
//         chrome.runtime.sendMessage({ cmd, data: count });
//     } 
// }
// const siteTimer = new SiteTimer()
// window.addEventListener('focus', () => {
//     siteTimer.startTimer()
// })
// window.addEventListener('blur', () => {
//     const visibility = document.webkitVisibilityState == 'visible'
//     siteTimer.stopTimer()
// })
// siteTimer.startTimer()


