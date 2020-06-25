import React, { useState, useContext, createContext } from 'react'
import { useRouter } from 'next/router'
import { whitelistedEndpoints } from './constants'
import * as api from '../client/index'

const authContext = createContext()

// Provider component that wraps your app and makes auth available
export function ProvideAuth ({ children }) {
  const router = useRouter()
  const auth = useProvideAuth()

  if (router && !whitelistedEndpoints.includes(router.pathname) && !auth.user) {
    auth.resume().catch(_ => {
      if (typeof window !== 'undefined') router.push('/signin')
    })
    return <>Loading...</>
  }

  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// Hook for child components to get the auth object and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext)
}

// Provider hook that creates auth object and handles state
function useProvideAuth () {
  const [user, setUser] = useState(null)

  const signin = async (body) => {
    const res = await api.login(body)
    return res
  }

  const completeLogin = async (body) => {
    const res = await api.completeLogin(body)
    if (res.success) setUser(res.user)
    return res
  }

  const signup = async (body) => {
    const res = await api.signup(body)
    return res
  }

  const logout = async () => {
    const res = await api.logout()
    if (res.success) setUser(undefined)
  }

  const resume = async () => {
    const res = await api.resume()
    if (res.success) setUser(res.user)
  }

  return {
    resume,
    completeLogin,
    user,
    signin,
    signup,
    logout
  }
}
