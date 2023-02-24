import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface Coffee {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export type CartItem = Coffee & { amount: number }

interface ShopCartState {
  shopCart: CartItem[]
}

export function shopCartReducer(state: ShopCartState, action: any) {
  const possibleActions = {
    [ActionTypes.ADD_ITEM_TO_CART]: () => {
      const { coffee } = action.payload

      const coffeeIndexIfExistsInCart = state.shopCart.findIndex((item) => {
        return item.id === coffee.id
      })

      return produce(state, (draft) => {
        if (coffeeIndexIfExistsInCart >= 0) {
          draft.shopCart[coffeeIndexIfExistsInCart].amount += 1
        } else {
          draft.shopCart.push({ ...coffee, amount: 1 })
        }
      })
    },

    [ActionTypes.REMOVE_ITEM_FROM_CART]: () => {
      const { itemId } = action.payload

      const itemIndex = state.shopCart.findIndex((item) => {
        return item.id === itemId
      })

      if (itemIndex < 0) return state

      return produce(state, (draft) => {
        draft.shopCart = draft.shopCart.filter((item) => item.id !== itemId)
      })
    },

    [ActionTypes.DECREASE_ITEM_AMOUNT_IN_CART]: () => {
      const { itemId } = action.payload

      const itemIndex = state.shopCart.findIndex((item) => {
        return item.id === itemId
      })

      if (itemIndex < 0) return state

      return produce(state, (draft) => {
        draft.shopCart[itemIndex].amount -= 1
      })
    },

    [ActionTypes.RESET_CART]: () => {
      return produce(state, (draft) => {
        draft.shopCart = []
      })
    },
  }

  const actionType = action.type as keyof typeof possibleActions

  const executeAction = possibleActions[actionType]

  return executeAction() || state
}
