import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CompleteOrderForm } from './CompleteOrderForm'
import { SelectedCoffees } from './SelectedCoffees'
import { CheckoutForm } from './styles'

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
    console.log(data)
    // reset()
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
