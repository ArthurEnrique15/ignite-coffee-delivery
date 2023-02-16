import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

import { CartItem, ShopCartContext } from '../../../../contexts/ShopCartContext'
import { formatPrice } from '../../../../utils/format-price'
import { SelectedCoffeeContainer } from './styles'

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
      <img
        className="coffeeImg"
        src={`src/assets/coffeeTypes/${image}`}
        alt=""
      />
      <div className="coffeeInfo">
        <span>{name}</span>

        <div className="productActions">
          <div className="productCount">
            <Minus size={14} onClick={handleDecreaseAmount} />
            <span>{amount}</span>
            <Plus size={14} onClick={handleIncreaseAmount} />
          </div>

          <button className="removeProduct" onClick={handleRemoveItemFromCart}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>

      <div className="price">
        <span>R$ {formatPrice(price * amount)}</span>
      </div>
    </SelectedCoffeeContainer>
  )
}
