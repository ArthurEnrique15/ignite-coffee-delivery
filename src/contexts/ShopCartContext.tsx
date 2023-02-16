import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../constants/coffees'

type Item = Coffee & { amount: number }

interface ShopCartContextType {
  shopCart: Item[]
  addCoffeeInCart: (item: Item) => void
}

export const ShopCartContext = createContext({} as ShopCartContextType)

interface ShopCartContextProviderProps {
  children: ReactNode
}

export function ShopCartContextProvider({
  children,
}: ShopCartContextProviderProps) {
  const [shopCart, setShopCart] = useState<Item[]>([])

  console.log(shopCart)

  const addCoffeeInCart = (item: Item) => {
    const itemAlreadyExistsInCart = shopCart.find(
      (shopCartItem) => shopCartItem.id === item.id,
    )

    if (itemAlreadyExistsInCart) {
      setShopCart((state) => {
        return state.map((shopCartItem) => {
          if (shopCartItem.id === item.id) {
            return {
              ...shopCartItem,
              amount: shopCartItem.amount + item.amount,
            }
          }

          return shopCartItem
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
