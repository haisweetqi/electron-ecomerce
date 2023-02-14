import { createContext, useState } from 'react'
import { Cart } from '../types/cart.type'
import { Total } from '../types/total.type'
import { User } from '../types/user.type'
import { getAccessTokenFromLS, getCartToLS, getProfileFromLS, getTotalAmountToLS } from '../utils/auth'

/* Defining the shape of the context object. */
interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
  cart: Cart | null
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>
  total: Total | null
  setTotal: React.Dispatch<React.SetStateAction<Total | null>>
}

export const getInitialAppContext: () => AppContextInterface = () => {
  return {
    isAuthenticated: Boolean(getAccessTokenFromLS()),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    setProfile: () => null,
    cart: getCartToLS(),
    setCart: () => null,
    total: getTotalAmountToLS(),
    setTotal: () => null
  }
}

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(defaultValue.isAuthenticated)

  const [profile, setProfile] = useState(defaultValue.profile)
  const [cart, setCart] = useState(defaultValue.cart)
  const [total, setTotal] = useState(defaultValue.total)

  return (
    <AppContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, profile, setProfile, cart, setCart, total, setTotal }}
    >
      {children}
    </AppContext.Provider>
  )
}
