import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'

import successImg from '../../assets/success.png'

export function Success() {
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
                  <span className="bold">Rua João Daniel Martinelli, 102</span>
                </p>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <span className="bold">Cartão de Crédito</span>
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
