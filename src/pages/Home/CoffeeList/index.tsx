import { AVAILABLE_COFFEES } from '../../../constants/coffees'
import { Coffee } from './Coffee'
import { CoffeeListContainer, ListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <span className="listTitle">Nossos cafés</span>
      <ListContainer>
        {AVAILABLE_COFFEES.map((coffee) => (
          <Coffee key={coffee.id} {...coffee} />
        ))}
      </ListContainer>
    </CoffeeListContainer>
  )
}
