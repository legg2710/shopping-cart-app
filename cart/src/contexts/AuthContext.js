import React, { useContext,userState } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
const [currentUser, setCurrentUser] = userState()

function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

    const value = {
        currentUser
    }

  return (
   <AuthContext.Provider value={value}>
    {children}
   </AuthContext.Provider>
  )
}
