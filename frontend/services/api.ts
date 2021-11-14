import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies';
import { signOut } from '../context/AuthContext';

let cookies = parseCookies(); //let variable able it to mutable
let isRefreshing = false;
let failedRequestsQueue = [];

//this part execute on user logged in
export const api = axios.create({
    baseURL: 'http://localhost:5555',
    headers: {
        Authorization: `Bearer ${cookies['nextauth.token']}`
    }
});

//this part refresh during seccion
api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError) => {
    if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
            //refresh token
            cookies = parseCookies();

            const { 'nextauth.refreshToken': refreshToken } = cookies;
            const originalConfig = error.config

            if (!isRefreshing) {
                isRefreshing = true

                api.post('/refresh', {
                    refreshToken,
                }).then(response => {
                    const { token } = response.data;

                    //using nookies to create the nextJS cookies  
                    setCookie(undefined, 'nextauth.token', token, {
                        maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
                        path: '/' //any adres you have acces to this cookie, this means that this is a global cookie
                    })

                    setCookie(undefined, 'nextauth.refreshToken', response.data.refreshToken, {
                        maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
                        path: '/' //any adres you have acces to this cookie, this means that this is a global cookie
                    })

                    api.defaults.headers['Authorization'] = `Bearer ${token}`;

                    failedRequestsQueue.forEach(request => request.onSuccess(token))
                    failedRequestsQueue = [];
                }).catch(err => {
                    failedRequestsQueue.forEach(request => request.onSuccess(err))
                    failedRequestsQueue = [];
                }).finally(() => {
                    isRefreshing = false
                });
            }

            //this Promisse will make a async function, axios do not allow as async/await
            return new Promise((resolve, reject) => {
                failedRequestsQueue.push({
                    onSuccess: (token: string) => {
                        originalConfig.headers['Authorization'] = `Bearer ${token}`

                        resolve(api(originalConfig))
                    },
                    onFailure: (err: AxiosError) => {
                        reject(err)
                    }
                })
            })
        } else {
            //user will be logged out
            signOut();
        }
    }

    return Promise.reject(error);
})