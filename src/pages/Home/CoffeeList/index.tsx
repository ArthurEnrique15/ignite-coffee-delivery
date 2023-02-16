import { AVAILABLE_COFFEES } from '../../../constants/coffees'
import { Coffee } from './Coffee'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <span className="listTitle">Nossos cafés</span>
      <div className="coffeeList">
        {AVAILABLE_COFFEES.map((coffee) => (
          <Coffee
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            tags={coffee.tags}
            price={coffee.price}
            image={coffee.image}
          />
        ))}
      </div>
    </CoffeeListContainer>
  )
}
