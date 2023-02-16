import { CoffeeContainer } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShopCartContext } from '../../../../contexts/ShopCartContext'
import { formatPrice } from '../../../../utils/format-price'

interface CoffeeProps {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Coffee(props: CoffeeProps) {
  const { id, name, description, tags, price, image } = props

  const { addCoffeeInCart } = useContext(ShopCartContext)

  const [amount, setAmount] = useState(0)

  const handleIncreaseAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  const handleAddCoffeeInCart = () => {
    if (amount > 0) {
      addCoffeeInCart({
        ...props,
        amount,
      })
      setAmount(0)
    }
  }

  return (
    <CoffeeContainer>
      <img src={`src/assets/coffeeTypes/${image}`} alt="" />

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="title">
        <span>{name}</span>
      </div>

      <span className="description">{description}</span>

      <footer>
        <div className="price">
          <span>R$ </span>
          <span>{formatPrice(price)}</span>
        </div>

        <div className="productCount">
          <button className="changeAmountButton" onClick={handleDecreaseAmount}>
            <Minus size={14} />
          </button>

          <span>{amount}</span>

          <button className="changeAmountButton" onClick={handleIncreaseAmount}>
            <Plus size={14} />
          </button>
        </div>

        <button className="shopCart" onClick={handleAddCoffeeInCart}>
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </footer>
    </CoffeeContainer>
  )
}
