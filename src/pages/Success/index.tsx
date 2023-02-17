import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'

import successImg from '../../assets/success.png'
import { STORAGE_NAME } from '../../constants/storage-name'

export function Success() {
  const order = JSON.parse(localStorage.getItem(STORAGE_NAME) || '{}')
  console.log(order)

  const paymentTypes = {
    money: 'Dinheiro',
    creditCard: 'Cartão de crédito',
    debitCard: 'Cartão de débito',
  }

  return (
    <SuccessContainer>
      <div className="successTitle">
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </div>

      <div className="successContent">
        <div className="panelBorder">
          <div className="successPanel">
            <div className="panelLine">
              <button className="addressButton">
                <MapPin size={16} weight="fill" />
              </button>

              <div className="panelText">
                <p>
                  Entrega em{' '}
                  <span className="bold">
                    {order.street}, {order.number}
                  </span>
                </p>
                <span>
                  {order.neighborhood} - {order.city}, {order.federalUnit}
                </span>
              </div>
            </div>

            <div className="panelLine">
              <button className="timerButton">
                <Timer size={16} weight="fill" />
              </button>

              <div className="panelText">
                <span>Previsão de entrega</span>
                <span className="bold">20 min - 30 min</span>
              </div>
            </div>

            <div className="panelLine">
              <button className="moneyButton">
                <CurrencyDollar size={16} weight="fill" />
              </button>

              <div className="panelText">
                <span>Pagamento na entrega</span>
                <span className="bold">
                  {paymentTypes[order.paymentType as keyof typeof paymentTypes]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={successImg}
          alt="Um desenho de um homem montado em uma moto indo entregar o pedido"
        />
      </div>
    </SuccessContainer>
  )
}
