import { useContext } from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer } from './styles'

import logo from '../../assets/Logo.png'
import { ShopCartContext } from '../../contexts/ShopCartContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shopCart } = useContext(ShopCartContext)

  const itemsCount = shopCart.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Timer">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <button className="locationButton">
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </button>
        <NavLink to="/checkout" title="Timer">
          <button className="shopCartButton">
            {itemsCount > 0 ? (
              <button className="itemsAmount">{itemsCount}</button>
            ) : (
              ''
            )}
            <ShoppingCart size={22} weight="fill" />
          </button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
