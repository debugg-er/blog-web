'use client'

import React, { useContext } from 'react'

import { User } from '@/types/user'

export type AuthContextValue = {
  user: User
}
export const AuthContext = React.createContext({} as AuthContextValue)

export const useAuth = () => useContext(AuthContext)

type AuthProviderProps = {
  user: User
  children: React.ReactNode
}
export function AuthProvider({ user, children }: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
