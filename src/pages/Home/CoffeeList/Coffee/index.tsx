import { CoffeeContainer } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CoffeeProps {
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Coffee({ name, description, tags, price, image }: CoffeeProps) {
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
          <Minus size={14} />
          <span>0</span>
          <Plus size={14} />
        </div>

        <button>
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </footer>
    </CoffeeContainer>
  )
}
