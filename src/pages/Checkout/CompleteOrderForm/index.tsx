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
        <div className="formPanel addressPanel">
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
            <input id="creditCard" type="radio" name="paymentOption" />
            <label htmlFor="creditCard" className="paymentOption">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </label>

            <input id="debitCard" type="radio" name="paymentOption" />
            <label htmlFor="debitCard" className="paymentOption">
              <Bank size={16} />
              <span>Cartão de débito</span>
            </label>

            <input id="money" type="radio" name="paymentOption" />
            <label htmlFor="money" className="paymentOption">
              <Money size={16} />
              <span>Dinheiro</span>
            </label>
          </div>
        </div>
      </form>
    </CompleteOrderFormContainer>
  )
}
