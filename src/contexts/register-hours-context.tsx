import { PropsWithChildren, createContext, useContext, useState } from "react"

interface RegisterHoursContextProps {
  registerHours: number
  setRegisterHours: React.Dispatch<React.SetStateAction<number>>
}

const RegisterHoursContext = createContext({} as RegisterHoursContextProps)

export function RegisterHoursProvider({ children }: PropsWithChildren) {
  const [registerHours, setRegisterHours] = useState(0)

  const values = {
    registerHours,
    setRegisterHours,
  }

  return (
    <RegisterHoursContext.Provider value={values}>
      {children}
    </RegisterHoursContext.Provider>
  )
}

export function useRegisterHours() {
  const context = useContext(RegisterHoursContext)

  if (!context) {
    throw new Error(
      "useRegisterHours must be used within a RegisterHoursProvider",
    )
  }

  return context
}
