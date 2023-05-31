import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

import { ShopCartContext } from '../../../../contexts/ShopCartContext'
import { CartItem } from '../../../../reducers/shop-cart/reducer'
import { formatPrice } from '../../../../utils/format-price'
import {
  CoffeeInfoContainer,
  ProductActionsContainer,
  ProductCountContainer,
  RemoveProductButton,
  SelectedCoffeeContainer,
  NamePriceContainer,
  PriceText,
} from './styles'

interface SelectedCoffeeProps {
  coffee: CartItem
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { id, name, amount, price, image } = coffee

  const { addItemsInCart, removeItemFromCart, decreaseItemAmountInCart } =
    useContext(ShopCartContext)

  const handleIncreaseAmount = () => {
    addItemsInCart({ ...coffee, amount: 1 })
  }

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      decreaseItemAmountInCart(id)
    }
  }

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(id)
  }

  return (
    <SelectedCoffeeContainer>
      <img src={`src/assets/coffeeTypes/${image}`} alt="" />

      <CoffeeInfoContainer>
        <NamePriceContainer>
          <span>{name}</span>
          <PriceText>R$ {formatPrice(price * amount)}</PriceText>
        </NamePriceContainer>

        <ProductActionsContainer>
          <ProductCountContainer>
            <Minus size={14} onClick={handleDecreaseAmount} />
            <span>{amount}</span>
            <Plus size={14} onClick={handleIncreaseAmount} />
          </ProductCountContainer>

          <RemoveProductButton onClick={handleRemoveItemFromCart}>
            <Trash size={16} />
            Remover
          </RemoveProductButton>
        </ProductActionsContainer>
      </CoffeeInfoContainer>
    </SelectedCoffeeContainer>
  )
}
