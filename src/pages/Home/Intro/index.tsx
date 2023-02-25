import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'

import coffeeImg from '../../../assets/home-coffee.png'
import {
  CartButton,
  CoffeeButton,
  DescriptionContainer,
  IntroContainer,
  ItemContainer,
  PackageButton,
  TimerButton,
  TitleContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
      </TitleContainer>

      <DescriptionContainer>
        <ItemContainer>
          <CartButton>
            <ShoppingCart size={16} weight="fill" />
          </CartButton>
          <span>Compra simples e segura</span>
        </ItemContainer>

        <ItemContainer>
          <PackageButton>
            <Package size={16} weight="fill" />
          </PackageButton>
          <span>Embalagem mantém o café intacto</span>
        </ItemContainer>

        <ItemContainer>
          <TimerButton>
            <Timer size={16} weight="fill" />
          </TimerButton>
          <span>Entrega rápida e rastreada</span>
        </ItemContainer>

        <ItemContainer>
          <CoffeeButton>
            <Coffee size={16} weight="fill" />
          </CoffeeButton>
          <span>O café chega fresquinho até você</span>
        </ItemContainer>
      </DescriptionContainer>

      <img src={coffeeImg} alt="" />
    </IntroContainer>
  )
}
