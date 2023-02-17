import { useContext } from 'react'
import { ShopCartContext } from '../../../contexts/ShopCartContext'
import { formatPrice } from '../../../utils/format-price'
import { SelectedCoffee } from './SelectedCoffee'
import { SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { shopCart } = useContext(ShopCartContext)

  const deliveryCost = 7.0
  const totalCartPrice = shopCart.reduce(
    (total, coffee) => total + coffee.price * coffee.amount,
    0,
  )

  return (
    <SelectedCoffeesContainer>
      <div className="title">
        <span>Cafés selecionados</span>
      </div>

      <div className="panel">
        {shopCart.map((coffee) => (
          <SelectedCoffee key={coffee.id} coffee={{ ...coffee }} />
        ))}

        <footer>
          <div className="priceDescription">
            <div className="lesserText">
              <span>Total de itens</span>
              <span>R$ {formatPrice(totalCartPrice)}</span>
            </div>

            <div className="lesserText">
              <span>Entrega</span>
              <span>R$ {formatPrice(deliveryCost)}</span>
            </div>

            <div className="bigText">
              <span>Total</span>
              <span>R$ {formatPrice(totalCartPrice + deliveryCost)}</span>
            </div>
          </div>

          <button className="finishOrderButton" type="submit">
            Confirmar pedido
          </button>
        </footer>
      </div>
    </SelectedCoffeesContainer>
  )
}
