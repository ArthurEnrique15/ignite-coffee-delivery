import { useContext } from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.png'
import { ShopCartContext } from '../../contexts/ShopCartContext'

export function Header() {
  const { shopCart } = useContext(ShopCartContext)

  const itemsCount = shopCart.length

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <button className="locationButton">
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </button>
        <button className="shopCartButton">
          {itemsCount > 0 ? (
            <button className="itemsAmount">{itemsCount}</button>
          ) : (
            ''
          )}
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
