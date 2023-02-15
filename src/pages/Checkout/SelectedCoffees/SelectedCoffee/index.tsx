import { Minus, Plus, Trash } from 'phosphor-react'

import coffeeImg from '../../../../assets/coffeeTypes/Type=Americano.png'
import { SelectedCoffeeContainer } from './styles'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <img className="coffeeImg" src={coffeeImg} alt="" />
      <div className="coffeeInfo">
        <span>Expresso Tradicional</span>

        <div className="productActions">
          <div className="productCount">
            <Minus size={14} />
            <span>1</span>
            <Plus size={14} />
          </div>

          <button className="removeProduct">
            <Trash size={16} />
            Remover
          </button>
        </div>
      </div>

      <div className="price">
        <span>R$ 9,90</span>
      </div>
    </SelectedCoffeeContainer>
  )
}
