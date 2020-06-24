import React from 'react'

// Context for auth'd user
export const UserContext = React.createContext({
  user: undefined,
  setUser: () => {}
})
