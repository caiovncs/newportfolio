import React, { createContext, useState, ReactNode } from 'react'

interface FocusContextType {
  focusActive: boolean
  setFocusActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const FocusContext = createContext({} as FocusContextType)

interface ChildrenType {
  children: ReactNode
}

export function FocusProvider({ children }: ChildrenType) {
  const [focusActive, setFocusActive] = useState(false)

  return (
    <FocusContext.Provider value={{ focusActive, setFocusActive }}>
      {children}
    </FocusContext.Provider>
  )
}
