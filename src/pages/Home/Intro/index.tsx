import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'

import coffeeImg from '../../../assets/home-coffee.png'
import { IntroContainer } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div className="title">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
      </div>

      <div className="description">
        <div className="item">
          <button className="cartButton">
            <ShoppingCart size={16} weight="fill" />
          </button>
          <span>Compra simples e segura</span>
        </div>

        <div className="item">
          <button className="packageButton">
            <Package size={16} weight="fill" />
          </button>
          <span>Embalagem mantém o café intacto</span>
        </div>

        <div className="item">
          <button className="timerButton">
            <Timer size={16} weight="fill" />
          </button>
          <span>Entrega rápida e rastreada</span>
        </div>

        <div className="item">
          <button className="coffeeButton">
            <Coffee size={16} weight="fill" />
          </button>
          <span>O café chega fresquinho até você</span>
        </div>
      </div>

      <img src={coffeeImg} alt="" />
    </IntroContainer>
  )
}
