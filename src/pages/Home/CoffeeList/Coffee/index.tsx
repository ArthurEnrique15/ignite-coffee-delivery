import { CoffeeContainer } from './styles'

import coffeeImg from '../../../../assets/coffeeTypes/Type=Americano.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Coffee() {
  return (
    <CoffeeContainer>
      <img src={coffeeImg} alt="" />
      <div className="tags">
        <span>Tradicional</span>
        <span>Gelado</span>
      </div>

      <div className="title">
        <span>Expresso tradicional</span>
      </div>

      <span className="description">
        O tradicional café feito com água quente e grãos moídos
      </span>

      <footer>
        <div className="price">
          <span>R$ </span>
          <span>9,90</span>
        </div>

        <div className="productCount">
          <Minus size={14} />
          <span>1</span>
          <Plus size={14} />
        </div>

        <button>
          <ShoppingCart size={22} weight="fill" color="white" />
        </button>
      </footer>
    </CoffeeContainer>
  )
}
