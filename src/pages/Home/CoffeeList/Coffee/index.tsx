import {
  AddItemsButton,
  ChangeAmountButton,
  CoffeeContainer,
  FooterContainer,
  PriceContainer,
  PriceCountContainer,
  TagsContainer,
  TitleContainer,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShopCartContext } from '../../../../contexts/ShopCartContext'
import { formatPrice } from '../../../../utils/format-price'

interface CoffeeProps {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function Coffee(props: CoffeeProps) {
  const { name, description, tags, price, image } = props

  const { addItemsInCart } = useContext(ShopCartContext)

  const [amount, setAmount] = useState(0)

  const handleIncreaseAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  const handleAddItemsInCart = () => {
    if (amount > 0) {
      addItemsInCart({
        ...props,
        amount,
      })
      setAmount(0)
    }
  }

  return (
    <CoffeeContainer>
      <img src={`src/assets/coffeeTypes/${image}`} alt="" />

      <TagsContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <TitleContainer>
        <span>{name}</span>
      </TitleContainer>

      <span className="description">{description}</span>

      <FooterContainer>
        <PriceContainer>
          <span>R$ </span>
          <span>{formatPrice(price)}</span>
        </PriceContainer>

        <PriceCountContainer>
          <ChangeAmountButton onClick={handleDecreaseAmount}>
            <Minus size={14} />
          </ChangeAmountButton>

          <span>{amount}</span>

          <ChangeAmountButton onClick={handleIncreaseAmount}>
            <Plus size={14} />
          </ChangeAmountButton>
        </PriceCountContainer>

        <AddItemsButton onClick={handleAddItemsInCart}>
          <ShoppingCart size={22} weight="fill" color="white" />
        </AddItemsButton>
      </FooterContainer>
    </CoffeeContainer>
  )
}
