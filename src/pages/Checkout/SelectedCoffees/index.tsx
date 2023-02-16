import { useContext } from 'react'
import { ShopCartContext } from '../../../contexts/ShopCartContext'
import { SelectedCoffee } from './SelectedCoffee'
import { SelectedCoffeesContainer } from './styles'

export function SelectedCoffees() {
  const { shopCart } = useContext(ShopCartContext)

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
              <span>R$ 0,00</span>
            </div>

            <div className="lesserText">
              <span>Entrega</span>
              <span>R$ 0,00</span>
            </div>

            <div className="bigText">
              <span>Total</span>
              <span>R$ 0,00</span>
            </div>
          </div>

          <button className="finishOrderButton">Confirmar pedido</button>
        </footer>
      </div>
    </SelectedCoffeesContainer>
  )
}
