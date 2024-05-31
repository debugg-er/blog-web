'use client'

import React, { useContext } from 'react'

import { useDisclosure } from '@/hooks/useDisclosure'

export type AuthContextValue = ReturnType<typeof useDisclosure>
export const ModalCreateNoteContext = React.createContext({} as AuthContextValue)

export const useCreateNoteModal = () => useContext(ModalCreateNoteContext)

type ModalCreateNoteProviderProps = {
  children: React.ReactNode
}
export function ModalCreateNoteProvider({ children }: ModalCreateNoteProviderProps) {
  const states = useDisclosure()

  return <ModalCreateNoteContext.Provider value={states}>{children}</ModalCreateNoteContext.Provider>
}
