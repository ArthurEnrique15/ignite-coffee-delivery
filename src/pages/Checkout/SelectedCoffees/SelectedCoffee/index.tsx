import { Minus, Plus, Trash } from 'phosphor-react'

import { CartItem } from '../../../../contexts/ShopCartContext'
import { formatPrice } from '../../../../utils/format-price'
import { SelectedCoffeeContainer } from './styles'

interface SelectedCoffeeProps {
  coffee: CartItem
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { id, name, amount, price, image } = coffee

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
            <Minus size={14} />
            <span>{amount}</span>
            <Plus size={14} />
          </div>

          <button className="removeProduct">
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
