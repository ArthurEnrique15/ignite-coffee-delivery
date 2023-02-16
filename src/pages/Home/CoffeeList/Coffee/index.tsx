import { CoffeeContainer } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

interface CoffeeProps {
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Coffee({ name, description, tags, price, image }: CoffeeProps) {
  const [amount, setAmount] = useState(0)

  const handleIncreaseAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1)
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
          <span>{price}</span>
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

        <button className="shopCart">
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </footer>
    </CoffeeContainer>
  )
}
