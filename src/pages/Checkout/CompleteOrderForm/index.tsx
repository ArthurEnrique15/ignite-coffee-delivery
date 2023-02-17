import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { CompleteOrderFormContainer } from './styles'

export function CompleteOrderForm() {
  const { register } = useFormContext()

  return (
    <CompleteOrderFormContainer>
      <div className="title">
        <span>Complete seu pedido</span>
      </div>

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
          <input
            id="creditCard"
            type="radio"
            value="creditCard"
            {...register('paymentType')}
          />
          <label htmlFor="creditCard">
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </label>

          <input
            id="debitCard"
            type="radio"
            value="debitCard"
            {...register('paymentType')}
          />
          <label htmlFor="debitCard">
            <Bank size={16} />
            <span>Cartão de débito</span>
          </label>

          <input
            id="money"
            type="radio"
            value="money"
            {...register('paymentType')}
          />
          <label htmlFor="money">
            <Money size={16} />
            <span>Dinheiro</span>
          </label>
        </div>
      </div>
    </CompleteOrderFormContainer>
  )
}
