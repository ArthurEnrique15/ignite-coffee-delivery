import { useContext } from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  HeaderContainer,
  ItemsAmount,
  LocationButton,
  ShopCartButton,
} from './styles'

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
        <LocationButton>
          <MapPin size={22} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </LocationButton>
        <NavLink to="/checkout" title="Timer">
          <ShopCartButton>
            {itemsCount > 0 ? <ItemsAmount>{itemsCount}</ItemsAmount> : ''}
            <ShoppingCart size={22} weight="fill" />
          </ShopCartButton>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
