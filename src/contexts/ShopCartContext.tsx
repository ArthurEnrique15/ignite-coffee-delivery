import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  decreaseItemAmountInCartAction,
  removeItemFromCartAction,
  resetCartAction,
} from '../reducers/shop-cart/actions'
import {
  CartItem,
  Coffee,
  shopCartReducer,
} from '../reducers/shop-cart/reducer'

interface ShopCartContextType {
  shopCart: CartItem[]
  addItemsInCart: (item: CartItem) => void
  removeItemFromCart: (id: number) => void
  decreaseItemAmountInCart: (id: number) => void
  resetCart: () => void
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

export function ShopCartContextProvider(params: ShopCartContextProviderProps) {
  const { children } = params

  const [shopCartState, dispatch] = useReducer(shopCartReducer, {
    shopCart: test,
  })

  const { shopCart } = shopCartState

  const addItemsInCart = (coffee: Coffee) => {
    dispatch(addItemToCartAction(coffee))
  }

  const removeItemFromCart = (id: number) => {
    dispatch(removeItemFromCartAction(id))
  }

  const decreaseItemAmountInCart = (id: number) => {
    dispatch(decreaseItemAmountInCartAction(id))
  }

  const resetCart = () => {
    dispatch(resetCartAction())
  }

  return (
    <ShopCartContext.Provider
      value={{
        shopCart,
        addItemsInCart,
        removeItemFromCart,
        decreaseItemAmountInCart,
        resetCart,
      }}
    >
      {children}
    </ShopCartContext.Provider>
  )
}
