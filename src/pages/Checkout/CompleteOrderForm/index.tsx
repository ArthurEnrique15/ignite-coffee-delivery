import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CompleteOrderFormContainer } from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <div className="title">
        <span>Complete seu pedido</span>
      </div>

      <form>
        <div className="formPanel">
          <div className="formHeader">
            <MapPinLine className="addressIcon" size={22} />

            <div className="formHeaderText">
              <span>Endereço de entrega</span>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>

          <div className="inputs">
            <p>
              <input type="text" placeholder="CEP" autoComplete="off" />
            </p>
            <p>
              <input type="text" placeholder="Rua" className="fullInput" />
            </p>
            <p>
              <input type="text" placeholder="Número" />
              <input
                type="text"
                placeholder="Complemento"
                className="fullInput"
              />
            </p>
            <p>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" className="fullInput" />
              <input
                type="text"
                placeholder="UF"
                className="federalUnitInput"
              />
            </p>
          </div>
        </div>

        <div className="formPanel paymentPanel">
          <div className="formHeader paymentPanelHeader">
            <CurrencyDollar className="paymentIcon" size={22} />

            <div className="formHeaderText">
              <span>Pagamento</span>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </div>

          <div className="paymentOptions">
            <label>
              <input type="radio" name="radio" />
              <CreditCard />
              Cartão de crédito
            </label>

            <label>
              <input type="radio" name="radio" />
              <Bank />
              Cartão de débito
            </label>

            <label>
              <input type="radio" name="radio" />
              <Money />
              Dinheiro
            </label>
          </div>
        </div>
      </form>
    </CompleteOrderFormContainer>
  )
}
