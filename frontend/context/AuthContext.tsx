import { createContext, ReactNode, useEffect, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router'
import { api } from '../services/api';

type User = {
    name: string;
    email: string;
    roles: string[];
}

type signInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: signInCredentials): Promise<void>;
    signOut(): Promise<void>;
    user: User;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()

        if (token) {
            api.get('/user').then(response => {
                const { name, email, roles } = response.data

                setUser({ name, email, roles })
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

            const { token, refreshToken, user } = response.data;

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
                name: user.name as string,
                email: user.email as string,
                roles: user.role
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            Router.push('/dashboard'); //SELECT THE PAGE YOU WANT TO OPEN NEXT
        } catch (err) {
            console.log(err)
        }
    }

    async function signOut() {
        setUser(null)

        Router.push('/')
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider>
    )
}