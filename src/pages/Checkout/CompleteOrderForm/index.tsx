import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import {
  CompleteOrderFormContainer,
  FormHeaderContainer,
  FormPanelContainer,
  InputsContainer,
  PaymentOptionLabel,
  PaymentOptionsContainer,
  TitleContainer,
} from './styles'

export function CompleteOrderForm() {
  const { register } = useFormContext()

  return (
    <CompleteOrderFormContainer>
      <TitleContainer>
        <span>Complete seu pedido</span>
      </TitleContainer>

      <FormPanelContainer>
        <FormHeaderContainer>
          <MapPinLine className="addressIcon" size={22} />

          <div className="headerText">
            <span>Endereço de entrega</span>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </FormHeaderContainer>

        <InputsContainer>
          <p>
            <input
              id="cep"
              type="text"
              placeholder="CEP"
              autoComplete="off"
              {...register('cep')}
            />
          </p>
          <p>
            <input
              id="street"
              type="text"
              placeholder="Rua"
              className="fullInput"
              {...register('street')}
            />
          </p>
          <p>
            <input
              id="number"
              type="number"
              placeholder="Número"
              {...register('number')}
            />
            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              className="fullInput"
              {...register('complement')}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input
              type="text"
              placeholder="Cidade"
              className="fullInput"
              {...register('city')}
            />
            <input
              type="text"
              placeholder="UF"
              className="federalUnitInput"
              {...register('federalUnit')}
            />
          </p>
        </InputsContainer>
      </FormPanelContainer>

      <FormPanelContainer>
        <FormHeaderContainer>
          <CurrencyDollar className="paymentIcon" size={22} />

          <div className="headerText">
            <span>Pagamento</span>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </FormHeaderContainer>

        <PaymentOptionsContainer>
          <input
            id="creditCard"
            type="radio"
            value="creditCard"
            {...register('paymentType')}
          />
          <PaymentOptionLabel htmlFor="creditCard">
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </PaymentOptionLabel>

          <input
            id="debitCard"
            type="radio"
            value="debitCard"
            {...register('paymentType')}
          />
          <PaymentOptionLabel htmlFor="debitCard">
            <Bank size={16} />
            <span>Cartão de débito</span>
          </PaymentOptionLabel>

          <input
            id="money"
            type="radio"
            value="money"
            {...register('paymentType')}
          />
          <PaymentOptionLabel htmlFor="money">
            <Money size={16} />
            <span>Dinheiro</span>
          </PaymentOptionLabel>
        </PaymentOptionsContainer>
      </FormPanelContainer>
    </CompleteOrderFormContainer>
  )
}
