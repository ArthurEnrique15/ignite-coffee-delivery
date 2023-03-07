import { useContext } from 'react'
import { ShopCartContext } from '../../../contexts/ShopCartContext'
import { formatPrice } from '../../../utils/format-price'
import { SelectedCoffee } from './SelectedCoffee'
import {
  BigTextRow,
  FinishOrderButton,
  LesserTextRow,
  OrderValueContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesPanel,
  SelectedCoffeesTitle,
} from './styles'

export function SelectedCoffees() {
  const { shopCart } = useContext(ShopCartContext)

  const deliveryCost = 7.0
  const totalCartPrice = shopCart.reduce(
    (total, coffee) => total + coffee.price * coffee.amount,
    0,
  )

  return (
    <SelectedCoffeesContainer>
      <SelectedCoffeesTitle>
        <span>Cafés selecionados</span>
      </SelectedCoffeesTitle>

      <SelectedCoffeesPanel>
        {shopCart.map((coffee) => (
          <SelectedCoffee key={coffee.id} coffee={{ ...coffee }} />
        ))}

        <footer>
          <OrderValueContainer>
            <LesserTextRow>
              <span>Total de itens</span>
              <span>R$ {formatPrice(totalCartPrice)}</span>
            </LesserTextRow>

            <LesserTextRow>
              <span>Entrega</span>
              <span>R$ {formatPrice(deliveryCost)}</span>
            </LesserTextRow>

            <BigTextRow>
              <span>Total</span>
              <span>R$ {formatPrice(totalCartPrice + deliveryCost)}</span>
            </BigTextRow>
          </OrderValueContainer>

          <FinishOrderButton>Confirmar pedido</FinishOrderButton>
        </footer>
      </SelectedCoffeesPanel>
    </SelectedCoffeesContainer>
  )
}
