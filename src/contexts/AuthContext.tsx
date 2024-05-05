'use client'

import { AxiosResponse } from 'axios'
import React, { useContext } from 'react'
import { useMutation, UseMutationResult } from '@tanstack/react-query'

import { loginUserPass, LoginUserPassPayload, logout } from '@/api'
import { User } from '@/types/user'

export type AuthContextValue = {
    user: User | null,
    loginEmailPass: UseMutationResult<AxiosResponse, Error, LoginUserPassPayload, unknown>
    logout: UseMutationResult<AxiosResponse, Error, void, unknown>
}
export const AuthContext = React.createContext({} as AuthContextValue)

export const useAuth = () => useContext(AuthContext)

type AuthProviderProps = {
    user: User | null
    children: React.ReactNode
}
export function AuthProvider({ user, children }: AuthProviderProps) {
    const loginEmailPassMulation = useMutation({ mutationFn: loginUserPass })
    const logoutMultation = useMutation({ mutationFn: logout })

    return <AuthContext.Provider value={{
        user,
        loginEmailPass: loginEmailPassMulation,
        logout: logoutMultation
    }}>{children}</AuthContext.Provider>
}
