/* eslint-disable no-unused-vars */
import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  DECREASE_ITEM_AMOUNT_IN_CART = 'DECREASE_ITEM_AMOUNT_IN_CART',
  RESET_CART = 'RESET_CART',
}

export function addItemToCartAction(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { coffee },
  }
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { itemId },
  }
}

export function decreaseItemAmountInCartAction(itemId: number) {
  return {
    type: ActionTypes.DECREASE_ITEM_AMOUNT_IN_CART,
    payload: { itemId },
  }
}

export function resetCartAction() {
  return { type: ActionTypes.RESET_CART }
}
