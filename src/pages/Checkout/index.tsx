import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CompleteOrderForm } from './CompleteOrderForm'
import { SelectedCoffees } from './SelectedCoffees'
import { CheckoutForm } from './styles'
import { useContext } from 'react'
import { ShopCartContext } from '../../contexts/ShopCartContext'
import { STORAGE_NAME } from '../../constants/storage-name'

const addressFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'CEP inválido'),
  street: zod.string().min(1, 'Informe a rua.'),
  number: zod.string().min(1, 'Informe o número.'),
  complement: zod.string().min(1, 'Informe o complemento').optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro.'),
  city: zod.string().min(1, 'Informe a cidade.'),
  federalUnit: zod.string().length(2, 'Informe a UF.'),
  paymentType: zod.union([
    zod.literal('money'),
    zod.literal('creditCard'),
    zod.literal('debitCard'),
  ]),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const { shopCart, resetCart } = useContext(ShopCartContext)

  const addressForm = useForm<AddressFormData>({
    // resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      federalUnit: '',
    },
  })

  const { handleSubmit, reset } = addressForm

  const handleFinishOrder = (data: AddressFormData) => {
    const order = {
      ...data,
      items: shopCart,
    }

    localStorage.setItem(STORAGE_NAME, JSON.stringify(order))
    resetCart()
    reset()
    navigate('/success')
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(handleFinishOrder)}>
      <FormProvider {...addressForm}>
        <CompleteOrderForm />
      </FormProvider>
      <SelectedCoffees />
    </CheckoutForm>
  )
}
