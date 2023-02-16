import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../constants/coffees'

export type CartItem = Coffee & { amount: number }

interface ShopCartContextType {
  shopCart: CartItem[]
  addCoffeeInCart: (item: CartItem) => void
  removeItemFromCart: (id: number) => void
  removeSingleCoffeeFromCart: (id: number) => void
}

export const ShopCartContext = createContext({} as ShopCartContextType)

interface ShopCartContextProviderProps {
  children: ReactNode
}

const test = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.9,
    image: 'expresso-tradicional.png',
    amount: 3,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 9.9,
    image: 'expresso-americano.png',
    amount: 3,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.9,
    image: 'expresso-cremoso.png',
    amount: 3,
  },
]

export function ShopCartContextProvider({
  children,
}: ShopCartContextProviderProps) {
  const [shopCart, setShopCart] = useState<CartItem[]>(test)

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

  const removeItemFromCart = (id: number) => {
    setShopCart((state) => {
      return state.filter((item) => item.id !== id)
    })
  }

  const removeSingleCoffeeFromCart = (id: number) => {
    setShopCart((state) => {
      const item = state.find((item) => item.id === id)

      if (!item || item.amount === 0) return state

      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount - 1,
          }
        }

        return item
      })
    })
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        addCoffeeInCart,
        removeItemFromCart,
        removeSingleCoffeeFromCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
