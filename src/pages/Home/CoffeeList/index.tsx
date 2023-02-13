import { Coffee } from './Coffee'
import { CoffeeListContainer } from './styles'

// array 1 to 14
const coffeeList = Array.from(Array(14).keys())

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <span className="listTitle">Nossos cafés</span>
      <div className="coffeeList">
        {coffeeList.map((coffee) => (
          <Coffee />
        ))}
      </div>
    </CoffeeListContainer>
  )
}
