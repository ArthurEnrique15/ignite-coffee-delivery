import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../constants/coffees'

export type CartItem = Coffee & { amount: number }

interface ShopCartContextType {
  shopCart: CartItem[]
  addCoffeeInCart: (item: CartItem) => void
}

export const ShopCartContext = createContext({} as ShopCartContextType)

interface ShopCartContextProviderProps {
  children: ReactNode
}

export function ShopCartContextProvider({
  children,
}: ShopCartContextProviderProps) {
  const [shopCart, setShopCart] = useState<CartItem[]>([])

  console.log(shopCart)

  const addCoffeeInCart = (item: CartItem) => {
    const itemAlreadyExistsInCart = shopCart.find(
      (shopCartCartItem) => shopCartCartItem.id === item.id,
    )

    if (itemAlreadyExistsInCart) {
      setShopCart((state) => {
        return state.map((shopCartCartItem) => {
          if (shopCartCartItem.id === item.id) {
            return {
              ...shopCartCartItem,
              amount: shopCartCartItem.amount + item.amount,
            }
          }

          return shopCartCartItem
        })
      })
    } else {
      setShopCart((state) => {
        return [...state, item]
      })
    }
  }

  return (
    <ShopCartContext.Provider value={{ shopCart, addCoffeeInCart }}>
      {children}
    </ShopCartContext.Provider>
  )
}
