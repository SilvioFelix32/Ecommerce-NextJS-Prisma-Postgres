export const userKey = '__usuario-inicial'
export const baseApiUrl = 'http://lolcalhost:3003'  /* POSTGRES PORT */

export function showError(e) { /* e = error, SEND A ERROR MSG TO backend */
    if(e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }