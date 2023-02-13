import { CompleteOrderForm } from './CompleteOrderForm'
import { SelectedCoffees } from './SelectedCoffees'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
