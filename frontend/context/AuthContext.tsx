import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router'
import { api } from '../services/api';

type User = {
    email: string;
    permissions: string[];
    roles: string[];
}

type signInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: signInCredentials): Promise<void>;
    user: User;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    destroyCookie(undefined, 'nextauth.token')
    destroyCookie(undefined, 'nextauth.refreshToken')

    Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()

        if (token) {
            api.get('/user').then(response => {
                const { email, permissions, roles } = response.data

                setUser({ email, permissions, roles })
            }).catch(() => {
                signOut();
            })
        }
    }, [])

    async function signIn({ email, password }: signInCredentials) {
        try {
            const response = await api.post('session', {
                email,
                password
            })

            const { token, refreshToken, permissions, roles } = response.data;

            //using nookies to create the nextJS cookies  
            setCookie(undefined, 'nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
                path: '/' //any adres you have acces to this cookie, this means that this is a global cookie
            })
            setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, //this set the time tha the cookie will be stored = 30 days
                path: '/' //any adres you have acces to this cookie, this means that this is a global cookie
            })

            setUser({
                email,
                permissions,
                roles,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard'); //SELECT THE PAGE YOU WANT TO OPEN NEXT
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}