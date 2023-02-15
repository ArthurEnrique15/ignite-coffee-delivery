import { SelectedCoffee } from './SelectedCoffee'
import { SelectedCoffeesContainer } from './styles'

const coffeesArray = [1, 2, 3]

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <div className="title">
        <span>Cafés selecionados</span>
      </div>

      <div className="panel">
        {coffeesArray.map((coffee) => (
          <SelectedCoffee />
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
