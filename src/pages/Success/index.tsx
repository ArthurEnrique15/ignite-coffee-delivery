import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  AddressButton,
  MoneyButton,
  RowText,
  SuccessContainer,
  SuccessContentBorder,
  SuccessContentContainer,
  SuccessPanelContainer,
  SuccessPanelRow,
  SuccessTitleContainer,
  TimerButton,
} from './styles'

import successImg from '../../assets/success.png'
import { STORAGE_NAME } from '../../constants/storage-name'

export function Success() {
  const order = JSON.parse(localStorage.getItem(STORAGE_NAME) || '{}')

  const paymentTypes = {
    money: 'Dinheiro',
    creditCard: 'Cartão de crédito',
    debitCard: 'Cartão de débito',
  }

  return (
    <SuccessContainer>
      <SuccessTitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </SuccessTitleContainer>

      <SuccessContentContainer>
        <SuccessContentBorder>
          <SuccessPanelContainer>
            <SuccessPanelRow>
              <div>
                <AddressButton>
                  <MapPin size={16} weight="fill" />
                </AddressButton>
              </div>

              <RowText>
                <p>
                  Entrega em{' '}
                  <span className="bold">
                    {order.street}, {order.number}
                  </span>
                </p>
                <span>
                  {order.neighborhood} - {order.city}, {order.federalUnit}
                </span>
              </RowText>
            </SuccessPanelRow>

            <SuccessPanelRow>
              <TimerButton>
                <Timer size={16} weight="fill" />
              </TimerButton>

              <RowText>
                <span>Previsão de entrega</span>
                <span className="bold">20 min - 30 min</span>
              </RowText>
            </SuccessPanelRow>

            <SuccessPanelRow>
              <MoneyButton>
                <CurrencyDollar size={16} weight="fill" />
              </MoneyButton>

              <RowText>
                <span>Pagamento na entrega</span>
                <span className="bold">
                  {paymentTypes[order.paymentType as keyof typeof paymentTypes]}
                </span>
              </RowText>
            </SuccessPanelRow>
          </SuccessPanelContainer>
        </SuccessContentBorder>

        <div>
          <img
            src={successImg}
            alt="Um desenho de um homem montado em uma moto indo entregar o pedido"
          />
        </div>
      </SuccessContentContainer>
    </SuccessContainer>
  )
}
